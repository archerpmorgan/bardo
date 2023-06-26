import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
    setLogin
  } from '../redux/slices/authSlice';
import "./loginstyles.css";

function Login() {

    const [loginError, setLoginError] = useState(false)
    const [loginErrorMessage, setLoginErrorMessage] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const backendURL = "http://localhost:3000/login";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postLogin = async (event) => {
        console.log(email);
        event.preventDefault();

        axios
            .post(backendURL, {
                "email": email,
                "password": password
            })
            .then((res) => {
                setLoginError(false);
                dispatch(setLogin({
                    "loggedIn": true,
                    "userId": res.data.userId
                }))
                console.log(res);
                navigate("/");
            }).catch((err) => {
                setLoginError(true)
                setLoginErrorMessage(err.message)
                console.log(err)
            });
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
                    <form onSubmit={postLogin}>
                        <div className="input-container">
                            <label>email </label>
                            <input type="text" name="email" onChange={handleEmailChange} required />
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="pass" onChange={handlePasswordChange} required />
                        </div>
                        <div className="button-container">
                            <input type="submit" />
                        </div>
                        {loginError ? <div className="error">{loginErrorMessage}</div> : <></>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;