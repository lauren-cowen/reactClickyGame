import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    flipped: []
  };

clickCard = id => {
  cards[id].clicked = true;
  this.setState({cards});
  //logic that compares the cards already clicked on to the card that is currently selected
  //if the card has not been clicked, the cards are reshuffled
  //if the card has been clicked the game restarts and the cards are reshuffled
}

render() {
  return(
    <Wrapper>
      <Title>Memory Game</Title>
        {this.state.cards.map(card=> (
          <MemoryCard
          clickCard = {this.clickCard}
          id= {card.id}
          key = {card.id}
          image = {card.image}
      />
    ))}
    </Wrapper>
  );

}
}

export default App;

