import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAuth, setLogin
} from '../redux/slices/authSlice';
import {
    getUserProfileAsync
} from '../redux/slices/userProfileSlice';
import "./loginstyles.css";

function Login() {

    const [loginError, setLoginError] = useState(false)
    const [loginErrorMessage, setLoginErrorMessage] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const auth = useSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    axios.defaults.withCredentials = true;

    const postLogin = async (event) => {
        console.log(email);
        event.preventDefault();

        await axios
            .post("http://localhost:3000/login", {
                "email": email,
                "password": password
            })
            .then((res) => {
                setLoginError(false);
                dispatch(setLogin({
                    "loggedIn": true,
                    "userId": res.data.userId,
                    "email": email,
                }))
                //if login was successful, attempt to get user profile 
                dispatch(getUserProfileAsync(res.data.userId));
            }).catch((err) => {
                setLoginErrorMessage(err.message)
                console.log(err)
            });


        navigate("/");
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
                        <Button onClick={() => { navigate("/register") }} >Register</Button>
                        {loginError ? <div className="error">{loginErrorMessage}</div> : <></>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;