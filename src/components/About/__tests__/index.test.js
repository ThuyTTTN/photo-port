import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //First test
    it('renders', () => {
        render(<About />);
    });
    // Second test - 'test case'; compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        //render About
        //asFragment function returns a snapshot of the About component
        const { asFragment } = render(<About />);
        //test and compare whether the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    });
})
