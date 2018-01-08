import React from 'react';


const renderYouWon = (won) => {
    if (won) {
        return (
            <h1>YOU WON!!!</h1>
        )
    }
    return null;
};


const AppHeader = ({won}) => {
    return (
        <header>
            {renderYouWon(won)}
        </header>
    )
};

export default AppHeader;