import React from 'react';
import './Jumbotron.css';

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 class="display-4">Clickity Game!</h1>
            <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    );
}

export default Jumbotron;