import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header=()=>{

    const [btnName,setBtnName]=useState("Login");

    return(
        <div className="header">
            <div className="logoContainer">
              <h1>BiteBlitz</h1>
            </div>
            <div className="navItems">
                <ul className="navItemList">
                  <li><Link className="nav-tags" to="/">Home</Link></li>
                  <li><Link className="nav-tags"to="/about">About Us</Link> </li>
                  <li><Link className="nav-tags"to="/contact">Contact Us</Link> </li>
                  <li><FontAwesomeIcon icon={faCartShopping} /></li>
                  <button className="loginbtn"
                    onClick={()=>{
                      btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}
                  >{btnName}</button>
                </ul>
            </div>

        </div>
        
    )
}
export default Header;