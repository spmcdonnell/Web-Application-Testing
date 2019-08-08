import React, { useState } from 'react';
import Display from './Display';
import Dashboard from './Dashboard';

import './App.css';

function App() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    function incrementBalls() {
        setBalls(balls + 1);

        if (balls === 3) {
            clearAll();
            return;
        }
    }

    function incrementStrikes(foul) {
        if (foul === 'foul' && strikes === 2) {
            return;
        }

        setStrikes(strikes + 1);

        if (strikes === 2) {
            clearAll();
            return;
        }
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
