import './App.css';
import {Router, Link, Navigate} from '@reach/router';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddProduct from './components/AddProduct';

import Menpage from './components/Menpage';
import HomePage from './components/HomePage';

function App() {

  return (      
   <div className="App container">
      <Header></Header>
      
      <Router>
        <HomePage path='/'></HomePage>
        <Menpage path='/shop/men'></Menpage>
        <AddProduct path='/admin/add-product'></AddProduct>
      </Router>
     <br>
     </br>
     <br></br>
   </div> 
  );
}

export default App;
