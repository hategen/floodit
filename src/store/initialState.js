const initialState = {
    fieldSize: 10,
    colorNumber: 6,
    field: null,
    isStarted: false,
    movesMade: 0,
    colors: [],
    currentColor: null,
    frontier: [{x: 0, y: 0}],
    visited: {},
    won: false
};

export default initialState;