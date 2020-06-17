import React, { Component } from 'react'
import Characters from './components/characters'
import CharacterCard from './components/CharacterCard'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Search from "./components/search"

import './App.css'


class App extends Component {
  state = {
    characterIndex: 0,
    currentCharacterHobbies: Characters[0].hobbies,
  }

  handlePrevClick = () => {
    let { characterIndex } = this.state;

    if (characterIndex === 0){
      characterIndex = Characters.length
    }
    this.setState({
      characterIndex: characterIndex - 1,
      currentCharacterHobbies: Characters[characterIndex - 1].hobbies,
    })
  }

  handleNextClick = () => {
   let {characterIndex} = this.state;
    if (characterIndex === Characters.length-1){
      characterIndex = -1
    }
    this.setState({
      characterIndex: characterIndex + 1,
      currentCharacterHobbies: Characters[characterIndex + 1].hobbies,
    })
  }

  render () {
    return (
    <div>
      <CharacterCard {...Characters[this.state.characterIndex]}
        prevClick={this.handlePrevClick}
        nextClick = {this.handleNextClick} 
      />

      <MuiThemeProvider>
        <div>
          <Search hobbies={this.state.currentCharacterHobbies} />
        </div>
      </MuiThemeProvider>
    </div>
    )
  }
}

export default App