import React from 'react';

import Row from '../Row/Row';
import './GameField.css';

class GameField extends React.Component {

    /*  render() {
          const {field, changeColor, frontier} = this.props;
          return (
              <section className="game-field">
                  {
                      field.map((row, idx) => {
                          return (
                              <Row
                                  key={`row_${idx}`}
                                  boxes={row}
                                  y={idx}
                                  boxClickHandler={changeColor}
                                  frontier={frontier}
                              />
                          )
                      })
                  }
              </section>
          )
      }*/

    renderField(canvas, field) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const canvasHeight = canvas.height;
        const canvasWidth = canvas.width;
        const cellWidth = canvasWidth / field[0].length;
        const cellHeigth = canvasHeight / field.length;

        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field.length; j++) {
                ctx.fillStyle = field[j][i].color;
                ctx.fillRect(j * cellWidth, i * cellHeigth, cellWidth, cellHeigth);
            }
        }
        ctx.stroke();
    }

    renderVisited(canvas, visited, field) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = field[0][0].color;
        const canvasHeight = canvas.height;
        const canvasWidth = canvas.width;
        const cellWidth = canvasWidth / field[0].length;
        const cellHeigth = canvasHeight / field.length;

        for (const point in visited) {
            if (visited.hasOwnProperty(point)) {
                const [y, x] = point.split('_');
                ctx.fillRect(x * cellWidth, y * cellHeigth, cellWidth, cellHeigth);
            }
        }

        ctx.stroke();
    }

    componentWillReceiveProps(nextProps) {
        const {changeColor} = this.props;
        const canvas = this._canvasRef;
        if (nextProps.field && Object.keys(nextProps.visited).length === 0) {
            this.renderField(canvas, nextProps.field);
        } else if (Object.keys(nextProps.visited).length !== 0) {
            this.renderVisited(canvas, nextProps.visited, nextProps.field);
        }
    }

    componentDidMount() {
        this._canvasRef.width = Number.parseInt(window.getComputedStyle(this._sectionRef, null).getPropertyValue('width'), 10);
        this._canvasRef.height = Number.parseInt(window.getComputedStyle(this._sectionRef, null).getPropertyValue('height'), 10);
    }

    render() {
        return (
            <section
                className="game-field"
                ref={sectionRef => this._sectionRef = sectionRef}
            >
                <canvas
                    id="canvas"
                    ref={canvasRef => this._canvasRef = canvasRef}
                />
            </section>
        )
    }
}

export default GameField;