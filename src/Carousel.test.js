import { render, fireEvent, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import '@testing-library/jest-dom/extend-expect';

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// Smoke test
describe('Carousel Component', () => {
  const photos = [
    { src: 'image1.jpg', caption: 'Image 1' },
    { src: 'image2.jpg', caption: 'Image 2' },
    { src: 'image3.jpg', caption: 'Image 3' }
  ];

  it('renders without crashing', () => {
    render(<Carousel photos={photos} title="Test Carousel" />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Carousel photos={photos} title="Test Carousel" />);
    expect(container).toMatchSnapshot();
  });
});

import { fireEvent, render } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel Component', () => {
  const photos = [
    { src: 'image1.jpg', caption: 'Image 1' },
    { src: 'image2.jpg', caption: 'Image 2' },
    { src: 'image3.jpg', caption: 'Image 3' }
  ];
// Arrow bug fix
  it('moves to previous image when left arrow is clicked', () => {
    const { getByTestId } = render(<Carousel photos={photos} title="Test Carousel" />);
    const leftArrow = getByTestId('left-arrow');

    // Clicking the left arrow once
    fireEvent.click(leftArrow);

    // Assert that the first image is displayed
    expect(getByTestId('carousel-image')).toHaveAttribute('src', photos[0].src);
  });
});

describe('Carousel Component', () => {
  const photos = [
    { src: 'image1.jpg', caption: 'Image 1' },
    { src: 'image2.jpg', caption: 'Image 2' },
    { src: 'image3.jpg', caption: 'Image 3' }
  ];

  it('renders without crashing', () => {
    render(<Carousel photos={photos} title="Test Carousel" />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Carousel photos={photos} title="Test Carousel" />);
    expect(container).toMatchSnapshot();
  });

  it('hides left arrow on first image', () => {
    render(<Carousel photos={photos} title="Test Carousel" />);
    const leftArrow = screen.queryByTestId('left-arrow');
    expect(leftArrow).toBeNull();
  });

  it('hides right arrow on last image', () => {
    render(<Carousel photos={photos} title="Test Carousel" />);
    const rightArrow = screen.queryByTestId('right-arrow');
    expect(rightArrow).toBeNull();
  });
});
