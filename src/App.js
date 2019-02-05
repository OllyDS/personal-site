import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
// import CV from './components/CV'
import Contact from './components/Contact'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route exact path='/cv' component={CV} /> */}
        <Route exact path='/contact' component={Contact} /> 
      </Switch>
      </div>
    )
  }
}

export default App

