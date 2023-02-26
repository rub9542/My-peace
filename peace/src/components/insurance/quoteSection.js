import React, { useState, useEffect } from "react";

import {
  QuoteSectionWrapper,
  CarouselWrapper,
} from "../../styles/homePageStyle";
import InsuranceCarousel from "../staticComponent/card";

export default function QuoteSection() {
  const isBrowser = typeof window !== "undefined";

  const [displayResponsiveImage, setDisplayResponsiveImage] = useState(
    isBrowser ? window.innerWidth : ""
  );

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", setDimension);
      return () => {
        window.removeEventListener("resize", setDimension);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayResponsiveImage]);

  const setDimension = () => {
    if (isBrowser) {
      setDisplayResponsiveImage(window.innerWidth);
    }
  };

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
      {/* {displayResponsiveImage > 800 ? 
            <StaticImage
                alt="Quote section logo"
                src="../../images/homePage/quoteSection.png"
            />:<StaticImage
            alt="Quote section logo"
            src="../../images/homePage/quoteSection_responsive.png"
        />
        }
            <QuoteTextWrapper>
                <i>“They say a healthy body is the mantra of a successful life.”</i>
                <h3>We say why not a healthy mind too?</h3>
            </QuoteTextWrapper> */}
    </QuoteSectionWrapper>
  );
}
