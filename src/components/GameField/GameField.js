import React from 'react';
import './GameField.css';

class GameField extends React.Component {

    constructor(props) {
        super(props);
        this.canvasHeight = 0;
        this.canvasWidth = 0;
        this.cellWidth = 0;
        this.cellHeigth = 0;
    }

    renderField(canvas, field) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        const cellWidth = Math.ceil(this.canvasWidth / field[0].length);
        const cellHeigth = Math.ceil(this.canvasHeight / field.length);

        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field.length; j++) {
                ctx.fillStyle = field[j][i].color;
                ctx.fillRect(Math.ceil(j * cellWidth), Math.ceil(i * cellHeigth), cellWidth, cellHeigth);
            }
        }
        ctx.stroke();
    }

    renderVisited(canvas, visited, field) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = field[0][0].color;
        const cellWidth = Math.ceil(this.canvasWidth / field[0].length);
        const cellHeigth = Math.ceil(this.canvasHeight / field.length);

        for (const point in visited) {
            if (visited.hasOwnProperty(point)) {
                const {y, x} = visited[point];
                ctx.fillRect(Math.ceil(x * cellWidth), Math.ceil(y * cellHeigth), cellWidth, cellHeigth);
            }
        }

        ctx.stroke();
    }

    componentWillReceiveProps(nextProps) {
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
        this.canvasHeight = this._canvasRef.height;
        this.canvasWidth = this._canvasRef.width;
    }

    clickHandler = (e) => {
        const rect = this._canvasRef.getBoundingClientRect();
        const ctx = this._canvasRef.getContext("2d");

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const pixel = ctx.getImageData(x, y, 1, 1).data;

        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

        this.props.changeColor(color);
    };

    render() {
        return (
            <section
                className="game-field"
                ref={sectionRef => this._sectionRef = sectionRef}
            >
                <canvas
                    id="canvas"
                    ref={canvasRef => this._canvasRef = canvasRef}
                    onClick={this.clickHandler}
                />
            </section>
        )
    }
}

export default GameField;