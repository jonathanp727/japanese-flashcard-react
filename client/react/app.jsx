import React from 'react'
import { connect } from 'react-redux'
import Header from './header/container'
import DeckList from './decklist/container'

let App = () => (
  <div>
    <Header />
    <DeckList />
  </div>
)

// App = connect(
//   state => {
//     return {
//     }
//   },
//   null
// )(App)

export default App
