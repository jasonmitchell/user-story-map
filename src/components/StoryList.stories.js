import React from 'react';
import { LoremIpsum } from "lorem-ipsum";
import StoryList from './StoryList';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export default {
  title: 'Components/StoryList',
  component: StoryList
};

const stories = [];
for (let i = 1; i <= 10; i++) {
  stories.push({
    id: `story-${i}`,
    title: lorem.generateSentences(1)
  })
}

export const NoReleases = () => <StoryList stories={stories} />;
NoReleases.storyName = 'No Releases'
