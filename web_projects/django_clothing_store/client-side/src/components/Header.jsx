import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import logo from './logo.PNG';


const Header = () => {


  return (
    <>
           {/* add logic to show if user is logged in*/}
      <div className="user-login">

        <Link to = '/login'>
          Sign-up <span className="glyphicon glyphicon-plus-sign" ></span>
        </Link> |  <Link to = '/'> 
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


    
    </>
  );
}


export default Header;