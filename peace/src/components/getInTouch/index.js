import React from "react";

import { TouchImageWrapper } from "./getInTouchStyle";
import DetailsAndForm from "./detailsAndForm";
import Faq from "../faq";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import FollowUs from "../followUs";
import GetInImage from '../../images/getInTouch/headerImage.png'
function GetInTouch() {
  return (
    <main>
      <TouchImageWrapper>
        <img src={GetInImage} alt="getImage"/>
      </TouchImageWrapper>
      <DetailsAndForm />
      <FollowUs />
      <SingleSectionWrapper margin="6.5rem 0 5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
        />
      </SingleSectionWrapper>
      <Faq />
      <SingleSectionWrapper margin="6rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </main>
  );
}

export default GetInTouch;
