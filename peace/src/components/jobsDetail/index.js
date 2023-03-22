import React from "react";

import OtherLayout from "../../layouts/otherLayout";
import Jobsheader from "./jobsHeader";
import { SingleSectionPadding } from "../mediaDetail/mediaDetailStyle";
import Faq from "../faq";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import ArticleSection from "../articleSection";
import { graphql } from "gatsby";

function JobsDetailComponent({ data }) {
  const { strapiJob } = data;

  return (
    <OtherLayout>
      <Jobsheader toPath="/career" dataObj={strapiJob} />
      <SingleSectionPadding>
        <Faq />
      </SingleSectionPadding>
      <ArticleSection showIcons={true} urlPath="articles" />
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
    strapiJob(Slug: { eq: $slug }) {
      id
      Slug
      title
      description {
        data {
          description
        }
      }
    }
  }
`;

export default JobsDetailComponent;
