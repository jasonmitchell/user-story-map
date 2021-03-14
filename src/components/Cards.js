import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardOutline = styled.article`
  border: 1px solid #cccccc;
  width: 100%;
`;

function Card({
  title,
  onAddAbove,
  onAddBelow,
  onAddLeft,
  onAddRight
}) {
  return (
    <CardContainer>
      {onAddLeft && <button type="button" onClick={onAddLeft}>+</button>}

      <CardWrapper>
        {onAddAbove && <button type="button" onClick={onAddAbove}>+</button>}

        <CardOutline>
          <input type="text"
                defaultValue={title}
                autoFocus />
        </CardOutline>

        {onAddBelow && <button type="button" onClick={onAddBelow}>+</button>}
      </CardWrapper>

      {onAddRight && <button type="button" onClick={onAddRight}>+</button>}
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

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
