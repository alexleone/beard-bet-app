import React, { Component } from 'react';
import './App.css';
import CountDown from './CountDown';
import FlashCards from './FlashCards';

class App extends Component {

  getCards = () => {
    return [
      'The challenge is simple, the reward is awesome',
      'There is a man who seeks to grow',
      'He wanted to grow so he could go',
      'He was a gambling man ',
      'What does gambling man do',
      'Gambling man make a bets',
      'The best so large the world is large'
    ]
  };

  render() {
    return (
      <div className="App">
        <FlashCards cards={this.getCards()}/>
        <header className="App-header">
          <h1>
            J$'s No Shave Countdown !
          </h1>
        </header>
        <CountDown date="03/01/2019"/>
      </div>
    );
  }
}

export default App;
