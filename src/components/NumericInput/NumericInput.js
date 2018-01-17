import React from 'react';

import './NumericInput.css';

class NumericInput extends React.Component {

    _change() {
        const event = new Event('change', {
            'bubbles': true,
            'cancelable': true
        });

        if (this._inputRef.value > this.props.max) {
            this._inputRef.value = this.props.max;
        }
        if (this._inputRef.value < this.props.min) {
            this._inputRef.value = this.props.min;
        }
        this._inputRef.dispatchEvent(event);


        this.props.changehandler(event);
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
                        onChange={()=>this._change()}
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