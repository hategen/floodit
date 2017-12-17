import React from 'react';

import './GameSettings.css';

const GameSettings = () => {

    return (
        <section className="game-settings">
            <input type="number" name="field-size" id="fieldSize"/>
            <button> NewGame</button>
        </section>
    )
};

export default GameSettings;