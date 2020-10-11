import React, { useState } from 'react';
import styled from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';

import { ArrowBase } from './styles/ArrowBase';

import testimonialsData from '../content/testimonials.json';

import 'keen-slider/keen-slider.min.css';

//#region Styles
const TestimonialsSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.gray};
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    padding: 4rem 2rem;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: bolder;
    font-style: italic;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    div {
      width: 70%;
    }
  }
`;

const Arrow = styled(ArrowBase)`
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    margin: 0 2rem;
    width: 8rem;
    height: 8rem;
    circle {
      fill: rgba(255, 255, 255, 0.6);
    }
    path {
      fill: ${({ theme }) => theme.gray};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    margin-top: -2rem;
    width: 10rem;
    height: 10rem;
  }
`;

const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
`;

const Dot = styled.button`
  border: none;
  width: 10px;
  height: 10px;
  background: ${({ currentSlide, currentIndex }) =>
    currentSlide === currentIndex ? '#000' : '#c5c5c5'};
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
//#endregion

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
  });

  return (
    <TestimonialsSection>
      <h2>What Andrea's Clients Say</h2>
      <SliderWrapper>
        {slider && (
          <>
            <ArrowLeft onClick={e => e.stopPropagation() || slider.prev()} />
          </>
        )}
        <div ref={sliderRef} className="keen-slider">
          {testimonialsData.map(content => (
            <div className="keen-slider__slide" key={content.by}>
              <p>
                {content.testimonial} <br /> <span>- {content.by}</span>
              </p>
            </div>
          ))}
        </div>
        {slider && (
          <>
            <ArrowRight onClick={e => e.stopPropagation() || slider.next()} />
          </>
        )}
      </SliderWrapper>
      {slider && (
        <Dots>
          {[...Array(slider.details().size).keys()].map(idx => (
            <Dot
              key={idx}
              onClick={() => slider.moveToSlideRelative(idx)}
              currentSlide={currentSlide}
              currentIndex={idx}
            />
          ))}
        </Dots>
      )}
    </TestimonialsSection>
  );
};

const ArrowLeft = ({ onClick }) => (
  <Arrow
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z" />
  </Arrow>
);

const ArrowRight = ({ onClick }) => (
  <Arrow
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
  </Arrow>
);

export { Testimonials };
