import React from "react";
import CareerContent from "./careerContent";
import JoinOurTeam from "./joinOurTeam";
import Pagination from "../pagination";
import Faq from "../faq";
import ArticleSection from "../articleSection";
import CheerSubscribe from "../staticComponent/cheerSubscribe";

import NewsLetter from "../../images/subscribe/Newsletter.png";

import { CareerMainWrapper } from "./careerStyle";
import { SingleSectionWrapper } from "../../styles/homePageStyle";

export default function CareerPageComponent() {
  return (
    <CareerMainWrapper>
      <JoinOurTeam />
      <CareerContent />
      <SingleSectionWrapper>
        <Pagination currentPage="1" totalPages="5" />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="6rem 0 0 0">
        <Faq />
      </SingleSectionWrapper>
      <ArticleSection />
      <SingleSectionWrapper margin="4rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </CareerMainWrapper>
  );
}
