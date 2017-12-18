import React from 'react'
import './Box.css';

const Box = ({x, y, color, onClick}) => {
    return (
        <div
            className="box"
            style={{backgroundColor: color}}
            onClick={() => onClick(color)}
        >

        </div>
    )
};


export default Box;