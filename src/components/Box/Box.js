import React from 'react'
import './Box.css';

const Box = ({x, y, color}) => {
    return (
        <div
            className="box"
            style={{backgroundColor: color}}
        >

        </div>
    )
};


export default Box;