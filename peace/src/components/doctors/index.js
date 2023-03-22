import React from "react";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import ArticleSection from "../articleSection";
import Faq from "../faq";
import OurDoctors from "../ourDoctors";
import CheerSubscribe from "../staticComponent/cheerSubscribe";

import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";

export default function DoctorsComponent() {
  return (
    <div>
      {" "}
      <SingleSectionWrapper margin="1rem 0 0 2rem">
        <OurDoctors />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="6.5rem 0 0.2rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
        />
      </SingleSectionWrapper>
      <SingleSectionWrapper>
        <Faq />
      </SingleSectionWrapper>
      <SingleSectionWrapper>
        <ArticleSection showIcons={true} urlPath="articles" />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="6rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </div>
  );
}
