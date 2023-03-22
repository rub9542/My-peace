import React from "react";

import {
  QuoteSectionWrapper,
  CarouselWrapper,
} from "../../styles/homePageStyle";
import InsuranceCarousel from "../staticComponent/card";

export default function QuoteSection() {
  return (
    <QuoteSectionWrapper>
      <CarouselWrapper responsiveTop="-15rem">
        <InsuranceCarousel
          forStyle="insurence"
          title="All major insurances accepted"
          type=""
          subTitle="We accept cashless options through the many healthcare insurance providers"
        />
      </CarouselWrapper>
    </QuoteSectionWrapper>
  );
}
