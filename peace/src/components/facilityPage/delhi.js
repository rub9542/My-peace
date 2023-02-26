import React from "react";

import FacilitiesHeaderCard from "../../components/facilitiesHeaderCard";
import FacilitiesService from "../../components/facilitiesServices";
import AwardSection from "../facilities/awardSection";
import Tabs from "../tabs";
import DelhiChattarpurOtp from "../opdSection/";
import OurDoctors from "../ourDoctors";
import TestimonialSection from "../testimoialSection";
import {
  SingleSectionWrapper,
  TabsSectionWrapper,
} from "../../styles/homePageStyle";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import ArticleSection from "../articleSection";
import ExperienceSection from "../experience";
import VideoSukoon from "../videoSukoon";
import CheerImage from "../../images/cheerup/Cheer-group.png";

export default function DelhiPageComponent() {
  const tabsArray = [
    {
      name: "Experience",
      id: "experience",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "OPD",
      id: "opd",
    },
    {
      name: "Doctors",
      id: "doctors",
    },
    {
      name: "Awards",
      id: "awards",
    },
  ];
  const facilitieslist = [
    {
      title: "Outpatient Services",
      nestedItem: [
        {
          name: "Clinical Psychology",
        },
        {
          name: "Counselling Psychology",
        },
        {
          name: "Art-Based Therapy",
        },
        {
          name: "RTMS Treatment",
        },
        {
          name: "Remediation",
        },
        {
          name: "Psychoanalytical Therapy",
        },
        {
          name: "Occupational Therapy",
        },
        {
          name: "Psychiatry",
        },
        {
          name: "Psycho - Oncology",
        },
      ],
    },
  ];

  return (
    <main>
      <FacilitiesHeaderCard
        title="Delhi"
        subTitle="The heart of hindustan."
        description="Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people."
      />
      <TabsSectionWrapper>
        <Tabs tabsArray={tabsArray} showButton={true} />
      </TabsSectionWrapper>
      <SingleSectionWrapper id="experience" margin="0">
        <ExperienceSection />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="services" margin="5rem 0 0 0">
        <FacilitiesService facilitieslist={facilitieslist} />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="opd" margin="0">
        <DelhiChattarpurOtp />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="clinicalPrograms" margin="8rem 0">
        <VideoSukoon />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="awards" margin=" 0 0 3rem 0">
        <AwardSection />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="doctors" margin="0 0 0 2rem">
        <OurDoctors />
      </SingleSectionWrapper>
      <TestimonialSection />
      <SingleSectionWrapper margin="6.5rem 0 5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
        />
      </SingleSectionWrapper>
      <SingleSectionWrapper >
        <Faq />
      </SingleSectionWrapper>
      <SingleSectionWrapper>
        <Faq />
      </SingleSectionWrapper>
      <ArticleSection urlPath="media"/>
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
