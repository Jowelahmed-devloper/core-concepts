import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display></Display>
        <Display></Display>
        <Display></Display>
        <Display></Display>
      </header>
    </div>
  );
}

function Display() {
  const cssClass ={
    backgroundColor:'gray',
    color:'cyan',
    margin: '10px',
    padding:'10px',
    borderRadius:'10px'

  }
  return (
    // Important Note: Component Mus Inside a closer Tag
    <div style={cssClass}>
      <h1>Casual Back Pack</h1>
      <h3>Price:$23</h3>
    </div>
  )
}




export default App;
