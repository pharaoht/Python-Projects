import React, {useState, useEffect} from 'react'
import { Link, navigate } from '@reach/router'
import logo from './logo.PNG';
import Modal from 'react-modal';
import '../css/Header.css';
import  axiosInstance  from '../axios';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


Modal.setAppElement('#root')
export default function Header(){
      const [modalIsOpen, setmodalIsOpen] = useState(false)
      
      const history = useHistory();
      //object freeze, once the user submit info it cannot be changed
      const initialFormData = Object.freeze({
        email:'',
        username:'',
        password:'',
      });

      const [formData, updatedFormData] = useState(initialFormData)

      const handleChange = (e) => {
        updatedFormData({
            ...formData,
            //Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
      };

      const handleSumbit = (e) =>{
        e.preventDefault();
        console.log(formData)

        axiosInstance
        .post(`register/`, {
            email:formData.email,
            user_name: formData.username,
            password:formData.password
        })
        .then((res) =>{
            history.push('/login')
        })}

        function Copyright() {
          return (
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          )};

        const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        }));

        const classes = useStyles();
  return (
    <>
    
           {/* add logic to show if user is logged in*/}
      <div className="user-login">

        <button className="btn-none" onClick={() => setmodalIsOpen(true)}> <Link to="/">Sign-up <span className="glyphicon glyphicon-plus-sign" ></span> </Link></button>
        |  
        <button className="btn-none"> Log in <span className="glyphicon glyphicon-user"></span>  </button>
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

      <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
        
          <div className="outline">
            <div className="sign-up">
              <h2>Sign Up</h2>
              <form>
                <p className="sign-up-text">First Name</p>
                <input type='text' className="form-input"/>
                <p className="sign-up-text">Last Name</p>
                <input type='text' className="form-input"/>
                <p className="sign-up-text">Email</p>
                <input type='text' className="form-input"/>
                <p className="sign-up-text">Password</p>
                <input type='text' className="form-input"/>
                <p><button type="submit" className="submit-btn">Sign Up!</button></p>
                
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
        



      </Modal>


    
    </>
  );
}


