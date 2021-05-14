import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import TextareaAutosize from 'react-autosize-textarea';

const addButtonSize = '24px';

const CardContainer = styled.div`
  position: relative;
  display: grid;
  width: 294px;
  grid-template-columns: ${addButtonSize} ${props => props.theme.cardWidth} ${addButtonSize};
  grid-template-rows: min-content ${addButtonSize} min-content ${addButtonSize} min-content;
  grid-template-areas:
    "toolbar-top toolbar-top toolbar-top"
    ". top ."
    "left card right"
    ". bottom ."
    "toolbar toolbar toolbar";
  justify-items: center;
  align-items: center;

  &:hover, &:focus-within {
    button {
      visibility: visible;
    }
  }
`;

const CardOutline = styled.article`
  border: 1px solid ${props => props.theme.cards.typeAccents[props.type]};
  border-left: 4px solid ${props => props.theme.cards.typeAccents[props.type]};
  border-radius: 3px;
  background: ${props => props.theme.cards.background};
  width: 100%;
  grid-area: card;
  padding: 0.25em;
  cursor: pointer;
`;

const Spacer = styled.div`
  grid-area: card;
`;

const CardTitle = styled(TextareaAutosize).attrs(props => ({
  type: 'text',
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

const Toolbar = styled.div`
  grid-area: ${props => props.displayAtBottom ? 'toolbar' : 'toolbar-top'};
  position: absolute;
  bottom: ${props => props.displayAtBottom ? '-3em' : '0'};
  top: ${props => props.displayAtBottom ? '0' : '-3em'};
  z-index: 1000;
  background: ${props => props.theme.cards.background};
  border: 1px solid ${props => lighten(0.1, props.theme.subtle)};
  border-radius: 3px;
  padding: 0.5em;
  width: 100%;
  box-shadow: rgba(5, 0, 56, 0.12) 0px 4px 16px 0px;
`;

const FloatingIconButton = styled.button.attrs(_props =>({
  type: 'button'
}))`
  transition: background-color .3s ease, color .3s ease;
  background: transparent;
  border: none;
  color: ${props => props.theme.subtle};
  font-size: 1em;
  line-height: 1em;
  padding: 0;
  margin: 0.1em;
  width: ${addButtonSize};
  height: ${addButtonSize};
  cursor: pointer;
  border-radius: 50%;
  outline: none;

  &:hover {
    background: ${props => props.theme.accent};
    color: ${props => props.theme.accentText};
  }
`;

export function AddCardButton({onClick, ...props}) {
  return <FloatingIconButton {...props} onClick={onClick}>+</FloatingIconButton>
}

const AddBeforeCardButton = styled(AddCardButton)`
  grid-area: ${props => props.type === 'story' ? 'top' : 'left'};
`;

const AddAfterCardButton = styled(AddCardButton)`
  grid-area: ${props => props.type === 'story' ? 'bottom' : 'right'};
`;

export const actions = {
  ADD_ACTIVITY: 'add-activity',
  ADD_TASK: 'add-task',
  ADD_STORY: 'add-story',
  UPDATE_CARD: 'update-card',
  DELETE_ACTIVITY: 'delete-activity',
  DELETE_TASK: 'delete-task',
  DELETE_STORY: 'delete-story',
  SELECT_CARD: 'select-card',
  CLEAR_SELECTED_CARD: 'clear-selected-card'
}

function isElementCloseToWindowBottom(el) {
  const minimumDistance = 50;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const rect = el.current.getBoundingClientRect();

  const diff = windowHeight - rect.bottom;
  return diff <= minimumDistance;
}

function Card({id, title, type, isSelected, onAddBefore, onAddAfter, dispatch}) {
  const deleteCard = () => {
    let actionType = type === 'activity' ? actions.DELETE_ACTIVITY : type === 'task' ? actions.DELETE_TASK : actions.DELETE_STORY;
    dispatch({type: actionType, cardId: id});
  }

  const [isHovering, setIsHovering] = useState(false);
  const cardEl = useRef(null)
  const titleEl = useRef(null);

  return (
    <CardContainer ref={cardEl}
                   type={type}
                   onMouseEnter={() => setIsHovering(true)}
                   onMouseLeave={() => setIsHovering(false)}>
      <CardOutline type={type}
                   isSelected={isSelected}
                   onClick={e => {
                     e.stopPropagation();

                     titleEl.current.focus()
                     dispatch({type: actions.SELECT_CARD, cardId: id})
                   }}>
        <CardTitle ref={titleEl}
                   title={title}
                   placeholder={`New ${type}...`}
                   onChange={e => {
                     dispatch({type: actions.UPDATE_CARD, cardId: id, title: e.target.value});
                   }} />
      </CardOutline>

      {onAddBefore && isHovering && <AddBeforeCardButton type={type} onClick={onAddBefore} />}
      {onAddAfter && isHovering && <AddAfterCardButton type={type} onClick={onAddAfter} />}

      {isSelected && <Toolbar displayAtBottom={!isElementCloseToWindowBottom(cardEl)}>
        <button type="button" onClick={() => deleteCard()}>Delete</button>
      </Toolbar>}
    </CardContainer>
  );
}

export function ActivityCard({dispatch, ...props}) {
  const {index} = props;

  return <Card {...props}
               dispatch={dispatch}
               onAddBefore={() => dispatch({type: actions.ADD_ACTIVITY, activityIndex: index})}
               onAddAfter={() => dispatch({type: actions.ADD_ACTIVITY, activityIndex: index + 1})} />
}

export function TaskCard({dispatch, ...props}) {
  const {activityId, index} = props;

  return <Card {...props}
               dispatch={dispatch}
               onAddBefore={() => dispatch({type: actions.ADD_TASK, activityId, taskIndex: index})}
               onAddAfter={() => dispatch({type: actions.ADD_TASK, activityId, taskIndex: index + 1})} />
}

export function StoryCard({dispatch, ...props}) {
  const {releaseId, taskId, index} = props;

  return <Card {...props}
               dispatch={dispatch}
               onAddBefore={() => dispatch({type: actions.ADD_STORY, releaseId, taskId, storyIndex: index})}
               onAddAfter={() => dispatch({type: actions.ADD_STORY, releaseId, taskId, storyIndex: index + 1})} />
}

export function SpacerCard({children}) {
  return <CardContainer><Spacer>{children}</Spacer></CardContainer>
}
