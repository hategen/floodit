import React from 'react';

import './GameSettings.css';
import NumericInput from '../NumericInput/NumericInput';

const GameSettings = ({fieldSize, colorNumber, newGame, fieldSizeChange, colorNumberChange}) => {


    const onFieldSizeChangeHandler = (event) => {
        fieldSizeChange(Number.parseInt(event.target.value, 10))
    };

    const onColorNumberChangeHandler = (event) => {
        colorNumberChange(Number.parseInt(event.target.value, 10))
    };

    return (
        <section className="game-settings">
            <NumericInput
                type="number"
                name="fieldSize"
                min={6}
                max={75}
                value={fieldSize}
                onChange={onFieldSizeChangeHandler}
                placeholder="Field size"
                label="Field size"
            />

            <NumericInput
                type="number"
                name="colorNumber"
                min={6}
                max={30}
                value={colorNumber}
                onChange={onColorNumberChangeHandler}
                placeholder="Color number"
                label="Color number"
            />

            <button onClick={() => {
                newGame()
            }}> NewGame
            </button>
        </section>
    )
};

export default GameSettings;