import React, {useState} from 'react';
import styled from 'styled-components';
import {generateId} from 'id';
import UserStoryMap from 'views/UserStoryMap';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const Header = styled.header`
  background: ${props => props.theme.header};
  color: ${props => props.theme.accentText};
`;

const MapTitle = styled.input.attrs(props => ({
  type: 'text',
  value: props.title,
  placeholder: props.placeholder,
  maxLength: 50
}))`
  border: none;
  outline: none;
  font-size: 1em;
  background: none;
  color: #ffffff;

  &::placeholder {
    font-style: italic;
  }
`;

const Content = styled.section`
  flex: 1;
  overflow: auto;
  padding-top: 0.5em;
  max-width: 100vw;
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

function updateTitle(title) {
  let state = loadFromLocalStorage();
  state.title = title;
  saveToLocalStorage(state);
}

let initialState = loadFromLocalStorage();

function App() {
  const [key, setKey] = useState(generateId());
  const [title, setTitle] = useState(initialState.title);

  function resetUserStoryMap() {
    clearLocalStorage();
    initialState = null;

    setKey(generateId());
  }

  return (
    <Layout>
      <Header>
        <button type="button" onClick={resetUserStoryMap}>Clear</button>
        <MapTitle title={title}
                  placeholder="My Map"
                  onChange={e => {
                    updateTitle(e.target.value);
                    setTitle(e.target.value);
                  }} />
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
