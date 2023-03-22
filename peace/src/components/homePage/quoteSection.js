import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  QuoteSectionWrapper,
  QuoteTextWrapper,
  CarouselWrapper,
  QuoteImageWrapper,
  QuoteImageSubWrapper,
} from "../../styles/homePageStyle";
import InsuranceCarousel from "../staticComponent/card";
export default function QuoteSection() {
  return (
    <QuoteSectionWrapper>
      <CarouselWrapper>
        <InsuranceCarousel
          title="All major insurances accepted"
          type=""
          subTitle="We accept cashless options through the many healthcare insurance providers"
        />
      </CarouselWrapper>
      <QuoteImageWrapper>
        <StaticImage
          alt="Quote section logo"
          src="../../images/homePage/quoteSection.png"
        />
      </QuoteImageWrapper>
      <QuoteImageSubWrapper>
        <StaticImage
          alt="Quote section logo"
          src="../../images/homePage/quoteSection_responsive.png"
        />
      </QuoteImageSubWrapper>
      <QuoteTextWrapper>
        <i>“They say a healthy body is the mantra of a successful life.”</i>
        <h3>We say why not a healthy mind too?</h3>
      </QuoteTextWrapper>
    </QuoteSectionWrapper>
  );
}
