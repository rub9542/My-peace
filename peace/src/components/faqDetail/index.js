import React from "react";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import { FormInput } from "../form/formStyle";
import ArticleSection from "../articleSection";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import FaqDetailAccordion from "./faqDetailAccordion";

import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";

import {
  DetailLabel,
  DetailSearch,
  DetailSectionTextWrapper,
  FaqDetailSectionWrapper,
  SecondaryTitle,
} from "./faqDetailStyle";

export default function FaqDetailComponent() {
  return (
    <FaqDetailSectionWrapper>
      <DetailSectionTextWrapper>
        <div>
          <SecondaryTitle>
            FAQ
            <br />
            <span>Ask us anything</span>
          </SecondaryTitle>
        </div>
      </DetailSectionTextWrapper>
      <DetailSearch>
        <DetailLabel>Search</DetailLabel>
        <FormInput placeholder="Search questions you need to know" />
      </DetailSearch>
      <FaqDetailAccordion />
      <SingleSectionWrapper margin="5rem 0 0.2rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an appointment now"
        />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="3rem 0 2rem 0">
        <ArticleSection />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="7rem 0 3rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </FaqDetailSectionWrapper>
  );
}
