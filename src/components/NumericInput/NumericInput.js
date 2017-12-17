import React from 'react';

import './NumericInput.css';

const NumericInput = (props) => {
    return (
        <input
            type="number"
            {...props}
        />
    )
};

export default NumericInput;