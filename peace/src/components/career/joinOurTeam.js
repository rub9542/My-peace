import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  CareerSectionParagraphText,
  CareerSectionTextWrapper,
  CareerSectionWrapper,
  CareerImageWrapper,
  SecondaryTitleWrapper,
} from "./careerStyle";

export default function JoinOurTeam() {
  return (
    <CareerSectionWrapper>
      <CareerSectionTextWrapper>
        <div>
          <SecondaryTitleWrapper>
            Join
            <br />
            <span>Our Team</span>
          </SecondaryTitleWrapper>
        </div>
        <CareerSectionParagraphText>
          Search our openings and apply for jobs that’ll surround you with great
          teammates to support your ideas, leaders who inspire career growth,
          and challenging work to push you to go the extra mile. Seize your day!
        </CareerSectionParagraphText>
      </CareerSectionTextWrapper>
      <CareerImageWrapper>
        <StaticImage
          alt="career image"
          src="../../images/career/careerImage.png"
        />
      </CareerImageWrapper>
    </CareerSectionWrapper>
  );
}
