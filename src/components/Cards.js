import React, {useRef} from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

const CardContainer = styled.div`
  /* position: relative; */
  display: grid;
  width: 294px;
  grid-template-columns: 18px ${props => props.theme.cardWidth} 18px;
  grid-template-rows: 18px min-content min-content 18px;
  grid-template-areas:
    ". top ."
    "left card right"
    ". toolbar ."
    ". bottom .";
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
  grid-area: toolbar;
  background: ${props => props.theme.cards.background};
  border: 1px solid ${props => props.theme.subtle};
  border-left: 4px solid ${props => props.theme.subtle};
  padding: 0.5em;
  width: 100%;
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
  width: 18px;
  height: 18px;
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

function Card({id, title, type, isSelected, onAddBefore, onAddAfter, dispatch}) {
  const deleteCard = () => {
    let actionType = type === 'activity' ? actions.DELETE_ACTIVITY : type === 'task' ? actions.DELETE_TASK : actions.DELETE_STORY;
    dispatch({type: actionType, cardId: id});
  }

  const titleRef = useRef(null);

  return (
    <CardContainer>
      <CardOutline type={type}
                   onClick={e => {
                     e.stopPropagation();

                     titleRef.current.focus()
                     dispatch({type: actions.SELECT_CARD, cardId: id})
                   }}>
        <CardTitle ref={titleRef}
                    title={title}
                    placeholder={`New ${type}...`}
                    onChange={e => {
                      dispatch({type: actions.UPDATE_CARD, cardId: id, title: e.target.value});
                    }} />
      </CardOutline>

      {onAddBefore && <AddBeforeCardButton type={type} onClick={onAddBefore} />}
      {onAddAfter && <AddAfterCardButton type={type} onClick={onAddAfter} />}

      {isSelected && <Toolbar>
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
