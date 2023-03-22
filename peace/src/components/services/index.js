import React, { useState } from "react";

import Tabs from "../tabs";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import ArticleSection from "../articleSection";
import ServiceComponentData from "./ServiceComponentData";
import ServiceData from "./serviceData";

export default function ServicesPageComponent(props) {
  const { activeTab } = props;

  const [selectedTab] = useState(activeTab);
  const tabsArray = [
    {
      name: "Residential Services",
      id: "residential",
    },
    {
      name: "Rehabilitation Services",
      id: "rehabilitation",
    },
    {
      name: "Outpatient Services",
      id: "outPatient",
    },
  ];
  return (
    <main>
      <Tabs
        tabsArray={tabsArray}
        activeTab={activeTab}
        showButton={false}
        isService={true}
        customStyle={true}
      />

      <ServiceComponentData
        activeTab={selectedTab}
        activeService={props.activeService}
        serviceInfo={ServiceData[selectedTab]}
      />
      <SingleSectionWrapper margin="5rem 0 0.2rem 0">
        <CheerSubscribe
          title="Explore Sukoon"
          image={CheerImage}
          type="cheer"
          subTitle="Clinical Program"
        />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="6.5rem 0 5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
        />
      </SingleSectionWrapper>
      <Faq />
      <ArticleSection urlPath="articles" />
      <SingleSectionWrapper margin="4rem 0">
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
