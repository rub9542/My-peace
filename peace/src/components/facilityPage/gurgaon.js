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
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import ArticleSection from "../articleSection";
import ExperienceSection from "../experience";
import VideoSukoon from "../videoSukoon";

export default function GurgaonPageComponent() {
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
      name: "Clinical Programs",
      id: "clinicalPrograms",
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
      title: "Residential Services",
      nestedItem: [
        {
          name: "Acute Psychiatry Care",
        },
        {
          name: "Intensive Care Unit",
        },
        {
          name: "Sukoon at Home",
        },
        {
          name: "Geriatric Psychiatry",
        },
        {
          name: "Women Focused Care",
        },
        {
          name: "Chid Psychiatry",
        },
      ],
    },
    {
      title: "Rehabilitation Services",
      nestedItem: [
        {
          name: "Alcohol De-addiction",
        },
        {
          name: "Drug De-addiction",
        },
        {
          name: "Habit De-addiction",
        },
      ],
    },
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
      <FacilitiesHeaderCard />
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
      <SingleSectionWrapper margin="8rem 0">
        <VideoSukoon />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="clinicalPrograms" margin="5rem 0 0.2rem 0">
        <CheerSubscribe
          title="Explore Sukoon"
          image={CheerImage}
          type="cheer"
          subTitle="Clinical Program"
        />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="awards" margin="3rem 0">
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
