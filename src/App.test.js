import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
