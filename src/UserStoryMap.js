import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useImmerReducer} from 'use-immer';
import {generateId} from 'id';
import {Activity, Task, Story, actions as cardActions} from 'components/Cards';
import Release from 'components/Release';

const DesignSurface = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  min-width: 100vw;
  background: ${props => props.theme.background};
`;

export const ColumnList = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${props => props.theme.columnWidth};
  max-width: ${props => props.theme.columnWidth};
`;

const ActivityList = styled.div`
  display: flex;
`;

const TaskList = styled.div`
  display: flex;
`;

const initialState = {
  releases: [
    {
      id: `release-${generateId()}`,
      name: 'Backlog'
    }
  ],
  cards: []
}

function reducer(draft, action) {
  const shiftCardsOfType = (cards, type, index, filter) => {
    cards.filter(x => x.id.indexOf(type) === 0 && x.index >= index && (!filter || filter(x))).forEach(card => {
      card.index += 1;
    });
  };

  const resequenceCards = (cards) => {
    let index = 0;

    cards.sort((a, b) => a.index - b.index).forEach(x => {
      x.index = index++;
    })
  };

  const findCardIndices = (cards, predicate) => {
    const indices = [];

    cards.forEach((card, index) => {
      if (predicate(card) === true) {
        indices.push(index);
      }
    })

    return indices;
  };

  const deleteActivity = (cards, activityId) => {
    const activityIndex = cards.findIndex(x => x.id === activityId);
    const activity = cards[activityIndex];
    const taskIds = findCardIndices(draft.cards, x => x.activityId === activity.id).map(x => draft.cards[x].id);

    taskIds.forEach(taskId => {
      deleteTask(cards, taskId);
    });

    draft.cards.splice(activityIndex, 1);
  }

  const deleteTask = (cards, taskId) => {
    const taskIndex = cards.findIndex(x => x.id === taskId);
    const task = cards[taskIndex];
    const storyIndices = findCardIndices(draft.cards, x => x.taskId === taskId);

    storyIndices.forEach(x => {
      draft.cards.splice(x, 1);
    });

    draft.cards.splice(taskIndex, 1);

    return task;
  }

  switch (action.type) {
    case cardActions.ADD_ACTIVITY:
      shiftCardsOfType(draft.cards, 'activity', action.activityIndex);

      draft.cards.push({
        id: `activity-${generateId()}`,
        type: 'activity',
        title: '',
        index: action.activityIndex
      });
      break;

    case cardActions.ADD_TASK:
      const activityTaskFilter = x => x.activityId === action.activityId;
      shiftCardsOfType(draft.cards, 'task', action.taskIndex, activityTaskFilter);

      draft.cards.push({
        id: `task-${generateId()}`,
        type: 'task',
        activityId: action.activityId,
        title: '',
        index: action.taskIndex
      });
      break;

    case cardActions.ADD_STORY:
      const releaseStoryFilter = x => x.taskId === action.taskId && x.releaseId === action.releaseId;
      shiftCardsOfType(draft.cards, 'story', action.storyIndex, releaseStoryFilter);

      draft.cards.push({
        id: `story-${generateId()}`,
        type: 'story',
        releaseId: action.releaseId,
        taskId: action.taskId,
        title: '',
        index: action.storyIndex
      });
      break;

    case cardActions.UPDATE_CARD:
      const card = draft.cards.find(x => x.id === action.cardId);
      card.title = action.title;
      break;

    case cardActions.DELETE_ACTIVITY:
      deleteActivity(draft.cards, action.cardId);
      resequenceCards(draft.cards.filter(x => x.type === 'activity'));
      break;

    case cardActions.DELETE_TASK:
      const task = deleteTask(draft.cards, action.cardId);
      resequenceCards(draft.cards.filter(x => x.activityId === task.activityId));
      break;

    case cardActions.DELETE_STORY:
      const storyIndex = draft.cards.findIndex(x => x.id === action.cardId);
      const story = draft.cards[storyIndex];

      draft.cards.splice(storyIndex, 1);
      resequenceCards(draft.cards.filter(x => x.taskId === story.taskId && x.releaseId === story.releaseId));
      break;

    case 'add-release':
      draft.releases.splice(action.index, 0, {
        id: generateId(),
        name: ''
      })
      break;

    case 'update-release':
      const release = draft.releases.find(x => x.id === action.releaseId);
      release.name = action.name;
      break;

    default:
      throw new Error('Unknown action type')
  }
}

