import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  SliderArrowsDotsSection,
  SliderCustomArrows,
  SliderSingleArrow,
  TesitimonialInnerSectionWrapper,
  TesitimonialSectionWrapper,
  DotWrapper,
  DotItem,
  TesitimonialCarouselSectionWrapper,
  TestimonialHeader,
  TestimonialSubHeader,
  TesitimonialContainer,
  DashedCircleDiv,
  SubClickArrow,
} from "./testimonialSectionStyle";
import TestimonialCard from "../testimonialCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1163 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 140,
  },
  tablet: {
    breakpoint: { max: 1163, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function index() {
  const ButtonGroup = ({ next, previous, ...rest }) => {
    return (
      <SliderArrowsDotsSection>
        <SliderCustomArrows>
          <SubClickArrow onClick={() => previous()}>
            <SliderSingleArrow
              initialCount={
                rest.carouselState.currentSlide === 0 ? true : false
              }
            >
              <svg
                width="30"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1L2 8.34426L10 15"
                  stroke={
                    rest.carouselState.currentSlide === 0
                      ? "#00000054"
                      : "black"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </SliderSingleArrow>
          </SubClickArrow>
          <SubClickArrow onClick={() => next()}>
            <SliderSingleArrow
              initialCount={
                rest.carouselState.totalItems ===
                rest.carouselState.currentSlide +
                  rest.carouselState.slidesToShow
                  ? true
                  : false
              }
            >
              <svg
                width="30"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L9 8.34426L1 15"
                  stroke={
                    rest.carouselState.totalItems ===
                    rest.carouselState.currentSlide +
                      rest.carouselState.slidesToShow
                      ? "#00000054"
                      : "black"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </SliderSingleArrow>
          </SubClickArrow>
        </SliderCustomArrows>
      </SliderArrowsDotsSection>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <DotWrapper onClick={() => onClick()}>
        <DotItem active={active ? true : false} />
      </DotWrapper>
    );
  };

  return (
    <TesitimonialContainer>
      <TesitimonialSectionWrapper>
        <TestimonialHeader>Our Testimonials</TestimonialHeader>
        <TesitimonialInnerSectionWrapper>
          <TestimonialSubHeader>What they say about us</TestimonialSubHeader>
          <TesitimonialCarouselSectionWrapper>
            <Carousel
              swipeable={false}
              draggable={false}
              arrows={false}
              responsive={responsive}
              partialVisible
              showDots
              renderDotsOutside
              renderButtonGroupOutside
              customDot={<CustomDot />}
              keyBoardControl
              customButtonGroup={<ButtonGroup />}
            >
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </Carousel>
          </TesitimonialCarouselSectionWrapper>
          {/* {ButtonGroup()} */}
        </TesitimonialInnerSectionWrapper>
      </TesitimonialSectionWrapper>
      <DashedCircleDiv />
    </TesitimonialContainer>
  );
}
