import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  ExploreWeeklyContainer,
  ExploreWeeklyParagraphText,
  ExploreWeeklyTextWrapper,
  HeaderTextWrapper,
  MainImageWrapper,
} from "./recoveryStyle";

export default function ExploreRecoveryJourney() {
  return (
    <ExploreWeeklyContainer>
      <ExploreWeeklyTextWrapper>
        <HeaderTextWrapper>
          Explore
          <br />
          <span>Our Clinical Program</span>
        </HeaderTextWrapper>

        <ExploreWeeklyParagraphText>
          Sukoon's International Team will compassionately ensure that you and
          your loved ones medical journey is smooth, hassle free, and
          comfortable. We will hand hold you at every step to provide a
          world-class experience.
        </ExploreWeeklyParagraphText>
      </ExploreWeeklyTextWrapper>
      <MainImageWrapper>
        <StaticImage
          alt="recovery image"
          src="../../images/recoveryJourney/recoveryLogo.png"
        />
      </MainImageWrapper>
    </ExploreWeeklyContainer>
  );
}
