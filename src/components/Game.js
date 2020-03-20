import React from 'react';
import './Game.css';

function Game({ characters, handleCharacterClick }) {
    return (
        <div className="row">
            {characters.map(character =>
                (<div className="col-md-3">
                    <div class="card">
                        <img onClick={() => handleCharacterClick(character)} class="card-img-top" src={`/images/${character.img}`} alt={character.name} />
                    </div>
                </div>)
            )}
        </div>
    )
}

export default Game;