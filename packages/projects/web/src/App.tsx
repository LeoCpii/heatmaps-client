import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

import { Component } from '@heatmaps/ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo height={'250px'} width={'250px'}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Component.Button>teste</Component.Button>
        </a>
      </header>
    </div>
  );
}

export default App;
