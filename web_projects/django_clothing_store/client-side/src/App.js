import './App.css';
import {Router, Link, Navigate} from '@reach/router';
import Header from './components/Header';
import  React, {useEffect, useState } from 'react';
import AddProduct from './components/AddProduct';
import Menpage from './components/Menpage';
import HomePage from './components/HomePage';
import ProductOverView from './components/DetailProduct';
import WomensPage from './components/WomensPage';
import Footer from './components/Footer';
import {CartProvider } from './components/CartContext'
import Cart from './components/Cart';


function App() {

  return (      
   <div className="App container">
    <CartProvider>
       <Header></Header>
    
      <Router>
        
        <HomePage path='/'></HomePage>
        <Cart path='/cart'></Cart>
        <Menpage path='/shop/men'></Menpage>
        <WomensPage path='/shop/women'></WomensPage>
        <AddProduct path='/admin/add-product'></AddProduct>
        <ProductOverView path='/item/:id/:catid'></ProductOverView>


      </Router>
    </CartProvider>
      <Footer></Footer>
     <br>
     </br>
     <br></br>
   </div> 
  );
}

export default App;
