import React from 'react';
import { ActivityCard, TaskCard, StoryCard } from './Cards';

export default {
  title: 'User Story Map/Cards',
  args: {
    dispatch: () => {},
    onClick: () => {}
  },
  parameters: {
    actions: {
      handles: ['click article'],
    },
  }
};

const ActivityTemplate = (args) => <ActivityCard {...args} />;
export const Activity = ActivityTemplate.bind({});
Activity.args = {
  isSelected: false,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const TaskTemplate = (args) => <TaskCard {...args} />
export const Task = TaskTemplate.bind({});
Task.args = {
  isSelected: false,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

const StoryTemplate = (args) => <StoryCard {...args} />
export const Story = StoryTemplate.bind({});
Story.args = {
  isSelected: false,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

const ToolbarTemplate = (args) => (
  <div>
    <StoryCard {...args} />
    <StoryCard title="Sed lacinia dolor ac lacus vehicula imperdiet." isSelected={false} />
  </div>
);
export const Toolbar = ToolbarTemplate.bind({});
Toolbar.args = {
  isSelected: true,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
