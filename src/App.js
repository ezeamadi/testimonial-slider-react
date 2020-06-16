import React, { Component } from 'react'
import './App.css'
import IconNext from './images/icon-next.svg'
import IconPrevious from './images/icon-prev.svg'
import Characters from './characters'
import CharacterCard from './CharacterCard'

class App extends Component {
  state = {
    characterIndex: 0
  }
  render () {
    return <CharacterCard {...Characters[this.state.characterIndex]} />
  }
}

export default App
