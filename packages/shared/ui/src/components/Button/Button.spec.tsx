import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import Button from './';

describe('Button component', () => {
    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = render(
            <Button>Text here</Button>
        );
    });

    it('should render button', () => {
        const form = wrapper.container.querySelector('button');
        expect(form).toBeInTheDocument();
    });

    it('should render button text', () => {
        const { getByText } = wrapper;
        expect(getByText('Text here')).toBeDefined();
    });
});
