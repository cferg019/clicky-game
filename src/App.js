import React, { Component } from 'react';
import './App.css';
import characters from './data/characters.json'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Game from './components/Game'

class App extends Component {
  state = {
    titleMessage: 'Click an image to begin',
    score: 0,
    topScore: 0,
    characters,
    clicked: []
  }

  handleCharacterClick = (character) => {
    const shuffledCharacters = this.shuffleArray(this.state.characters)
    this.setState({ characters: shuffledCharacters })

    // Check for loss
    if (this.state.clicked.includes(character.name)) {
      this.setState({ titleMessage: 'You lose!!' })
      this.setState({ score: 0 })
      this.setState({ clicked: [] })
      return;
    }
    this.setState({ titleMessage: 'Good job, keep clicking...' })
    // Update clicked
    const newClicked = [...this.state.clicked]
    newClicked.push(character.name)
    this.setState({ clicked: newClicked })

    const newScore = this.state.score + 1
    this.setState({ score: newScore })
    if (this.state.topScore < newScore) {
      this.setState({ topScore: newScore })
    }

    // Check for win
    if (newClicked.length >= this.state.characters.length) {
      this.setState({ titleMessage: 'You Win!!' })
      this.setState({ score: 0 })
    }
  }

  shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  render() {
    return (
      <div className="App">
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.titleMessage}
        />
        <Jumbotron />
        <Game characters={this.state.characters} handleCharacterClick={this.handleCharacterClick} />
      </div>
    );
  }
}

export default App;
