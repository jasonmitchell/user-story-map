import React from 'react';
import styled from 'styled-components';
import { useImmerReducer } from 'use-immer';
import {Activity, Task, Story, generateId} from 'components/Cards';

const DesignSurface = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  min-width: 100vw;
  background: ${props => props.theme.background};
`;

const IncrementWrapper = styled.section`
  border-top: 1px solid #cccccc;
`;

const ColumnList = styled.div`
  display: flex;
`;

const Column = styled.div`
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

const backlogIncrementId = generateId();
const initialState = {
  increments: [
    {
      id: backlogIncrementId,
      name: 'Backlog'
    }
  ],
  activities: []
}

function reducer(draft, action) {
  switch (action.type) {
    case 'add-activity':
      draft.activities.splice(action.activityIndex, 0, {
        id: generateId(),
        title: '',
        tasks:  []
      })
      break;

    case 'add-task':
      const tasks = draft.activities[action.activityIndex].tasks;
      tasks.splice(action.taskIndex, 0, {
        id: generateId(),
        title: '',
        stories:  []
      })
      break;

    case 'add-story':
      const stories = draft.activities[action.activityIndex].tasks[action.taskIndex].stories;
      stories.splice(action.storyIndex, 0, {
        id: generateId(),
        incrementId: action.incrementId,
        title: ''
      })
      break;

    case 'add-release':
      draft.increments.splice(action.index, 0, {
        id: generateId(),
        name: ''
      })
      break;

    default:
      throw new Error('Unknown action type')
  }
}

function Increment({name, children, onAddAbove, onAddBelow}) {
  return (
    <IncrementWrapper>
      <header>
        <input type="text" defaultValue={name} autoFocus />
        <button type="button" onClick={onAddAbove}>Add Release Above</button>
        <button type="button" onClick={onAddBelow}>Add Release Below</button>
      </header>
      <div>
        {children}
      </div>
    </IncrementWrapper>
  )
}

function UserStoryMap() {
  const [{increments, activities}, dispatch] = useImmerReducer(reducer, initialState);

  function addActivityAtIndex(activityIndex) {
    if (activityIndex < 0) {
      activityIndex = 0
    }

    dispatch({type: 'add-activity', activityIndex})
  }

  function addTaskAtIndex(activityIndex, taskIndex) {
    if (taskIndex < 0) {
      taskIndex = 0
    }

    dispatch({type: 'add-task', activityIndex, taskIndex})
  }

  function addStoryAtIndex(increment, activityIndex, taskIndex) {
    return (storyIndex) => {
      if (storyIndex < 0) {
        storyIndex = 0
      }

      dispatch({type: 'add-story', incrementId: increment.id, activityIndex, taskIndex, storyIndex})
    }
  }

  function addReleaseAtIndex(index) {
    if (index < 0) {
      index = 0;
    }

    dispatch({type: 'add-release', index})
  }

  return (
    <DesignSurface>
      <ActivityList>
        {activities.map((activity, activityIndex) => (
          <div key={`activity-${activity.id}`}>
            <Column>
              <Activity title={activity.title}
                        onAddLeft={() => addActivityAtIndex(activityIndex)}
                        onAddRight={() => addActivityAtIndex(activityIndex + 1)} />
            </Column>

            <TaskList>
              {activity.tasks.map((task, taskIndex) => (
                <Column key={`task-${task.id}`}>
                  <Task title={task.title}
                        onAddLeft={() => addTaskAtIndex(activityIndex, taskIndex)}
                        onAddRight={() => addTaskAtIndex(activityIndex, taskIndex + 1)} />
                </Column>
              ))}

              {!activity.tasks.length &&
                <button type="button"
                  onClick={() => addTaskAtIndex(activityIndex, 0)}>
                  + New Task
                </button>}
            </TaskList>
          </div>
        ))}

        {!activities.length &&
          <button type="button"
            onClick={() => addActivityAtIndex(0)}>
            + New Activity
          </button>}
      </ActivityList>

      {increments.map((increment, index) => (
        <Increment key={`increment-${increment.id}`}
                   {...increment}
                   index={index}
                   onAddAbove={() => addReleaseAtIndex(index)}
                   onAddBelow={() => addReleaseAtIndex(index + 1)}>
          <ColumnList>
            {activities.map((activity, activityIndex) => {
              if (!activity.tasks.length) {
                return <Column key={`activity-empty-tasks-${activity.id}`}></Column>
              }

              return (
                activity.tasks.length && activity.tasks.map((task, taskIndex) => {
                  const storiesInIncrement = task.stories.filter(x => x.incrementId === increment.id);
                  const newStoryHandler = addStoryAtIndex(increment, activityIndex, taskIndex);

                  return (
                    <Column key={`task-stories-${task.id}`}>
                      {storiesInIncrement.map((story, storyIndex) => (
                          <Story key={`story-${story.id}`}
                                 {...story}
                                 onAddAbove={() => newStoryHandler(storyIndex)}
                                 onAddBelow={() => newStoryHandler(storyIndex + 1)} />
                      ))}

                      {!storiesInIncrement.length && <button type="button"
                              onClick={() => newStoryHandler(0)}>
                        + New Story
                        </button>}
                    </Column>
                  )
                })
              )
            })}
          </ColumnList>
        </Increment>
      ))}
    </DesignSurface>
  )
}

export default UserStoryMap;
