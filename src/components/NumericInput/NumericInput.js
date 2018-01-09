import React from 'react';

import './NumericInput.css';

class NumericInput extends React.Component {
    constructor(props) {
        super(props);

    }

    _change() {
        const event = new Event('change', {
            'bubbles': true,
            'cancelable': true
        });

        this._inputRef.dispatchEvent(event);
        this.props.onChange(event);
    }

    increment = () => {
        this._inputRef.stepUp();
        this._change();
    };

    decrement = () => {
        this._inputRef.stepDown();
        this._change();
    };

    render() {
        return (
            <React.Fragment>
            <span className="number-input-label">
                    {this.props.label}
                </span>
                <div className="number-input">
                    <button
                        onClick={this.decrement}
                        className="minus"/>
                    <input
                        ref={inputRef => this._inputRef = inputRef}
                        className="quantity"
                        type="number"
                        {...this.props}
                    />
                    <button
                        onClick={this.increment}
                        className="plus"
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default NumericInput;