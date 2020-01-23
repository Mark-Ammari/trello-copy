import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BoardListContainer from './components/BoardListContainer/BoardListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <BoardListContainer />
    </div>
  );
}

export default App;
