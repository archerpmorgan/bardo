import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAuth, setLogin
} from '../redux/slices/authSlice';
import {
    setUserProfile
} from '../redux/slices/userProfileSlice';
import "./loginstyles.css";

function Login() {

    const [loginError, setLoginError] = useState(false)
    const [profileNotFound, setProfileNotFound] = useState(false)
    const [loginErrorMessage, setLoginErrorMessage] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const auth = useSelector(selectAuth);
    const backendURL = "https://localhost:3001/";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postLogin = async (event) => {
        console.log(email);
        event.preventDefault();

        await axios
            .post("/api" + "/login", {
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
            }).catch((err) => {
                setLoginError(true)
                setLoginErrorMessage(err.message)
                console.log(err)
            });

        //if login was successful, attempt to get user profile 
        //or create one if this user does not yet have a profile
        if (!loginError) {
            await axios
                .get(backendURL + "data/profile", {
                    "email": auth.email,
                    "userId": auth.userId,
                })
                .then((res) => {
                    // dispatch(setUserProfile())
                    console.log(res)
                }).catch((err) => {
                    if (err.response) {
                        if (err.response.status == 404){ // could not find the profile
                            setProfileNotFound(true);
                        } 
                    }
                    console.log(err)
                });
        }
        
        if (profileNotFound) {
            console.log("profile not found")
        }

        // navigate("/");
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