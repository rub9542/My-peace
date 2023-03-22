import React from "react";

import { HeaderText, DownloadSection } from "./weeklyRoutineStyle";
import { DefaultButton } from "../button";
import ExploreWeeklyRoutine from "./explore";
import YogaContent from "./yogaContent";
import CalendarSection from "../calendarView";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import ArticleSection from "../articleSection";

export default function WeeklyRoutineComponent() {
  return (
    <div>
      <ExploreWeeklyRoutine />
      <CalendarSection />
      <HeaderText>Weekly Routine</HeaderText>
      <YogaContent />
      <DownloadSection>
        <div>
          <DefaultButton name="Download PDF" />
        </div>
      </DownloadSection>
      <Faq />
      <ArticleSection urlPath="articles"/>
      <SingleSectionWrapper margin="5rem 0">
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
