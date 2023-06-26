import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import "./loginstyles.css";

function Register() {

    const [registerError, setRegisterError] = useState(false)
    const [registerErrorMessage, setRegisterErrorMessage] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const backendURL = "https://localhost:3001/register";
    const navigate = useNavigate();

    const postRegister = (event) => {
        event.preventDefault();
        axios
            .post(backendURL, {
                "username": username,
                "email": email,
                "password": password
            })
            .then((res) => {
                setRegisterError(false)
                setIsSubmitted(true)
                console.log(res)
            }).catch((err) => {
                setRegisterError(true)
                setRegisterErrorMessage(err.message)
                console.log(err)
            });
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    // Generate JSX code for error message
    const renderErrorMessage = () => {
        console.log("tried to render error")
        return
    }

    const renderForm = (
        <div className="form">
            <form onSubmit={postRegister}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="email" onChange={handleUsernameChange} required />
                </div>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" onChange={handleEmailChange} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" onChange={handlePasswordChange} required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
                {registerError ? <div className="error">{registerErrorMessage}</div> : <></>}
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Register for Bardo</div>
                {
                    isSubmitted ?
                        <div>
                            Registration Successful
                            <Button onClick={() => {
                                navigate("/login");
                            }}>Login</Button>
                        </div>
                        : renderForm
                }
            </div>
        </div>
    );
};

export default Register;

