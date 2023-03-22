import React, { useEffect, useState } from "react";
import {
  SingleSectionWrapper,
  TabsSectionWrapper,
} from "../../styles/homePageStyle";
import FacilitiesService from "../facilitiesServices";
import ExperienceSection from "../experience";
import DelhiChattarpurOtp from "../opdSection";
import VideoSukoon from "../videoSukoon";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import AwardSection from "../facilities/awardSection";
import OurDoctors from "../ourDoctors";
import Faq from "../faq";
import TestimonialSection from "../testimoialSection";
import ArticleSection from "../articleSection";
import ExploreSection from "../exploreSukoon";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Tabs from "../tabs";

const commonArray = [
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

const gurgaonArray = [
  {
    name: "Clinical Programs",
    id: "clinicalPrograms",
  },
];
const chhatarpurArray = [
  {
    name: "Weekly Routine",
    id: "weeklyRoutine",
  },
];
const commonFacilities = [
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

const gurgaonChhatarpurFacilities = [
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
];

export default function CommonFacilities({ title }) {
  const [tabsMainArray, setTabsMainArray] = useState([]);
  const [variableFacilities, setVariableFacilities] = useState([]);

  const MainTabData = () => {
    if (title === "Gurgaon") {
      setTabsMainArray([...commonArray, ...gurgaonArray]);
      setVariableFacilities([
        ...gurgaonChhatarpurFacilities,
        ...commonFacilities,
      ]);
    } else if (title === "Chhatarpur") {
      setTabsMainArray([...commonArray, ...chhatarpurArray]);
      setVariableFacilities([
        ...gurgaonChhatarpurFacilities,
        ...commonFacilities,
      ]);
    } else {
      setTabsMainArray(commonArray);
      setVariableFacilities(commonFacilities);
    }
  };
  useEffect(() => {
    MainTabData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TabsSectionWrapper>
        <Tabs tabsArray={tabsMainArray} showButton={true} />
      </TabsSectionWrapper>
      <SingleSectionWrapper id="experience" margin="0">
        <ExperienceSection />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="services" margin="5rem 0 0 0">
        <FacilitiesService facilitieslist={variableFacilities} />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="opd" margin="0">
        <DelhiChattarpurOtp />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="8rem 0">
        <VideoSukoon />
      </SingleSectionWrapper>
      {title === "Gurgaon" ? (
        <SingleSectionWrapper id="clinicalPrograms" margin="5rem 0 0.2rem 0">
          <CheerSubscribe
            title="Explore Sukoon"
            image={CheerImage}
            type="cheer"
            subTitle="Clinical Program"
          />
        </SingleSectionWrapper>
      ) : null}
      {title === "Chhatarpur" ? (
        <SingleSectionWrapper id="weeklyRoutine" margin="2rem 0">
          <ExploreSection />
        </SingleSectionWrapper>
      ) : null}
      <SingleSectionWrapper id="awards" margin="3rem 0">
        <AwardSection />
      </SingleSectionWrapper>
      <SingleSectionWrapper id="doctors" margin="0 0 0 2rem">
        <OurDoctors displayButton={true} />
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
      <SingleSectionWrapper>
        <Faq />
      </SingleSectionWrapper>
      <ArticleSection urlPath="articles" />
      <SingleSectionWrapper margin="4rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </>
  );
}
