import React from 'react';
import { StoryCard } from './Cards';

export default function StoryList({stories}) {
  return (
    <div>
      {stories.map((story) => (
        <StoryCard key={story.id} {...story} />
      ))}
    </div>
  );
}
