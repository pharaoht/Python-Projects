import React, {useState} from 'react';
import  axiosInstance  from '../axios';
import {useHistory} from 'react-router-dom';


export default function SignUp(){
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
        })
    }

    return (
        <>
                <h2>Title</h2>
                <form noValidate>
                    Email
                    <input type="text" id="email" name="email" autoComplete="email" onChange={handleChange} required/>
                    user
                    <input type="text" id="username" name="username" autoComplete="username" onChange={handleChange} required></input>
                    <input type="text" id="password" name="password" autoComplete="password" onChange={handleChange} required></input>
                    <button type="submit" onClick={handleSumbit}>Sign Up</button>
                </form>
        </>
          
        
       
    )
}