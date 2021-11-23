import React from 'react';
import styled, {css} from 'styled-components';
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
  transition: all .2s;

  ${props => props.isSelected && css`
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    scale: 1.02;
  `}
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

function Card({id, type, title, isSelected, onClick, onUpdate}) {
  return (
    <Outline type={type}
             isSelected={isSelected}
             onClick={() => onClick(id)}>
      <Title value={title}
             placeholder={`New ${type}...`}
             maxLength={400}
             onChange={e => onUpdate(id, e.target.value)} />
    </Outline>
  );
}

export function ActivityCard(props) {
  return <Card type="activity"
                {...props} />
}
