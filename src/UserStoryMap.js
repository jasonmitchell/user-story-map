import React from 'react';
import styled from 'styled-components';
import {useImmerReducer} from 'use-immer';
import {Activity, Task, Story} from 'components/Cards';
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

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

const initialState = {
  releases: [
    {
      id: generateId(),
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
        releaseId: action.releaseId,
        title: ''
      })
      break;

    case 'add-release':
      draft.releases.splice(action.index, 0, {
        id: generateId(),
        name: ''
      })
      break;

    default:
      throw new Error('Unknown action type')
  }
}

function addActivityAtIndex(dispatch, activityIndex) {
  if (activityIndex < 0) {
    activityIndex = 0
  }

  dispatch({type: 'add-activity', activityIndex})
}

function addTaskAtIndex(dispatch, activityIndex, taskIndex) {
  if (taskIndex < 0) {
    taskIndex = 0
  }

  dispatch({type: 'add-task', activityIndex, taskIndex})
}

function addStoryAtIndex(dispatch, release, activityIndex, taskIndex, storyIndex) {
  return (storyIndex) => {
    if (storyIndex < 0) {
      storyIndex = 0
    }

    dispatch({type: 'add-story', releaseId: release.id, activityIndex, taskIndex, storyIndex})
  }
}

function addReleaseAtIndex(dispatch, index) {
  if (index < 0) {
    index = 0;
  }

  dispatch({type: 'add-release', index})
}

function UserStoryMap() {
  const [{releases, activities}, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <DesignSurface>
      <ActivityList>
        {activities.map((activity, activityIndex) => (
          <div key={`activity-${activity.id}`}>
            <Column>
              <Activity title={activity.title}
                        onAddLeft={() => addActivityAtIndex(dispatch, activityIndex)}
                        onAddRight={() => addActivityAtIndex(dispatch, activityIndex + 1)} />
            </Column>

            <TaskList>
              {activity.tasks.map((task, taskIndex) => (
                <Column key={`task-${task.id}`}>
                  <Task title={task.title}
                        onAddLeft={() => addTaskAtIndex(dispatch, activityIndex, taskIndex)}
                        onAddRight={() => addTaskAtIndex(dispatch, activityIndex, taskIndex + 1)} />
                </Column>
              ))}

              {!activity.tasks.length &&
                <button type="button"
                  onClick={() => addTaskAtIndex(dispatch, activityIndex, 0)}>
                  + New Task
                </button>}
            </TaskList>
          </div>
        ))}

        {!activities.length &&
          <button type="button"
            onClick={() => addActivityAtIndex(dispatch, 0)}>
            + New Activity
          </button>}
      </ActivityList>

      {releases.map((release, index) => (
        <Release key={`release-${release.id}`}
                   {...release}
                   index={index}
                   onAddAbove={() => addReleaseAtIndex(dispatch, index)}
                   onAddBelow={() => addReleaseAtIndex(dispatch, index + 1)}>
          <ColumnList>
            {activities.map((activity, activityIndex) => {
              if (!activity.tasks.length) {
                return <Column key={`activity-empty-tasks-${activity.id}`}></Column>
              }

              return (
                activity.tasks.length && activity.tasks.map((task, taskIndex) => {
                  const storiesInRelease = task.stories.filter(x => x.releaseId === release.id);
                  const newStoryHandler = addStoryAtIndex(dispatch, release, activityIndex, taskIndex);

                  return (
                    <Column key={`task-stories-${task.id}`}>
                      {storiesInRelease.map((story, storyIndex) => (
                          <Story key={`story-${story.id}`}
                                 {...story}
                                 onAddAbove={() => newStoryHandler(storyIndex)}
                                 onAddBelow={() => newStoryHandler(storyIndex + 1)} />
                      ))}

                      {!storiesInRelease.length && <button type="button"
                              onClick={() => newStoryHandler(dispatch, 0)}>
                        + New Story
                        </button>}
                    </Column>
                  )
                })
              )
            })}
          </ColumnList>
        </Release>
      ))}
    </DesignSurface>
  )
}

export default UserStoryMap;
