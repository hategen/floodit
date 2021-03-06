import React from 'react';

import Row from '../Row/Row';
import './GameField.css';

class GameField extends React.Component {

    render() {
        const {field, changeColor, frontier} = this.props;
        return (
            <section className="game-field">
                {
                    field.map((row, idx) => {
                        return (
                            <Row
                                key={`row_${idx}`}
                                boxes={row}
                                y={idx}
                                boxClickHandler={changeColor}
                                frontier={frontier}
                            />
                        )
                    })
                }
            </section>
        )
    }
}

export default GameField;