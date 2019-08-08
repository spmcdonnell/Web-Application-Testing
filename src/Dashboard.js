import React from 'react';

function Dashboard({ incrementBalls, incrementStrikes, clearAll }) {
    return (
        <div style={{ margin: '0 auto' }}>
            <button onClick={incrementStrikes}>Strike</button>
            <button onClick={incrementBalls}>Ball</button>
            <button onClick={() => incrementStrikes('foul')}>Foul</button>
            <button onClick={clearAll}>Hit</button>
        </div>
    );
}

export default Dashboard;
