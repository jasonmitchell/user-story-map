import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

const Outline = styled.article`
  border: 1px solid ${props => props.theme.cards.typeAccents[props.type]};
  border-left: 4px solid ${props => props.theme.cards.typeAccents[props.type]};
  border-radius: 3px;
  background: ${props => props.theme.cards.background};
  width: 100%;
  grid-area: card;
  padding: 0.35em;
  cursor: pointer;
`;

const Title = styled(TextareaAutosize)`
  width: 100%;
  max-width: 100%;
  border: none;
  outline: none;
  font-size: 0.85em;
  resize: none;
  margin: 0;
  padding: 0;
`;

function Card({type, title}) {
  return (
    <Outline type={type}>
      <Title value={title}
             placeholder={`New ${type}...`}
             maxLength={400} />
    </Outline>
  );
}

export function ActivityCard(props) {
  return <Card type="activity"
                {...props} />
}
