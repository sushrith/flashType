import React from 'react';
import logo from './../../Assets/logo.png'
import  "./nav.css";
function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-left">
            <img src={logo} alt="logo" className="flash-logo"/>
            <p className="flash-logo-react">
                FlashType
            </p>
            </div>
            <div className="nav-right">
                <a href="https://github.com/sushrith/" target="_blank" className="nav-git-link" rel="noreferrer">
                GIT
                </a>
            </div>
        </div>
    )
}

export default Nav
