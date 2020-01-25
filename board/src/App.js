import React, { Component } from 'react';
import ColorContext from './components/Context/Context';
import './App.css';
import Header from './components/Header/Header';
import BoardListContainer from './components/BoardListContainer/BoardListContainer';
import { connect } from 'react-redux';
import Footer from './components/Footer/Footer';
import { COLOR_PICKER } from './components/Hooks/useColor'
class App extends Component {
  render() {
    document.body.style.backgroundColor = COLOR_PICKER[this.props.color][1]
    return (
      <ColorContext.Provider value={{
        color: this.props.color
      }}>
        <div className="App">
          <Header />
          <BoardListContainer />
          <div className="Border"></div>
          <Footer />
        </div>
      </ColorContext.Provider>
    );
  }
};

const mapStateToProps = state => {
  return {
    color: state.boardList.color
  }
}

export default connect(mapStateToProps)(App);
