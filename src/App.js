import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const products = [
  { name: 'Photoshop', price: 'US$20.99 /mo' },
  { name: 'Premiere Pro', price: 'US$20.99/mo' },
  { name: 'Illustrator', price: 'US$20.99/mo' },
  { name: 'InDesign', price: 'US$20.99/mo' },
  { name: 'Design', price: 'US$20.99/mo' },
  { name: 'Jowel321', price: 'US$500.99/mo' },

]




function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>
      <Users></Users>
      {products.map(product => <Product product={product}></Product>)}



      </header>
    </div>
  );
}

function Users (){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => {
      setUsers(data);

    })
  })
  return (
    <div>
      <h4>Dynamic users:{users.length}</h4>
      {users.map (user => <h4> Name: {user.name} <p>Email: {user.email}</p></h4>)}
    </div>
  )
}

function Counter (){
  const [count, setCount] = useState(1)
  const handleDecrease = () => setCount(count-1)
  const handleIncrease = () => setCount(count+1)
  return (
    <div>
      <h5>Count:{count}</h5>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}


function Product (props){
  const productStyle = {
    width: '250px',
    height: '250px',
    backgroundColor: '#F1f1f1',
    color: '#000',
    borderRadius: '5px',
    margin: '5px'
  }
  return (
    <div style={productStyle}>
      <h5>{props.product.name}</h5>
      <h4>{props.product.price}</h4>
      <button>Buy now</button>
    </div>
  )
}






















// function Users (){
//   const [users, setUsers] = useState([])
//   useEffect(()=>{
//     fetch ('https://jsonplaceholder.typicode.com/users')
//     .then (res => res.json())
//     .then (data =>{
//       setUsers(data);
//       // console.log(data);
//     })
//   })
//   return (
//     <div>
//       <h3>Dynamic User:{users.length}</h3>
//       {users.map( user => <p>Name:{user.name} Email: {user.email}</p>)}
//     </div>
//   )
// }















































// function Counter(){
//   const [count, setCount] = useState(10);
//   const handleIncrease= () =>{
//     const newCount = count +1;
//     setCount(newCount);
//   }
//   return (
//     <div>
//       <h2>Count:{count}</h2>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   )
// }



export default App;
