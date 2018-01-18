import React from 'react';

import './GameSettings.css';
import NumericInput from '../NumericInput/NumericInput';

const GameSettings = ({fieldSize, colorNumber, newGame, fieldSizeChange, colorNumberChange, autoTurn, won, started}) => {
    const onFieldSizeChangeHandler = (event) => {
        fieldSizeChange(Number.parseInt(event.target.value, 10))
    };

    const onColorNumberChangeHandler = (event) => {
        colorNumberChange(Number.parseInt(event.target.value, 10))
    };

    return (
        <section className="game-settings">

            <div className="flex-container">
                <NumericInput
                    type="number"
                    name="fieldSize"
                    min={6}
                    max={500}
                    value={fieldSize}
                    changehandler={onFieldSizeChangeHandler}
                    placeholder=""
                    label="Field size"
                />

                <NumericInput
                    type="number"
                    name="colorNumber"
                    min={3}
                    max={12}
                    value={colorNumber}
                    changehandler={onColorNumberChangeHandler}
                    placeholder=""
                    label="Color number"
                />
            </div>

            <button
                className="settings-button"
                onClick={() => {
                    newGame()
                }}> New game
            </button>

            <button className="settings-button"
                    onClick={autoTurn}
                    disabled={won || !started}
            > Auto turn
            </button>
        </section>
    )
};

export default GameSettings;