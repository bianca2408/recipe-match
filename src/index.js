import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';


import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
<<<<<<< HEAD
import Login from './pages/Login'
import Dashboard from './pages/dashboard';
import Advanced from './pages/Advanced';
import Retetele_mele from './pages/Retetele_mele';
import Profile from './pages/profile';
=======
import Login from './pages/Login';
>>>>>>> 59fd59f07448b3671c73e07a251737f3ba0c4f45

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home />}></Route>
      <Route index path='/login' element={<Login />}></Route>
<<<<<<< HEAD
      <Route index path='/dashboard' element={<Dashboard />}></Route>
      <Route index path='/test' element={<Advanced />}></Route>
      <Route index path='/profile' element={<Profile />}></Route>
      <Route index path='/retete' element={<Retetele_mele />}></Route>
     
=======
>>>>>>> 59fd59f07448b3671c73e07a251737f3ba0c4f45
    </Routes>
   </BrowserRouter>,
  document.getElementById('root')
);

// const body = document.querySelector("body"),
//       sidebar = body.querySelector(".sidebar"),
//       toggle = body.querySelector(".toggle"),
//       searchBtn = body.querySelector(".search-box"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text");

//       toggle.addEventListener("click", ()=> {
//         sidebar.classList.toggle("close");
//       });
//       searchBtn.addEventListener("click", ()=> {
//         sidebar.classList.remove("close");
//       });

//       modeSwitch.addEventListener("click", ()=> {
//         body.classList.toggle("dark");
//         if(body.classList.contains("dark")){
//           modeText.innerText = "Luminos"
//         }else{
//           modeText.innerText = "Intunecat"
//         }
//       });
