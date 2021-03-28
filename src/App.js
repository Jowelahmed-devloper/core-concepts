import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const products =[
  {name:'Photography (20GB)', price: '$9.99'},
  {name:'All Apps', price: '$52.99'},
  {name:'Acrobat Pro', price: '$14.99'},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Display name="Casual Back Pack" price="$34"></Display>
        <Display name="Casual Shoe Mens" price="$24"></Display>
        <Display name="Casual Shoe Girls" price="$14"></Display>
        <Display name="Casual Shirts Mens" price="$54"></Display> */}
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product> */}
        <Product product ={products[0]}></Product>
        <Product product ={products[1]}></Product>
        <Product product ={products[2]}></Product>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle= {
    border:'1px solid gray',
    backgroundColor:'#FFFFFF',
    width:'200px',
    height:'200px',
    color:'#000',
    borderRadius:'5px',
    margin:'5px',
    padding:'5px',
    float:'left'


  }
  console.log(props);
  return(
    <div style={productStyle}>
      {/* <h6>{props.name}</h6>
      <h5>{props.price}</h5> */}
      <h6>{props.product.name}</h6>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}



// function Display(props) {
//   const cssClass ={
//     borderRadius:'10px',
//     backgroundColor: 'gray',
//     color:'black',
//     margin:'10px',
//     padding:'10px',
//   }
//   return (
//     <div style={cssClass}>
//       <h1>{props.name}</h1>
//       <h3>{props.price}</h3>
//     </div>
//   )
// }



export default App;
