import React from 'react';
import styled from 'styled-components';
import UserStoryMap from 'UserStoryMap';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const Header = styled.header`
  background: #cccccc;
`;

const Content = styled.section`
  flex: 1;
  overflow: auto;
  padding-top: 0.5em;
`;

function loadState() {
  const state = JSON.parse(localStorage.getItem('map'));
  return state;
}

function saveState(state) {
  localStorage.setItem('map', JSON.stringify(state));
}

function App() {
  const initialState = loadState();

  return (
    <Layout>
      <Header>
        User Story Map
      </Header>
      <Content>
        <UserStoryMap
          map={initialState}
          onMapUpdated={saveState}/>
      </Content>
    </Layout>
  )
}

export default App;
