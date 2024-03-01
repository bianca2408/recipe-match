import React , {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import 'boxicons';
import '../index.css';

import '../index.js';
import logo from '../assets/logo.png';

import profile from '../assets/profile.png';
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase.js";

import { storage } from "../firebase.js";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../firebase.js";
import {  ref as ref2, set , onValue} from "firebase/database";
import Login from "./Login.jsx";


export default function Home(){
    const user = auth.currentUser;
    const inputFileRef = useRef();
    


   


    const navigate = useNavigate();
    const handleLogOut = (e) =>{
    e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("te ai deconectat")
        navigate('/login');
      }).catch((error) => {
        // An error happened.
      })
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
});
}
    useEffect(() => {
        const body = document.querySelector("body"),
          sidebar = body.querySelector(".sidebar"),
          toggle = body.querySelector(".toggle"),
          searchBtn = body.querySelector(".search-box"),
          modeSwitch = body.querySelector(".toggle-switch"),
          modeText = body.querySelector(".mode-text");
    
        toggle.addEventListener("click", () => {
          sidebar.classList.toggle("close");
        });
    
        searchBtn.addEventListener("click", () => {
          sidebar.classList.remove("close");
        });
    
        modeSwitch.addEventListener("click", () => {
          body.classList.toggle("dark");
          if (body.classList.contains("dark")) {
            modeText.innerText = "Luminos";
          } else {
            modeText.innerText = "Intunecat";
          }
        });
    
        // Cleanup (remove the event listeners) when the component unmounts
        return () => {
          toggle.removeEventListener("click", () => {
            sidebar.classList.toggle("close");
          });
    
          searchBtn.removeEventListener("click", () => {
            sidebar.classList.remove("close");
          });
    
          modeSwitch.removeEventListener("click", () => {
            body.classList.toggle("dark");
            if (body.classList.contains("dark")) {
              modeText.innerText = "Luminos";
            } else {
              modeText.innerText = "Intunecat";
            }
          });
        };
      }, []); // Empty dependency array ensures that the effect runs once after the initial render
// PROFILE UPDATE // 
      const [image, setImage] = useState('null');
      const [loading, setLoading] = useState('false');
      const [photoURL, setUrl]=useState(profile);

//INPUT FILE PT POZA PROFIL//
      const handleChange= (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
      }
//BUTON DE INCARCARE A POZEI DE PROFIL//

  const submitData = ()=>{

const storageRef = ref(storage, `${user.uid}.png`);
uploadBytes(storageRef, image).then((snapshot) => {
  getDownloadURL(storageRef).then((url) => {
    setUrl(url);
    updateProfile(user, {photoURL: url})
  }).catch((error) => {
console.log(error.message)
  })
  
  alert("uploaded"+ user.photoURL)
  console.log('Uploaded a blob or file!');
}).catch((error) => {
  console.log(error.message);
});
}
useEffect(() =>{
  if(user && user.photoURL){
    setUrl(user.photoURL);
  }

},[user])

  
    return( 
        <div>
          {/* DACA USERUL NU ESTE LOGAT -  LOGIN PAGE */}
            {!user &&
            <>
            <Login/>
            </>}

            <body>
            <nav className="sidebar close">
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={logo} alt="logo" />
                    </span>
                    <div class="text header-text">
                        <span className="name">RecipeMatch</span>

                    </div>
                </div>
                <box-icon name='chevron-right' class="chevron-right toggle"></box-icon>
            </header>
            <div className="menu-bar">
                <div className="menu">
                <li className="search-box">
                            
                                <box-icon name='search' class="icon"></box-icon>
                                <input type="text" placeholder="Cauta..."/> 
                            
                        </li>
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="#">
                                <box-icon name='food-menu' class="icon"></box-icon>
                                <span className="text nav-text">
                                    Retete
                                </span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <box-icon name='food-menu' class="icon"></box-icon>
                                <span className="text nav-text">
                                    Grupuri
                                </span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <box-icon name='food-menu' class="icon"></box-icon>
                                <span className="text nav-text">
                                    Favorite
                                </span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <box-icon name='food-menu' class="icon"></box-icon>
                                <span className="text nav-text">
                                    Frigider
                                </span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <box-icon name='food-menu' class="icon"></box-icon>
                                <span className="text nav-text">
                                    Setari
                                </span>
                            </a>
                        </li>
                    </ul>
                    </div>
                    <div className="bottom-content">
                    <li className="">
                            <a href="#">
                            <box-icon onClick={handleLogOut} name='log-out' class="icon"></box-icon>
                                <span onClick={handleLogOut} className="text nav-text">
                                    Deconectare
                                </span>
                            </a>
                        </li>
                        <li className="mode">
                            
                           <div className="moon-sun">
                           <box-icon type='solid' name='moon' class="i moon"></box-icon>
                           <box-icon type='solid' name='sun' class="i sun"></box-icon>
                           </div>
                            <span className="mode-text text">Intunecat</span>    
                           <div className="toggle-switch">
                            <span className="switch"></span>
                           </div>
                        </li>
                    </div>
                
            </div>
            </nav>
            <div  className="main--content">
            <div className="header--wrapper">
        <div className="file-upload">
          {/* Ascundeți inputul real */}
          <input
            id="file-input" // Trebuie să fie aceeași cu id-ul "htmlFor" din label
            type="file"
            ref={inputFileRef}
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          {/* Folosește o imagine sau alt element pentru a declanșa încărcarea */}
          <label htmlFor="file-input">
          <img
            src={photoURL}
              alt="Incarca"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              borderWidth: '5px',
              backgroundColor: '#FFF',
              borderColor: 'grey',
              borderStyle: 'outset'
            }}
/>
          </label>
          <button  onClick={submitData}>Incarca</button>
        </div>
        <span>curent user {user.email}</span>
        <br></br>
        <span>curent user {user.uid}</span>
        <br></br>
        <span>curent user {user.photoURL}</span>
        <br></br>
        <span>curent user {user.displayName}</span>
      </div>
               
  
               
                <div className="profile--wrapper">
                    <div className="cardProfile">
                    <div className="profile_image">
                      <Link to='/profile'><img src={photoURL} /></Link>
                    </div>
                   
                    </div>
                        
                       </div>        
            </div>
            
       </body> 
	
       </div>
    )
};
