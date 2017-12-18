import React from 'react';

import Row from '../Row/Row';
import './GameField.css';

const GameField = ({field, changeColor}) => {

    return (
        <section className="game-field">
            {
                field.map((row, idx) => {
                    return (
                        <Row
                            key={idx}
                            boxes={row}
                            boxClickHandler={changeColor}
                        />
                    )
                })
            }
        </section>
    )
};

export default GameField;