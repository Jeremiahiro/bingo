import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import constants from './constants';
import TicketRow from './components/TicketRow';

class App extends Component {
  constructor() {
    super();
    let numberPairs = constants.INPUT_STRING.match(/(..?)/g).map(function (number) {
      // Parsing as base 10 then casting back to string removes leading 0s the
      // ticket numbers but keeps the type right for the JSX template. 
      return parseInt(number, 10).toString();
    });

    let fullCards = [];
    while (numberPairs.length) {
      fullCards.push(numberPairs.splice(0, constants.CARD_SIZE));
    }

    let cardsWithRows = [];
    for (let cardCount = 0; cardCount < fullCards.length; cardCount++) {
      let cardRowData = [];
      while (fullCards[cardCount].length) {
        cardRowData.push(fullCards[cardCount].splice(0, constants.ROW_SIZE));
      }
      cardsWithRows.push(cardRowData);
    }

    this.state = {cards: cardsWithRows};

  }


  render() {
    console.log(this.state); //eslint-disable-line
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.cards.map(function(card, index){
          return (
            <div key={index}>
                {card.map(function(row, index){
                  return (
                    <TicketRow key={index} row={row} style={{flexDirection: 'row'}} />
                  );
                })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
