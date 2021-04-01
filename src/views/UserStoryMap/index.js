import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useImmerReducer} from 'use-immer';
import {reducer, initialState} from './state';
import {SpacerCard, ActivityCard, TaskCard, StoryCard, AddCardButton, actions as cardActions} from 'components/Cards';
import Release from 'components/Release';

const DesignSurface = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  min-width: 100vw;
  background: ${props => props.theme.background};
  padding: 0.5em;
`;

const HorizontalStack = styled.div`
  display: flex;
`;

const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
`;

function findCardsOfType(cards, type) {
  return cards.filter(x => x.id.indexOf(type) === 0).sort((a, b) => a.index - b.index);
}

function tasksInActivity(cards, activity) {
  return cards.filter(x => x.activityId === activity.id);
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
      <HorizontalStack>
        {activities.length === 0 &&
          <SpacerCard>
            <AddCardButton onClick={() => dispatch({type: cardActions.ADD_ACTIVITY, activityIndex: 0})} />
          </SpacerCard>}

        {activities.map((activity) => {
          const activityTasks = tasksInActivity(tasks, activity);

          return (
            <HorizontalStack key={activity.id}>
              <ActivityCard dispatch={dispatch}
                            {...activity} />

              {activityTasks.map((task, index) => {
                return index > 0 && <SpacerCard key={`${activity.id}-${task.id}-spacer`} />
              })}
            </HorizontalStack>
          )
        })}
      </HorizontalStack>

      <HorizontalStack>
        {activities.map((activity) => {
          const activityTasks = tasksInActivity(tasks, activity);

          return (
            <HorizontalStack key={`${activity.id}-tasks`}>
              {activityTasks.length === 0 &&
                <SpacerCard>
                  <AddCardButton onClick={() => dispatch({type: cardActions.ADD_TASK, activityId: activity.id, taskIndex: 0})} />
                </SpacerCard>}

              {activityTasks.length > 0 && activityTasks.map(task => {
                return <TaskCard key={task.id}
                                 dispatch={dispatch}
                                 {...task} />
              })}
            </HorizontalStack>
          )
        })}
      </HorizontalStack>

      {releases.map((release, releaseIndex) => {
        const releaseStories = stories.filter(x => x.releaseId === release.id);

        return (
          <Release key={release.id}
                   index={releaseIndex}
                   dispatch={dispatch}
                   canDelete={releases.length > 1}
                   {...release}>
            <HorizontalStack>
              {activities.map((activity) => {
                const activityTasks = tasksInActivity(tasks, activity);

                return activityTasks.map((task) => {
                  const taskStories = releaseStories.filter(x => x.taskId === task.id);

                  return (
                    <VerticalStack key={`${task.id}-stories`}>
                      {taskStories.length === 0 &&
                        <SpacerCard>
                          <AddCardButton onClick={() => dispatch({type: cardActions.ADD_STORY, releaseId: release.id, taskId: task.id, storyIndex: 0})} />
                        </SpacerCard>}

                      {taskStories.length > 0 && taskStories.map(story => {
                        return <StoryCard key={story.id}
                                          dispatch={dispatch}
                                          {...story} />
                      })}
                    </VerticalStack>
                  )
                });
              })}
            </HorizontalStack>
          </Release>
        )
      })}
    </DesignSurface>
  )
}

export default UserStoryMap;
