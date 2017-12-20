export const ACTION_NEW_GAME = 'ACTION_NEW_GAME';
export const ACTION_FIELDSIZE_CHANGE = 'ACTION_FIELDSIZE_CHANGE';
export const ACTION_COLOR_NUMBER_CHANGE = 'ACTION_COLOR_NUMBER_CHANGE';
export const ACTION_CHANGE_COLOR = 'ACTION_CHANGE_COLOR';
export const ACTION_AUTOTURN = 'ACTION_AUTOTURN';

export const newGame = (fieldSize) => ({
    type: ACTION_NEW_GAME
});

export const fieldSizeChange = (fieldSize) => ({
    type: ACTION_FIELDSIZE_CHANGE,
    fieldSize
});


export const colorNumberChange = (colorNumber) => ({
    type: ACTION_COLOR_NUMBER_CHANGE,
    colorNumber
});

export const changeColor = (color) => ({
    type: ACTION_CHANGE_COLOR,
    color
});


export const autoTurn = () => ({
    type: ACTION_AUTOTURN
});
