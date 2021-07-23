import './App.css';
import {Router, Link, Navigate} from '@reach/router';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddProduct from './components/AddProduct';
import SignUp from './components/Register';
import Menpage from './components/Menpage';
import HomePage from './components/HomePage';
import ProductOverView from './components/DetailProduct';
import WomensPage from './components/WomensPage';


function App() {

  return (      
   <div className="App container">
      <Header></Header>
      
      
      <Router>
        <HomePage path='/'></HomePage>
        <Menpage path='/shop/men'></Menpage>
        <WomensPage path='/shop/women'></WomensPage>
        <AddProduct path='/admin/add-product'></AddProduct>
        <ProductOverView path='/item/:id/:catid'></ProductOverView>
        
      </Router>
     <br>
     </br>
     <br></br>
   </div> 
  );
}

export default App;
