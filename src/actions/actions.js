export const ACTION_NEW_GAME = 'ACTION_NEW_GAME';
export const ACTION_FIELDSIZE_CHANGE = 'ACTION_FIELDSIZE_CHANGE';
export const ACTION_COLOR_NUMBER_CHANGE = 'ACTION_COLOR_NUMBER_CHANGE';

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
