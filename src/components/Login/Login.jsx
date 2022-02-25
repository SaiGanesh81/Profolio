import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import logo from './logopng.png'

function Login(){

    const[emailval,setemailval] = useState("")
    const[passval,setpassval] = useState("")

    const handlesubmit=(event)=>{
        event.preventDefault();
    }

    return(
        <div className='main-login'>
            Login Page <br/>
            <div className='login-contain'>
                <div className='left-side'>
                    <div className='img-class'>
                        <img src={logo} id="img-id" alt="" srcSet=''/>
                    </div>
                    <form onSubmit={handlesubmit}>
                        <label for="email1">Email</label>
                        <input placeholder='Enter your email...' type="email" value={emailval} onChange={(e)=>{setemailval(e.target.value)}} id="email1"/>
                        <label for="pwd">Password</label>
                        <input placeholder='Enter password' type="password"  value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd"/>
                        <button type='submit' id="sub-button">Login</button>

                    </form>
                    <div className='footer'>
                        
                    </div>
                </div>
                <div className='right-side'>
                </div>
            </div>
        </div>
    )
}

export default Login;