import React, {useRef} from 'react';
import styled from 'styled-components';
import TextareaAutosize from "react-autosize-textarea"

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: min-content auto min-content;
  gap: 0em;
  grid-template-areas:
    "top top top"
    "left card right"
    "bottom bottom bottom";
  justify-items: center;
  align-items: center;
`;

const CardOutline = styled.article`
  border: 1px solid ${props => props.theme.cards.typeAccents[props.type]};
  border-left: 4px solid ${props => props.theme.cards.typeAccents[props.type]};
  border-radius: 3px;
  background: ${props => props.theme.cards.background};
  width: 100%;
  grid-area: card;
  padding: 0.25em;
`;

const CardTitle = styled(TextareaAutosize).attrs(props => ({
  type: 'text',
  autoFocus: true,
  value: props.title,
  placeholder: props.placeholder,
  maxLength: 400
}))`
  width: 100%;
  max-width: 100%;
  border: none;
  outline: none;
  font-size: 0.85em;
  resize: none;
`;

const AddCardButton = styled.button.attrs(_props =>({
  type: 'button'
}))`
  transition: all .3s ease;
  background: transparent;
  border: none;
  color: ${props => props.theme.subtle};
  font-size: 1.25em;
  line-height: 1.25em;
  padding: 0;
  margin: 0.1em;
  width: 36px;
  height: 36px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background: ${props => props.theme.accent};
    color: ${props => props.theme.accentText};
  }
`;

const AddCardAboveButton = styled(AddCardButton)`
  grid-area: top;
`;

const AddCardBelowButton = styled(AddCardButton)`
  grid-area: bottom;
`;

const AddCardLeftButton = styled(AddCardButton)`
  grid-area: left;
`;

const AddCardRightButton = styled(AddCardButton)`
  grid-area: right;
`;

export const actions = {
  ADD_ACTIVITY: 'add-activity',
  ADD_TASK: 'add-task',
  ADD_STORY: 'add-story',
  UPDATE_CARD: 'update-card',
  DELETE_ACTIVITY: 'delete-activity',
  DELETE_TASK: 'delete-task',
  DELETE_STORY: 'delete-story'
}

function Card({id, index, title, type, onAddAbove, onAddBelow, onAddLeft, onAddRight, dispatch}) {
  function deleteCard() {
    let actionType = type === 'activity' ? actions.DELETE_ACTIVITY : type === 'task' ? actions.DELETE_TASK : actions.DELETE_STORY;
    dispatch({type: actionType, cardId: id});
  }

  const titleRef = useRef(null);

  return (
    <CardContainer>
      <CardOutline type={type} onClick={() => titleRef.current.focus()}>
        <CardTitle ref={titleRef}
                   title={title}
                   placeholder={`New ${type}...`}
                   onChange={e => {
                     dispatch({type: actions.UPDATE_CARD, cardId: id, title: e.target.value});
                   }} />
        <button type="button" onClick={() => deleteCard()}>Delete</button>
      </CardOutline>

      {onAddBelow && <AddCardBelowButton onClick={onAddBelow}>+</AddCardBelowButton>}
      {onAddRight && <AddCardRightButton onClick={onAddRight}>+</AddCardRightButton>}
      {onAddAbove && index === 0 && <AddCardAboveButton onClick={onAddAbove}>+</AddCardAboveButton>}
      {onAddLeft && index === 0 && <AddCardLeftButton onClick={onAddLeft}>+</AddCardLeftButton>}
    </CardContainer>
  );
}

export function Activity({onAddLeft, onAddRight, ...props}) {
  return (
    <Card {...props}
          onAddLeft={onAddLeft}
          onAddRight={onAddRight}
          onAddAbove={null}
          onAddBelow={null}>
    </Card>
  )
}

export function Task({onAddLeft, onAddRight, ...props}) {
  return (
    <Card {...props}
          onAddLeft={onAddLeft}
          onAddRight={onAddRight}
          onAddAbove={null}
          onAddBelow={null}>
    </Card>
  )
}

export function Story({onAddAbove, onAddBelow, ...props}) {
  return (
    <Card {...props}
          onAddLeft={null}
          onAddRight={null}
          onAddAbove={onAddAbove}
          onAddBelow={onAddBelow}>
    </Card>
  )
}
