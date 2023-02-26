import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import {
  BlogContentWrapper,
  BlogImageWrapper,
  BlogParagraphText,
  BlogTextWrapper,
} from "./blogStyle";

export default function ExploreWeeklyRoutine() {
  return (
    <BlogContentWrapper>
      <BlogTextWrapper>
        <SecondaryHeaderTitle
          title="Articles"
          subTitle="you'll find to read"
        />

        <BlogParagraphText>
          We’re here for you! At Sukoon, our experienced team provides
          compassionate, short-term and inpatient mental health services that
          help you feel better as quickly as possible. We work with you
          one-on-one ensuring that every part of your care is personalised to
          your condition, emotions, and needs.
        </BlogParagraphText>
      </BlogTextWrapper>
      <BlogImageWrapper>
        <StaticImage
          alt="weekly routine image"
          src="../../images/homePage/articlePage.png"
        />
      </BlogImageWrapper>
    </BlogContentWrapper>
  );
}
