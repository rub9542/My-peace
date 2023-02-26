import React from "react";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import MediaFilter from "../mediaPage/mediaFilter";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import BlogContent from "./blogContent";

import { BlogMainWrapper, SecondarySubWrapper } from "./blogStyle";

export default function BlogPageComponent() {
  return (
    <BlogMainWrapper>
      <BlogContent />
      <SecondarySubWrapper>
        <SecondaryHeaderTitle
          title=""
          subTitle="Read our recent articles"
        />
      </SecondarySubWrapper>
      <MediaFilter />
      <SingleSectionWrapper margin="6.5rem 0 5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an appointment now"
        />
      </SingleSectionWrapper>
      <Faq />
      <SingleSectionWrapper margin="4rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </BlogMainWrapper>
  );
}
