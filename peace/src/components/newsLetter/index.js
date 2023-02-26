import React from "react";
import { graphql } from "gatsby";

import MediaDetailContent from "../mediaDetail/MediaDetailContent";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import { SingleSectionPadding } from "../mediaDetail/mediaDetailStyle";
import OtherLayout from "../../layouts/otherLayout";
import { SingleSectionWrapper } from "../../styles/homePageStyle";

export default function MediaDetailComponent({ data }) {
  const { strapiNewsLetter } = data;
  return (
    <OtherLayout>
      <MediaDetailContent dataObj={strapiNewsLetter} />
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
    </OtherLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiNewsLetter(Slug: { eq: $slug }) {
      id
      Slug
      title
      description
      image {
        url
      }
    }
  }
`;