function addActivityAtIndex(dispatch, activityIndex) {
  dispatch({type: cardActions.ADD_ACTIVITY, activityIndex})
}

function addTaskAtIndex(dispatch, activityId, taskIndex) {
  dispatch({type: cardActions.ADD_TASK, activityId, taskIndex})
}

function addStoryAtIndex(dispatch, releaseId, taskId, storyIndex) {
  return (storyIndex) => {
    dispatch({type: cardActions.ADD_STORY, releaseId, taskId, storyIndex})
  }
}

function addReleaseAtIndex(dispatch, index) {
  dispatch({type: 'add-release', index})
}

function findCardsOfType(cards, type) {
  return cards.filter(x => x.id.indexOf(type) === 0).sort((a, b) => a.index - b.index);
}

function UserStoryMap({map, onMapUpdated}) {
  const [state, dispatch] = useImmerReducer(reducer, map || initialState);
  const {releases, cards} = state;
  const activities = findCardsOfType(cards, 'activity');
  const tasks = findCardsOfType(cards, 'task');
  const stories = findCardsOfType(cards, 'story');

  useEffect(() => {
    onMapUpdated(state)
  }, [onMapUpdated, state, map])

  return (
    <DesignSurface>
      <ActivityList>
        {activities.map((activity) => {
          const activityTasks = tasks.filter(x => x.activityId === activity.id);

          return (
            <div key={activity.id}>
              <Column>
                <Activity {...activity}
                          onAddLeft={() => addActivityAtIndex(dispatch, activity.index)}
                          onAddRight={() => addActivityAtIndex(dispatch, activity.index + 1)}
                          dispatch={dispatch} />
              </Column>

              <TaskList>
                {activityTasks.map((task) => (
                  <Column key={task.id}>
                    <Task {...task}
                          onAddLeft={() => addTaskAtIndex(dispatch, activity.id, task.index)}
                          onAddRight={() => addTaskAtIndex(dispatch, activity.id, task.index + 1)}
                          dispatch={dispatch} />
                  </Column>
                ))}

                {!activityTasks.length &&
                  <button type="button"
                    onClick={() => addTaskAtIndex(dispatch, activity.id, 0)}>
                    + New Task
                  </button>}
              </TaskList>
            </div>
          )
        })}

        {!activities.length &&
          <button type="button"
            onClick={() => addActivityAtIndex(dispatch, 0)}>
            + New Activity
          </button>}
      </ActivityList>

      {releases.map((release, index) => {
        const releaseStories = stories.filter(x => x.releaseId === release.id);

        return (
          <Release key={`release-${release.id}`}
                    {...release}
                    dispatch={dispatch}
                    index={index}
                    onAddAbove={() => addReleaseAtIndex(dispatch, index)}
                    onAddBelow={() => addReleaseAtIndex(dispatch, index + 1)}>
            <ColumnList>
              {activities.map((activity) => {
                const activityTasks = tasks.filter(x => x.activityId === activity.id);

                if (!activityTasks.length) {
                  return <Column key={`activity-empty-tasks-${activity.id}`}></Column>
                }

                return (
                  activityTasks.length && activityTasks.map((task) => {
                    const storiesInRelease = releaseStories.filter(x => x.releaseId === release.id && x.taskId === task.id);
                    const newStoryHandler = addStoryAtIndex(dispatch, release.id, task.id);

                    return (
                      <Column key={`task-stories-${task.id}`}>
                        {storiesInRelease.map((story, storyIndex) => (
                            <Story key={story.id}
                                  {...story}
                                  onAddAbove={() => newStoryHandler(storyIndex)}
                                  onAddBelow={() => newStoryHandler(storyIndex + 1)}
                                  dispatch={dispatch} />
                        ))}

                        {!storiesInRelease.length && <button type="button"
                                onClick={() => newStoryHandler(0)}>
                          + New Story
                          </button>}
                      </Column>
                    )
                  })
                )
              })}
            </ColumnList>
          </Release>
        )
      })}
    </DesignSurface>
  )
}

export default UserStoryMap;