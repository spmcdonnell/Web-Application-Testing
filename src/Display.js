import React from 'react';

function Display({ balls, strikes }) {
    return (
        <div>
            <div>
                <h3>Balls: {balls}</h3>
            </div>
            <div>
                <h3>Strikes: {strikes}</h3>
            </div>
        </div>
    );
}

export default Display;
