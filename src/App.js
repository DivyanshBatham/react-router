import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* To access props with Roter Informations in Navbar, we need to supercharge the Navbar component with Higher Order Component */}
          {/* Higher Order Component wraps another component and gives it something extra */} 
          <Navbar />
          {/* props for Router Information is only sent to the below components, which are declared using Route */}
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
