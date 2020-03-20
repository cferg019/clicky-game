import React from 'react';
import './NavBar.css';

function NavBar({ score, topScore, message}) {
    return (
        <nav className="navbar navbar-light fixed-top bg-light justify-content-between">
            <a className="navbar-brand" href="/">Clickity Game</a>
            <span className="nav-item">{message}</span>
            <span className="nav-item">{`Score: ${score} | Top Score: ${topScore}`}</span>
        </nav>
    );
}

export default NavBar;