import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useImmerReducer} from 'use-immer';
import {reducer, initialState} from './state';
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
                    canDelete={releases.length > 1}
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
