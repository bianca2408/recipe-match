import React, { useEffect } from 'react'
import logo from '../assets/logo.png';
import 'boxicons';
import '../index.css';
function Sidebar() {
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
    
  return (
    <div>
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
                            <box-icon  name='log-out' class="icon"></box-icon>
                                <span  className="text nav-text">
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
    </div>
  )
}

export default Sidebar