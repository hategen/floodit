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