import React, {useState, useEffect, useContext} from 'react'
import { Link} from '@reach/router'
import logo from './logo.PNG';
import Modal from 'react-modal';
import '../css/Header.css';
import  axiosInstance  from '../axios';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {CartContext} from '../components/CartContext'
import { UserContext } from './UserContext';


Modal.setAppElement('#root')
const Header =() =>{
    const [cart, setCart] = useContext(CartContext)
    const {user, setUser} = useContext(UserContext)
    const [jwttoken, setjwtToken] = useState(false)
    
    useEffect(() => {

        setjwtToken(false ) 
        console.log(localStorage.access_token)
      
     

    }, [user])
      
  return (
    <>
    
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    
           {/* add logic to show if user is logged in*/ }
      <div className="user-login" >
        {localStorage.access_token == null ? <> 
          <Link className="logo" to="/register">
          Sign-up <span className="glyphicon glyphicon-plus-sign" ></span> |
        </Link>
        
        <Link className="logo" to="/login"> Log in <span className="glyphicon glyphicon-user"></span>  </Link></>
        : <><span>Hello, {localStorage.first_name}</span> | <Link to="/logout">Logout</Link></>}

      </div>

      <div onClick={() => setjwtToken(true)}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="logo" to="/">
             <img src={logo} width="165" height="50" class="d-inline-block " alt="logo"></img>
          </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/shop/men" className="nav-link">Men</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/women">Women</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/new-arrivals">New Arrivals</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/full-suits">Full Suits</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/sales">On Sale</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About Us {user}</Link>
                </li>
              </ul>
              <div className="shopping">
                <Link to="/cart"><span id="shop" class="material-icons md-48">shopping_cart</span></Link>
                <span className="cart-count">{cart.length}</span>
              </div>
            </div>
        </nav>
      </div>

      {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
        
          <div className="outline">
            <div className="sign-up">
              <h2>Sign Up</h2>
              <form>
                <p className="sign-up-text">First Name</p>
                <input type='text' className="form-input" name="first_name" onChange={handleChange}/>
                <p className="sign-up-text">Last Name</p>
                <input type='text' className="form-input" name="last_name" onChange={handleChange}/>
                <p className="sign-up-text">Email</p>
                <p className="text-danger" role="alert">{formErrors ? formErrors.email : "" }</p>
                <input type='text' className="form-input" name="email" onChange={handleChange}/>
                <p className="sign-up-text">Password</p>
                <input type='text' className="form-input" name="password" onChange={handleChange}/>
                <p className="sign-up-text">Confirm Password</p>
                <input type='text' className="form-input" name="password2" onChange={handleChange}/>
                <p><button type="submit" className="submit-btn" onClick={handleSumbit}>Sign Up!</button></p>
                
              </form>
            </div>
            <div class="vl"></div>
            <div className="login">
            <h2>Login</h2>
            <form>
                <p className="sign-up-text">Email</p>
                <input type='text' className="form-input"/>
                <p className="sign-up-text">Password</p>
                <input type='text' className="form-input"/>
                <p><button type="submit" className="submit-btn">Login</button></p>
            </form>
          
            

            </div>
          </div>

          <footer>
            <p class="copyright">© GROUP TITLE 2015</p>
          </footer>
        



      </Modal> */}


    
    </>
  );
}



export default Header;