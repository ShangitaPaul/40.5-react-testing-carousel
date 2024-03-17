import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom/extend-expect';


describe('Card Component', () => {
    it('renders without crashing', () => {
      render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={5} />);
    });
  
    it('matches snapshot', () => {
      const { container } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={5} />);
      expect(container).toMatchSnapshot();
    });
  });