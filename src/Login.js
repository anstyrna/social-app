import React, {useState} from 'react';
import './Login.css';

import axios from 'axios';

const Login = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
        ttl: ''
    });


    
    const updateLoginData = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const doLogin = (e) => {
        e.preventDefault();
        console.log(loginData);

        let userLogged = {
            username: loginData.username,
            password: loginData.password,
            ttl: 3600
        };

        const headers =  {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' 
        };

        axios.post('https://akademia108.pl/api/social-app/user/login', 
            JSON.stringify(userLogged),
            { 'headers': headers })
        .then((req) => {

            localStorage.setItem('userLogged');
    
            console.log(req);
        })
        .catch(error => {
            console.log(error);
        })

        
    }


    return (
        <div>
            <header>
                Log In
            </header>
            <form onSubmit={doLogin}>
                <input type="text" onChange={updateLoginData} placeholder="Username" value={loginData.username} name="username" />
                <input type="password" onChange={updateLoginData}  placeholder="Password" value={loginData.password} name="password"/>
                <button>Log In</button>
            </form>
        </div>
    );
}

export default Login;