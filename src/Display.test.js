import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

describe('Display', () => {
    it('Should not crash', () => {
        render(<Display />);
    });

    it('Should display the appropriate number of balls', () => {
        const display = render(<Display balls={1} />);

        display.getByText(/Balls: 1/i);
    });

    it('Should display the appropriate number of strikes', () => {
        const display = render(<Display strikes={1} />);

        display.getByText(/Strikes: 1/i);
    });
});
