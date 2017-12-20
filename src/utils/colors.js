import randomColor from 'randomcolor';
import {getRandomFromArray} from './utils';

export const getRandomColors = (count = 6) => {
    const colors = [];

    for (let i = 0; i < count; i++) {
        colors.push(randomColor({
            luminosity: 'ligth',
            hue: 'random',
            format: 'rgb'
        }));
    }
    return colors;
};

export const getRandomField = (colors, dimensions) => {
    const array = [];
    for (let i = 0; i < dimensions; i++) {
        array[i] = [];
        for (let j = 0; j < dimensions; j++) {
            array[i].push({
                    visited: false,
                    color: getRandomFromArray(colors)
                }
            )
        }
    }
    return array;
};

const getNeighbours = (field, x, y, color) => {
    const fieldLength = field[0].length - 1;
    const fieldHeigth = field.length - 1;
    const neighbours = [];

    if (x - 1 >= 0 && field[y][x - 1].color === color) {
        neighbours.push({x: x - 1, y});
    }

    if (x + 1 <= fieldLength && field[y][x + 1].color === color) {
        neighbours.push({x: x + 1, y});
    }

    if (y - 1 >= 0 && field[y - 1][x].color === color) {
        neighbours.push({x: x, y: y - 1});
    }

    if (y + 1 <= fieldHeigth && field[y + 1][x].color === color) {
        neighbours.push({x, y: y + 1});
    }

    return neighbours;
};

const getNonMatchingNeighbours = (field, x, y, color) => {
    const fieldLength = field[0].length - 1;
    const fieldHeigth = field.length - 1;
    const neighbours = [];

    if (x - 1 >= 0 && field[y][x - 1].color !== color) {
        neighbours.push({x: x - 1, y, color: field[y][x - 1].color});
    }

    if (x + 1 <= fieldLength && field[y][x + 1].color !== color) {
        neighbours.push({x: x + 1, y, color: field[y][x + 1].color});
    }

    if (y - 1 >= 0 && field[y - 1][x].color !== color) {
        neighbours.push({x: x, y: y - 1, color: field[y - 1][x].color});
    }

    if (y + 1 <= fieldHeigth && field[y + 1][x].color !== color) {
        neighbours.push({x, y: y + 1, color: field[y + 1][x].color});
    }

    return neighbours;
};

const filterVisited = (visited = {}, points = []) => {
    return points.filter(el => {
        return !visited[`${el.x}_${el.y}`];
    });
};

const repaintField = (field, points, color) => {
    console.time('REPAINT');
    const newField = JSON.parse(JSON.stringify(field));

    for (const point in points) {
        if (points.hasOwnProperty(point)) {
            const [x, y] = point.split('_');
            newField[y][x].color = color;
        }
    }
    console.timeEnd('REPAINT');
    return newField;
};

const mapFrontierToArray = (frontier) => {
    console.time('MAP');
    const newFrontier = [];
    for (const point in frontier) {
        if (frontier.hasOwnProperty(point)) {
            const [x, y] = point.split('_');
            newFrontier.push({x: Number.parseInt(x, 10), y: Number.parseInt(y, 10)})
        }
    }
    console.timeEnd('MAP');
    return newFrontier.length ? newFrontier : [{x: 0, y: 0}];
};

const getMaxNeighbours = (point, fieldSize) => {
    if (
        (point.x === 0 && point.y === 0) ||
        (point.x === 0 && point.y === fieldSize) ||
        (point.x === fieldSize && point.y === 0) ||
        (point.x === fieldSize && point.y === fieldSize)
    ) {
        return 2;
    }
    else if (
        (point.x === 0 && point.y > 0 && point.y < fieldSize) ||
        (point.x === fieldSize && point.y > 0 && point.y < fieldSize) ||
        (point.y === 0 && point.x > 0 && point.x < fieldSize) ||
        (point.y === fieldSize && point.x > 0 && point.x < fieldSize)

    ) {
        return 3;
    }
    else if (
        point.x >= 1 && point.x !== 0 &&
        point.x !== fieldSize && point.y >= 1 &&
        point.y !== 0 &&
        point.y !== fieldSize) {

        return 4
    }
};


const clearFrontier = (frontier, field, color) => {
    Object.keys(frontier).forEach(point => {
        const [x, y] = point.split('_');
        const neighbours = getNeighbours(field, Number.parseInt(x, 10), Number.parseInt(y, 10), color);

        if (neighbours.length === getMaxNeighbours({x, y}, field.length)) {
            delete frontier[point];
        }
    });
    return frontier;
};

export const getNextTurnColor = (frontier, field) => {
    const hash = {};

    frontier.forEach(point => {
        const {x, y} = point;
        const color = field[y][x].color;
        const visited = {};
        const neighbours = getNonMatchingNeighbours(field, Number.parseInt(x, 10), Number.parseInt(y, 10), color);

        neighbours.forEach(el => {
            if (!visited[`${el.x}_${el.y}`]) {
                hash[el.color] ? (hash[el.color]++) : (hash[el.color] = 1);
                visited[`${el.x}_${el.y}`] = true;
            }
        });

    });


    let maxcolorName = Object.keys(hash)[0];
    let maxColorNum = hash[maxcolorName];

    for (const col in hash) {

        if (hash[col] > maxColorNum) {
            maxColorNum = hash[col];
            maxcolorName = col;
        }
    }

    return maxcolorName;
};


export const floodField = (field, color, startFrontier, visited) => {
        console.time('FLOOD');
        let floodColor = field[0][0].color;
        //  const visited = {};
        if (color === floodColor) {
            return {field, frontier: startFrontier, visited};
        }
        const nextFrontier = {};
        const fieldSize = field.length - 1;
        while (startFrontier.length !== 0) {
            const current = startFrontier.pop();
            const neighbours = getNeighbours(field, current.x, current.y, floodColor);
            const notVisited = filterVisited(visited, neighbours);

            if ((neighbours.length < 2 && getMaxNeighbours(current, fieldSize) === 2) ||
                (neighbours.length < 3 && getMaxNeighbours(current, fieldSize) === 3) ||
                (neighbours.length < 4 && getMaxNeighbours(current, fieldSize) === 4)) {
                nextFrontier[`${current.x}_${current.y}`] = true;
            }

            visited[`${current.x}_${current.y}`] = true;
            field[current.y][current.x].visited = true;

            startFrontier.push(...notVisited);

            if (startFrontier.length === 0 && mapFrontierToArray(nextFrontier).length && floodColor !== color) {
                floodColor = color;
                startFrontier.push(...mapFrontierToArray(nextFrontier));
            }
        }

        console.timeEnd('FLOOD');

        const newField = repaintField(field, visited, color);

        const ret = {
            field: newField,
            frontier: mapFrontierToArray(clearFrontier(nextFrontier, newField, color)),
            visited
        };

        return ret;
    }
;
