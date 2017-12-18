import randomColor from 'randomcolor';
import {getRandomFromArray} from './utils';

export const getRandomColors = (count = 6) => {
    return randomColor({
        count,
        luminosity: 'light',
        format: 'rgb'
    });
};

export const getRandomColorsMatrix = (colors, dimensions) => {
    const array = [];
    for (let i = 0; i < dimensions; i++) {
        array[i] = [];
        for (let j = 0; j < dimensions; j++) {
            array[i].push(getRandomFromArray(colors))
        }
    }
    return array;
};

const getNeighbours = (field, x, y, color) => {
    const fieldLength = field[0].length - 1;
    const fieldHeigth = field.length - 1;
    const neighbours = [];

    if (x - 1 >= 0 && field[y][x - 1] === color) {
        neighbours.push({x: x - 1, y});
    }

    if (x + 1 <= fieldLength && field[y][x + 1] === color) {
        neighbours.push({x: x + 1, y});
    }

    if (y - 1 >= 0 && field[y - 1][x] === color) {
        neighbours.push({x: x, y: y - 1});
    }

    if (y + 1 <= fieldHeigth && field[y + 1][x] === color) {
        neighbours.push({x, y: y + 1});
    }

    return neighbours;
};

const filterVisited = (visited = {}, points = []) => {
    return points.filter(el => {
        return !visited[`${el.x}_${el.y}`];
    });
};

const repaintField = (field, points, color) => {
    const newField = JSON.parse(JSON.stringify(field));

    for (const point in points) {
        if (points.hasOwnProperty(point)) {
            const [x, y] = point.split('_');
            newField[y][x] = color;
        }
    }

    return newField;
};
const mapFrontierToArray = (frontier) => {
    const newFrontier = [];
    for (const point in frontier) {
        if (frontier.hasOwnProperty(point)) {
            const [x, y] = point.split('_');
            newFrontier.push({x: Number.parseInt(x, 10), y: Number.parseInt(y, 10)})
        }
    }
    return newFrontier.length ? newFrontier : [{x: 0, y: 0}];
};

const filterStartFrontier = (frontier, field) => {

};

export const floodField = (field, color, startFrontier) => {
    console.time('FLOOD');
    const floodColor = field[0][0];
    const visited = {};
    if (color === floodColor) {
        return {field, frontier: startFrontier};
    }
    const nextFrontier = {};
    while (startFrontier.length !== 0) {
        const current = startFrontier.pop();
        const neighbours = getNeighbours(field, current.x, current.y, floodColor);
        const notVisited = filterVisited(visited, neighbours);

        if (neighbours.length < 4 && current.x >= 1 && current.x !== 0 && current.x !== field.length - 1 && current.y >= 1 && current.y !== 0 && current.y !== field.length - 1) {
            nextFrontier[`${current.x}_${current.y}`] = true;
        } else if (neighbours.length < 3 && (current.x === 0 || current.x === field.length - 1)) {
            nextFrontier[`${current.x}_${current.y}`] = true;
        } else if (neighbours.length < 3 && (current.y === 0 || current.y === field.length - 1)) {
            nextFrontier[`${current.x}_${current.y}`] = true;
        }


        visited[`${current.x}_${current.y}`] = true;
        startFrontier.push(...notVisited);
    }

    console.timeEnd('FLOOD');
    const ret = {field: repaintField(field, visited, color), frontier: mapFrontierToArray(nextFrontier)}

    return ret;
};
