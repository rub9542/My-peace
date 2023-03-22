import React, { useState } from "react";

import { SingleSectionWrapper } from "../../styles/homePageStyle";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import ArticleSection from "../articleSection";
import ExploreRecoveryJourney from "./exploreClinical";
import RecoveryComponent from "./recovery";
import { TabsSection, SingleTab, DownloadSection } from "./recoveryStyle";
import YogaContent from "../weeklyRoutine/yogaContent";
import { DefaultButton } from "../button";

const tabsArray = [
  {
    name: "Recovery Journey",
    id: "recoveryJourney",
  },
  {
    name: "Daily Routine",
    id: "dailyRoutine",
  },
];

export default function RecoveryJourneyComponent() {
  const [activeTab, setActiveTab] = useState(tabsArray[0]);

  const onChangeTab = (obj) => {
    setActiveTab(obj);
  };

  return (
    <div>
      <ExploreRecoveryJourney />
      <TabsSection>
        {tabsArray.map((tab) => (
          <SingleTab
            active={activeTab && activeTab.name === tab.name}
            onClick={() => onChangeTab(tab)}
            key={tab.name}
          >
            {tab.name}
          </SingleTab>
        ))}
      </TabsSection>
      {activeTab.name === "Recovery Journey" ? (
        <RecoveryComponent />
      ) : (
        <YogaContent />
      )}
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
