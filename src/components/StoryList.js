import React from 'react';
import styled from 'styled-components';
import { StoryCard } from './Cards';

const List = styled.div`
  width: 300px;
  margin: 0em 1em;
`;

const CardContainer = styled.div`
  margin-bottom: 0.5em;
`;

export default function StoryList({stories}) {
  return (
    <List>
      {stories.map((story) => (
        <CardContainer key={story.id}>
          <StoryCard {...story} />
        </CardContainer>
      ))}
    </List>
  );
}
