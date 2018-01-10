import React from 'react'
import Box from '../Box/Box';
import './Row.css';

const Row = ({boxes, boxClickHandler, y, frontier}) => {
    return (
        <div className="row">
            {boxes.map((box, idx) => {
                return (
                    <Box
                        key={`${idx}_${y}`}
                        color={box.color}
                        visited={box.visited}
                        onClick={boxClickHandler}
                        x={idx}
                        y={y}
                        frontier={frontier}
                    />
                )
            })}
        </div>);
};

export default Row;