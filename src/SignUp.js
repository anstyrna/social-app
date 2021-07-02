import React, { useState, useEffect } from 'react';
import './SignUp.css';

import axios from 'axios';

const SignUp = () => {

    const [formData, setFormData] = useState({username: '', email: '', password:'', confirmPassword: ''});





    const updateFormData = event => {
        setFormData(prevData=>{
            return {...prevData, [event.target.name]: event.target.value}
        })
    }

    const signUp = (e) => {
        e.preventDefault();
        let user = formData;

        console.log(`Wysyłam dane usera ` + user.name);
    }



    let newUser = {
        username: formData.name,
        email: formData.email,
        password: formData.password,
    }
    
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
    axios.post(
            'http://akademia108.pl/api/social-app/user/signup', 
            JSON.stringify(newUser),
            { 'headers': headers })
        .then((req) => {
            console.log(req.data);  
        })
        .catch((error) => {
            console.error(error);
        });


    return (
        <div>
            <header>
                Create an account
            </header>
            <form onSubmit={signUp}>
                <input type="text" onChange={updateFormData} placeholder="Username" value={formData.name} name="username" />
                <input type="email" onChange={updateFormData}  placeholder="Emial" value={formData.email} name="email"/>
                <input type="password" onChange={updateFormData}  placeholder="Password" value={formData.password} name="password"/>
                <input type="password" onChange={updateFormData}  placeholder="Confirm Password" value={formData.confirmPassword} name="confirmPassword"/>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;