import React, {useState} from 'react';
import styled from 'styled-components';
import {generateId} from 'id';
import UserStoryMap from 'views/UserStoryMap';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const Header = styled.header`
  background: ${props => props.theme.header};
`;

const Content = styled.section`
  flex: 1;
  overflow: auto;
  padding-top: 0.5em;
`;

function loadFromLocalStorage() {
  const state = JSON.parse(localStorage.getItem('map'));
  return state;
}

function saveToLocalStorage(state) {
  localStorage.setItem('map', JSON.stringify(state));
}

function clearLocalStorage() {
  localStorage.removeItem('map');
}

let initialState = loadFromLocalStorage();

function App() {
  const [key, setKey] = useState(generateId());

  function resetUserStoryMap() {
    clearLocalStorage();
    initialState = null;

    setKey(generateId());
  }

  return (
    <Layout>
      <Header>
        User Story Map
        <button type="button" onClick={resetUserStoryMap}>Clear</button>
      </Header>
      <Content>
        <UserStoryMap
          key={key}
          map={initialState}
          onMapUpdated={saveToLocalStorage}/>
      </Content>
    </Layout>
  )
}

export default App;
