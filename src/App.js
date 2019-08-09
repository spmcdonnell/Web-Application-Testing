import React, { useState, useEffect } from 'react';
import Display from './Display';
import Dashboard from './Dashboard';

import './App.css';

function App() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    useEffect(() => {
        if (balls === 4) {
            clearAll();
        }

        if (strikes === 3) {
            clearAll();
        }
    }, [balls, strikes]);

    function incrementBalls() {
        setBalls(balls + 1);
    }

    function incrementStrikes(foul) {
        if (foul === 'foul' && strikes === 2) {
            return;
        }

        setStrikes(strikes + 1);
    }

    function clearAll() {
        setStrikes(0);
        setBalls(0);
    }

    return (
        <div className="App">
            <Display balls={balls} strikes={strikes} />
            <Dashboard incrementBalls={incrementBalls} incrementStrikes={incrementStrikes} clearAll={clearAll} />
        </div>
    );
}

export default App;
