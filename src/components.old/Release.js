import React from 'react';
import styled from 'styled-components';

const IncrementWrapper = styled.section`
  border-top: 1px solid #cccccc;
`;

export default function Release({id, index, name, canDelete, children, dispatch}) {
  return (
    <IncrementWrapper>
      <header>
        <input type="text"
               value={name}
               autoFocus
               onChange={e => {
                dispatch({type: 'update-release', releaseId: id, name: e.target.value});
               }} />

        <button type="button" onClick={() => dispatch({type: 'add-release', index})}>Add Release Above</button>
        <button type="button" onClick={() => dispatch({type: 'add-release', index: index + 1})}>Add Release Below</button>
        <button type="button" onClick={() => dispatch({type: 'move-release-up', releaseId: id})}>Move Up</button>
        <button type="button" onClick={() => dispatch({type: 'move-release-down', releaseId: id})}>Move Down</button>
        {canDelete && <button type="button" onClick={() => dispatch({type: 'delete-release', releaseId: id})}>Delete</button>}
      </header>
      <div>
        {children}
      </div>
    </IncrementWrapper>
  )
}
