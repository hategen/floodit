import React from 'react';

import './NumericInput.css';

const NumericInput = (props) => {
    return (
        <label for={props.name}>
            <span> {props.label}</span>

            <input
                type="number"
                {...props}
            />
        </label>
    )
};

export default NumericInput;