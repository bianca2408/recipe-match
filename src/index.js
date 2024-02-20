import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';


import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home />}></Route>
      <Route index path='/login' element={<Login />}></Route>
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
