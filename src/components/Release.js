import React from 'react';
import styled from 'styled-components';

const IncrementWrapper = styled.section`
  border-top: 1px solid #cccccc;
`;

export default function Release({id, name, children, onAddAbove, onAddBelow, dispatch}) {
  return (
    <IncrementWrapper>
      <header>
        <input type="text"
               value={name}
               autoFocus
               onChange={e => {
                dispatch({type: 'update-release', releaseId: id, name: e.target.value});
               }} />

        <button type="button" onClick={onAddAbove}>Add Release Above</button>
        <button type="button" onClick={onAddBelow}>Add Release Below</button>
      </header>
      <div>
        {children}
      </div>
    </IncrementWrapper>
  )
}
