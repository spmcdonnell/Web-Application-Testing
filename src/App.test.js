import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode(div);
// });

describe('<App />', () => {
    it('renders without crashing', () => {
        render(<App />);
    });
});
