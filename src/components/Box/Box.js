import React from 'react'
import './Box.css';

class Box extends React.Component {
    render() {
        const {x, y, color, onClick} = this.props;
        const classes = ['box', `color-${color}`].join(' ');

        return (
            <div
                className={classes}
                onClick={() => onClick(color)}
            >
            </div>
        )
    };
};

export default Box;