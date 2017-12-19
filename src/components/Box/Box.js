import React from 'react'
import './Box.css';

const Box = ({x, y, color, onClick, frontier}) => {

    const isFrontier = !!frontier.find(el => (el.x === x && el.y === y));
    const classes = ['box'];

    if (isFrontier) {
        classes.push("frontier");
    }
    return (
        <div
            className={classes.join(' ')}
            style={{backgroundColor: color}}
            onClick={() => onClick(color)}
        >

        </div>
    )
};


export default Box;