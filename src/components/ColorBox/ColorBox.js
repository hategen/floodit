import React from 'react';
import './ColorBox.css';

const ColorBox = ({onClick, color}) => {
    return (
        <div
            className="color-box"
            style={{backgroundColor: color}}
            onClick={() => onClick(color)}
        />
    )
};

export default ColorBox;