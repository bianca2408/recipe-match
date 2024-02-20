import React, {useState} from "react";
import {auth} from '../firebase';
import './Login.css';
import '../login.js';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';



const Login = () => {
    
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isSigningIn, setisSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // const [isSignUpActive, setIsSignUpActive] = useState(false);
    // const handleMethodChange = () => {
    //     setIsSignUpActive(!isSignUpActive);
    // }

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     if(!isSigningIn) {
    //         setisSigningIn(true)
    //         await doSignInWithEmailAndPassword(email, password)
    //     }
    // }

    // const onGoogleSignIn = async (e) => {
    //     e.preventDefault();
    //     if(!isSigningIn) {
    //         setisSigningIn(true)
    //         doSignInWithGoogle().catch(err => {
    //             setisSigningIn(false)
    //         })
    //     }
    // }
    return(
        <div>
            
        <div class="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
            <form   action="">
                <label htmlFor="chk" aria-hidden="true">Inregistrare</label>
                <input type="text" value={username} name="txt" placeholder="Nume utilizator" required="" onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" value={email} name="email"  placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" value={password} name="pswd" placeholder="Parola" required="" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" value={confirmpassword} name="pswd" placeholder="Confirmare Parola" required="" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button>Inregistreaza-te</button>
            </form>

        </div>
            <div className="login">
                <form action="">
                    <label htmlFor="chk" aria-hidden="true">Conectare</label>
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Parola" required="" />
                    <button >Conecteaza-te</button>
                </form>
            </div>
 
        
        
        
    </div>
    </div>
    )
    
    
};

export default Login;



