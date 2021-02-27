import React from 'react';
import { useImmerReducer } from "use-immer";
import styled from 'styled-components';

const DesignSurface = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background: ${props => props.theme.background};
`;

const Activity = styled.div``;

const TaskList = styled.div`
  display: flex;
`;

const Task = styled.div``;

const CardContainer = styled.div`
  margin: 1em;
  display: flex;
`;

const CardOutline = styled.article`
  padding: 0.5em 1em;
  border: 1px solid #cccccc;
  width: 250px;
`;

const initialState = [
  {
    title: 'Hello world',
    tasks: [
      {
        title: 'Task 1',
        stories: [
          {
            title: 'Story 1'
          }
        ]
      }
    ]
  }
];

function reducer(draft, action) {
  switch (action.type) {
    case 'add-activity':
      draft.push({
        title: '',
        tasks: []
      });

      break;
    case 'add-task':
      draft[action.activityIndex].tasks.push({
        title: '',
        stories: []
      });
      break;
    case 'add-story':
      draft[action.activityIndex].tasks[action.taskIndex].stories.push({
        title: ''
      })
      break;
    case 'update-activity':
      draft[action.activityIndex].title = action.title;
      break;
    case 'update-task':
      draft[action.activityIndex].tasks[action.taskIndex].title = action.title;
      break;
    case 'update-story':
      draft[action.activityIndex].tasks[action.taskIndex].stories[action.storyIndex].title = action.title;
      break;
    default:
      throw new Error('Unknown action type')
  }
}

function Card({title, activityIndex, taskIndex, storyIndex, dispatch}) {
  return (
    <CardContainer>
      <CardOutline>
        <input type="text"
               defaultValue={title}
               onChange={(e) => {
                  const value = e.target.value;

                  if (storyIndex) {
                    dispatch({
                      type: 'update-story',
                      title: value,
                      activityIndex,
                      taskIndex,
                      storyIndex
                    })
                  } else if (taskIndex) {
                    dispatch({
                      type: 'update-task',
                      title: value,
                      activityIndex,
                      taskIndex
                    })
                  } else {
                    dispatch({
                      type: 'update-activity',
                      title: value,
                      activityIndex,
                      taskIndex,
                      storyIndex
                    })
                  }
               }} />
      </CardOutline>
    </CardContainer>
  );
}

function UserStoryMap() {
  const [activities, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <DesignSurface>
      {activities.map((activity, index) => (
        <Activity key={`activity-${index}`}>
          <Card title={activity.title}
                dispatch={dispatch}
                activityIndex={index} />

          <TaskList>
            {activity.tasks.map((task, taskIndex) => (
              <Task key={`task-${index}-${taskIndex}`}>
                <Card title={task.title}
                      dispatch={dispatch}
                      activityIndex={index}
                      taskIndex={taskIndex} />

                {task.stories.map((story, storyIndex) => (
                  <Card key={`story-${index}-${taskIndex}-${storyIndex}`}
                        title={story.title}
                        dispatch={dispatch}
                        activityIndex={index}
                        taskIndex={taskIndex}
                        storyIndex={storyIndex} />
                ))}

                <CardContainer>
                  <button type="button"
                          onClick={() => dispatch({
                            type: 'add-story',
                            activityIndex: index,
                            taskIndex: taskIndex
                          })}>
                    Add Story
                  </button>
                </CardContainer>
              </Task>
            ))}

            <CardContainer>
              <button type="button"
                      onClick={() => dispatch({
                        type: 'add-task',
                        activityIndex: index
                      })}>
                Add Task
              </button>
            </CardContainer>
          </TaskList>
        </Activity>
      ))}

      <Activity>
        <CardContainer>
          <button type="button"
                  onClick={() => dispatch({type: 'add-activity'})}>
            Add Activity
          </button>
        </CardContainer>
      </Activity>
    </DesignSurface>
  )
}

export default UserStoryMap;
