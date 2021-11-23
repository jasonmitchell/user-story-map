import React from 'react';
import { ActivityCard, TaskCard, StoryCard } from './Cards';

export default {
  title: 'Components/Card',
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story/>
      </div>
    )
  ],
  argTypes: {
    onClick: { action: 'clicked' },
    onUpdate: { action: 'updated' }
  }
};

const ActivityTemplate = (args) => <ActivityCard {...args} />;
export const Activity = ActivityTemplate.bind({});
Activity.args = {
  id: 'activity-123456',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  isSelected: false
};

const TaskTemplate = (args) => <TaskCard {...args} />;
export const Task = TaskTemplate.bind({});
Task.args = {
  id: 'task-123456',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  isSelected: false
};

const StoryTemplate = (args) => <StoryCard {...args} />;
export const Story = StoryTemplate.bind({});
Story.args = {
  id: 'story-123456',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  isSelected: false
};
