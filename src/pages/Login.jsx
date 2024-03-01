import React, {useState} from "react";
import {auth} from '../firebase';
<<<<<<< HEAD
import '../Login.css';

import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { signInWithGooglePopup } from "../firebase";

const Login = () => {
    
  const user = auth.currentUser;
=======
import './Login.css';
import '../login.js';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
    
    
>>>>>>> 59fd59f07448b3671c73e07a251737f3ba0c4f45

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
<<<<<<< HEAD
    const [loading, setLoading] = useState(false);

   
=======
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
>>>>>>> 59fd59f07448b3671c73e07a251737f3ba0c4f45
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
<<<<<<< HEAD
        const user1 = userCredential.user;
=======
        const user = userCredential.user;
>>>>>>> 59fd59f07448b3671c73e07a251737f3ba0c4f45
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
<<<<<<< HEAD
      .then((userCredential) => {
    // Signed up 
    //SE MODIFICA USERNAME UL
              const auth = getAuth();
              sendEmailVerification(auth.currentUser)
   .then(() => {
    console.log("email trimis")
    
  });
              updateProfile(auth.currentUser, {
            displayName: username
          }).then(() => {
            console.log("update username")
            // ...
          })
   
    console.log("creat");
    alert("cont creat")
  })
  .catch((error) => {
    alert('Error!')
  }
  );
    }
    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      console.log(response);
  }
    return(
        <div>
            <div class="area" >
             
            
        <div class="main">
        {/* <div>curent user: {user?.email}</div> */}
         <ul class="circles"> 
                  <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li></ul>
=======
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
>>>>>>> 59fd59f07448b3671c73e07a251737f3ba0c4f45
            <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
            <form   onSubmit={(e) => handleSubmitsignup(e)} action="">
                <label htmlFor="chk" aria-hidden="true">Inregistrare</label>
                <input type="text" value={username} name="txt" placeholder="Nume utilizator" required="" onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" value={email} name="email"  placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" value={password} name="pswd" placeholder="Parola" required="" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" value={confirmpassword} name="pswd" placeholder="Confirmare Parola" required="" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button>Inregistreaza-te</button>
<<<<<<< HEAD
                <button onClick={logGoogleUser}>Google</button>
=======
>>>>>>> 59fd59f07448b3671c73e07a251737f3ba0c4f45
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
 
        
<<<<<<< HEAD
         
            
               
    </div >
        
    </div>
   
=======
        
        
    </div>
>>>>>>> 59fd59f07448b3671c73e07a251737f3ba0c4f45
    </div>
    )
    
    
};

export default Login;



