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
