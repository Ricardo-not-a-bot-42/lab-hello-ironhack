import React, { Component } from 'react';

import Feature from './components/feature';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="body App-nav">
          <img src="./images/ironhack-logo.svg" alt="" />
          <img src="./images/menu-top.svg" alt="" />
        </nav>
        <header className="App-header">
          <h1>Say hello to ReactJS</h1>
          <h3>
            You will learn a Frontend framework from scratch, to become a Ninja
            Developer
          </h3>
          <button>Awesome!</button>
        </header>
        <div className="features-container">
          <Feature
            img="/images/icon1.png"
            title="Declarative"
            description="React makes it painless to create interactive UIs."
          />
          <Feature
            img="/images/icon2.png"
            title="Components"
            description="Build encapsulated components that manage their state."
          />
          <Feature
            img="/images/icon3.png"
            title="Single-Way"
            description="A set of immutable values are passed to the component's."
          />
          <Feature
            img="/images/icon4.png"
            title="JSX"
            description="Statically-typed, designed to run on modern browsers."
          />
        </div>
      </div>
    );
  }
}

export default App;
