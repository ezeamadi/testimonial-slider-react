import React, { Component } from 'react'
import './App.css'
import Characters from './characters'
import CharacterCard from './CharacterCard'

class App extends Component {
  state = {
    characterIndex: 0
  }

  handlePrevClick = () => {
    let {characterIndex} = this.state;
    if (characterIndex === 0){
      characterIndex = Characters.length
    }
     this.setState({
      characterIndex: characterIndex-1
    })
  }

  handleNextClick = () => {
   let {characterIndex} = this.state;
    if (characterIndex === Characters.length-1){
      characterIndex = -1
    }
    this.setState({
      characterIndex: characterIndex + 1
    })
  }

  render () {
    return <CharacterCard {...Characters[this.state.characterIndex]}
    prevClick={this.handlePrevClick}
    nextClick = {this.handleNextClick} />
  }
}

export default App