import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'
import {toast, Toaster} from 'react-hot-toast'
export default function Modal(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateInputs = () => {
        if (!username.includes('@') || !username.includes(".")){
            setError("Email or Password is Incorrect");
            return false;
        }
        if (!password.match(/^([a-zA-Z0-9]+)$/) || password.length < 8 ){
            setError("Email or Password is Incorrect");
            return false;
        }
        return true;
    };

    const submitHandler = (event) => {
        event.preventDefault();
        toast.success("Log In Successful")
        if (validateInputs()) {
            console.log("Username", username);
            console.log("Password", password);
            props.onClose();
            props.setIsLoggedIn(true)
            localStorage.setItem("isLoggedIn", "true");
       
        }
    }

    const emailHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    return ReactDOM.createPortal(
        <div className='backdrop'>
            <div className='loginModal'>
                <button className='closeBtn' onClick={props.onClose}>X</button>
                <h2>Login</h2>
                {error && <p className='error'>{error}</p>}
                <form className='inputDiv' onSubmit={submitHandler}>
                    <input className='input' type='text' placeholder='Email' value={username} onChange={emailHandler} />
                    <input className='input' type='password' placeholder='Password' value={password} onChange={passwordHandler} />
                    <button className='btn' type='submit'>Log In</button>
                </form>
            </div>
        </div>,
        document.getElementById('backdrop')
    );
}

