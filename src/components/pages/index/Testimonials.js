import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styled from 'styled-components';

import { ArrowLeft, ArrowRight } from '~svgs/ChevronCircle';
import { ButtonSvgWrapper } from '~styles/Button';
import testimonialsData from '~content/index/testimonials.json';

import 'keen-slider/keen-slider.min.css';

//#region Styles
const TestimonialsSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gray};
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
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
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    div {
      width: 70%;
    }
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
  &:focus {
    outline: none;
  }
`;

const ArrowButton = styled(ButtonSvgWrapper)`
  align-self: center;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    margin: -4rem 2rem 0 2rem;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    margin-top: -4rem;
  }
`;
//#endregion

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <TestimonialsSection>
      <h2>What Andrea's Clients Say</h2>
      <SliderWrapper>
        {loaded && slider.current && (
          <ArrowButton
            aria-label="Change To Previous Testimonial"
            name="Change To Previous Testimonial"
            onClick={e => e.stopPropagation() || slider.current?.prev()}
          >
            <ArrowLeft />
          </ArrowButton>
        )}
        <div ref={sliderRef} className="keen-slider">
          {testimonialsData.map(({ by, testimonial }) => (
            <div className="keen-slider__slide" key={by}>
              <p>
                {testimonial} <br /> <span>- {by}</span>
              </p>
            </div>
          ))}
        </div>
        {loaded && slider.current && (
          <ArrowButton
            aria-label="Change To Next Testimonial"
            name="Change To Next Testimonial"
            onClick={e => e.stopPropagation() || slider.current?.next()}
          >
            <ArrowRight />
          </ArrowButton>
        )}
      </SliderWrapper>
      {loaded && slider.current && (
        <Dots>
          {[...Array(slider.current.track.details.slides.length).keys()].map(
            idx => (
              <Dot
                aria-label="Change Testimonial"
                name="Change Testimonial"
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                currentSlide={currentSlide}
                currentIndex={idx}
              />
            ),
          )}
        </Dots>
      )}
    </TestimonialsSection>
  );
};

export { Testimonials };
