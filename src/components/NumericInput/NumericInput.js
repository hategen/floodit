import React from 'react';

import './NumericInput.css';

const NumericInput = (props) => {
    return (
        <label>
            {props.label}
            <input
                type="number"
                {...props}
            />
        </label>
    )
};

export default NumericInput;