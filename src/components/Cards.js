import React from 'react';
import styled from 'styled-components';

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
`;

const CardOutline = styled.article`
  border: 1px solid #cccccc;
  width: 100%;
  grid-area: card;
`;

const AddCardButton = styled.button.attrs(_props =>({
  type: 'button'
}))``;

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

function Card({title, onAddAbove, onAddBelow, onAddLeft, onAddRight}) {
  return (
    <CardContainer>
      <CardOutline>
        <input type="text" defaultValue={title} autoFocus />
      </CardOutline>

      {onAddAbove && <AddCardAboveButton onClick={onAddAbove}>+</AddCardAboveButton>}
      {onAddBelow && <AddCardBelowButton onClick={onAddBelow}>+</AddCardBelowButton>}
      {onAddLeft && <AddCardLeftButton onClick={onAddLeft}>+</AddCardLeftButton>}
      {onAddRight && <AddCardRightButton onClick={onAddRight}>+</AddCardRightButton>}
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
