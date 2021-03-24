import React from 'react';
import styled from 'styled-components';

const IncrementWrapper = styled.section`
  border-top: 1px solid #cccccc;
`;

export default function Release({name, children, onAddAbove, onAddBelow}) {
  return (
    <IncrementWrapper>
      <header>
        <input type="text" defaultValue={name} autoFocus />
        <button type="button" onClick={onAddAbove}>Add Release Above</button>
        <button type="button" onClick={onAddBelow}>Add Release Below</button>
      </header>
      <div>
        {children}
      </div>
    </IncrementWrapper>
  )
}
