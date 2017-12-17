export const ACTION_NEW_GAME = 'ACTION_NEW_GAME';

export const testAction = ({fieldSize}) => ({
    type: ACTION_NEW_GAME,
    fieldSize
});
