import React from 'react';
import UserStoryMap from 'UserStoryMap';

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
    <UserStoryMap
      map={initialState}
      onMapUpdated={saveState}/>
  )
}

export default App;
