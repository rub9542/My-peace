import React from "react";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";

import {
  ExploreWeeklyContainer,
  ExploreWeeklyParagraphText,
  ExploreWeeklyTextWrapper,
  WeeklyImageWrapper,
} from "./weeklyRoutineStyle";
import WeeklyImage from "../../images/weeklyRoutine/weeklyroutine.png";

export default function ExploreWeeklyRoutine({
  title,
  subtitle,
  description,
  imgPath,
}) {
  return (
    <ExploreWeeklyContainer>
      <ExploreWeeklyTextWrapper>
        <SecondaryHeaderTitle
          title={title ? title : "Explore"}
          subTitle={subtitle ? subtitle : "Sukoon Weekly routine"}
        />

        <ExploreWeeklyParagraphText>
          {description
            ? description
            : `Sukoon's International Team will compassionately ensure that you and
          your loved ones medical journey is smooth, hassle free, and
          comfortable. We will hand hold you at every step to provide a
          world-class experience.`}
        </ExploreWeeklyParagraphText>
      </ExploreWeeklyTextWrapper>
      <WeeklyImageWrapper>
        <img src={imgPath ? imgPath : WeeklyImage} alt="weekly routine_image" />
      </WeeklyImageWrapper>
    </ExploreWeeklyContainer>
  );
}
