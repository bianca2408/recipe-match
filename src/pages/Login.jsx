import React, {useState} from "react";
import {auth} from '../firebase';
import './Login.css';
import '../login.js';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";



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
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate('/');
     })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    const handleSubmitsignup = (e) =>{
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("creat");
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    return(
        <div>
            
        <div class="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
            <form   onSubmit={(e) => handleSubmitsignup(e)} action="">
                <label htmlFor="chk" aria-hidden="true">Inregistrare</label>
                <input type="text" value={username} name="txt" placeholder="Nume utilizator" required="" onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" value={email} name="email"  placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" value={password} name="pswd" placeholder="Parola" required="" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" value={confirmpassword} name="pswd" placeholder="Confirmare Parola" required="" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button>Inregistreaza-te</button>
            </form>

        </div>
            <div className="login">
                <form  onSubmit={(e) => handleSubmit(e)} action="">
                    <label htmlFor="chk" aria-hidden="true">Conectare</label>
                    <input type="email" name="email" placeholder="Email" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="pswd" placeholder="Parola" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button >Conecteaza-te</button>
                </form>
            </div>
 
        
        
        
    </div>
    </div>
    )
    
    
};

export default Login;



