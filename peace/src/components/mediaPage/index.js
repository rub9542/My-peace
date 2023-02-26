import React, { useState } from "react";
import MediaFilter from "./mediaFilter";
import MediaHeader from "./mediaHeader";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";

export default function MediaPageComponent() {
  const [selectedTab, setSelectedTab] = useState("media");

  return (
    <div>
      <MediaHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <MediaFilter selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <SingleSectionWrapper margin="5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
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
    </div>
  );
}
