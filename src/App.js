import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display name="Casual Back Pack" price="$34"></Display>
        <Display name="Casual Shoe Mens" price="$24"></Display>
        <Display name="Casual Shoe Girls" price="$14"></Display>
        <Display name="Casual Shirts Mens" price="$54"></Display>
      </header>
    </div>
  );
}

function Display(props) {
  const cssClass ={
    borderRadius:'10px',
    backgroundColor: 'gray',
    color:'black',
    margin:'10px',
    padding:'10px',
  }
  return (
    <div style={cssClass}>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
    </div>
  )
}



export default App;
