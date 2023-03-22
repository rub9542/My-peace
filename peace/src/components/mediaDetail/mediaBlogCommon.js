import React from "react";

import { SingleSectionWrapper } from "../../styles/homePageStyle";

import CheerSubscribe from "../staticComponent/cheerSubscribe";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import { SingleSectionPadding } from "./mediaDetailStyle";

function MediaBlogCommon() {
  return (
    <div>
      <SingleSectionWrapper margin="6.5rem 0 5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
        />
      </SingleSectionWrapper>

      <SingleSectionPadding>
        <Faq />
      </SingleSectionPadding>
      <SingleSectionPadding>
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionPadding>
    </div>
  );
}

export default MediaBlogCommon;
