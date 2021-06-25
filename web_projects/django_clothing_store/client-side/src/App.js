import './App.css';
import {Router, Link, Navigate} from '@reach/router';
import Login from './components/login'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddProduct from './components/AddProduct';
import logo from './components/logo.PNG';
import Menpage from './components/Menpage';
import HomePage from './components/HomePage';

function App() {

  return (
   <div className="App container">
     {/* add logic to show if user is logged in*/}
     <div className="user-login">

        <Link to = '/login'>
          Sign-up <span className="glyphicon glyphicon-plus-sign"></span>
        </Link> |  <Link to = '/login'> 
            Log in <span className="glyphicon glyphicon-user"></span>
        </Link>

      </div>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="logo" href="/">
             <img src={logo} width="165" height="50" class="d-inline-block " alt="logo"></img>
          </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a href="/shop/men" className="nav-link">Men</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Women</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">New Arrivals</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Full Suits</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">On Sale</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
      <Router>
        <Login path='/login'></Login>
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
