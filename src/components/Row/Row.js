import React from 'react'
import Box from '../Box/Box';
import './Row.css';

const Row = ({boxes, boxClickHandler}) => {
    return (
        <div className="row">
            {boxes.map((color, idx) => {
                return (

                    <Box
                        key={idx}
                        color={color}
                        onClick={boxClickHandler}
                    >
                        box
                    </Box>
                )
            })}
        </div>);
};

export default Row;