import React from 'react'
import Box from '../Box/Box';
import './Row.css';

const Row = ({boxes}) => {
    return (
        <div className="row">
            {boxes.map((box, idx) => {
                return (

                    <Box
                        key={idx}
                    >
                        box
                    </Box>
                )
            })}
        </div>);
};

export default Row;