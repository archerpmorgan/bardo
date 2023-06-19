import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./loginstyles.css";

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const errors = {
        email: "invalid email",
        pass: "invalid password"
    };

    const backendURL = "http://localhost:3000";

    const postLogin = (event) => {
        console.log(email);
        event.preventDefault();

        axios
            .post(backendURL, {
                "email": email,
                "password": password
            })
            .then((res) => {
                console.log(res);
            });
    }

    //update email on change
    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    //update email on change
    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={postLogin}>
                <div className="input-container">
                    <label>email </label>
                    <input type="text" name="email" onChange={handleEmailChange} required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default Login;