import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './ColorControls.css';

const ColorControls = ({changeColor, remainingColors}) => {
    return (
        <div className="color-controls">
            {remainingColors.map(color => {
                return (
                    <ColorBox
                        key={`ColorBox-${color}`}
                        color={color}
                        onClick={changeColor}
                    />

                );
            })}

        </div>
    )
};

export default ColorControls;