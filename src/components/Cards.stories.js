import React from 'react';
import { ActivityCard } from './Cards';

export default {
  title: 'Components/Card',
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    actions: {
      handles: ['click article'],
    },
  }
};

const ActivityTemplate = (args) => <ActivityCard {...args} />;
export const Activity = ActivityTemplate.bind({});
Activity.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
