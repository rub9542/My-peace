import * as React from "react";

import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import {
  AboutUSWrapper,
  AboutUstextContainer,
  AboutUSHeaderBgImage,
  AboutUsmainContainer,
  VisionMissionWrapper,
  AboutUstabWrapper,
  AboutUsDoctorContainer,
  AboutUsFacilitiesContainer,
  AboutUsFacilitiestabContainer,
  MapsWrapper,
} from "./aboutUSStyles";
import WhatWeDoSection from "../whatWeDoSection";
import AboutUSBackGround from "../../images/aboutus/aboutus-Bg.png";
import InsideSukoon from "../insideSukoon";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import ArticleSection from "../articleSection";
import Faq from "../faq";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Tabs from "../tabs";
import { DoctorCardsWrapper } from "../ourDoctors/ourDoctorsStyle";
import DoctorCard from "../doctorCard";
import Varsha from "../../images/doctors/varsha.png";
import Shukla from "../../images/doctors/shukla.png";
import Sharin from "../../images/doctors/sharin.png";
import Neha from "../../images/doctors/neha.png";
import MapComponent from "../../components/maps";

import Light from "../../images/visionMission/light.png";
import Steps from "../../images/visionMission/steps.png";

function index() {
  const tabsArray = [
    {
      name: "Management team",
      id: "managementteam",
    },
    {
      name: "Clinical advisory board",
      id: "clinicaladvisoryboard",
    },
  ];

  const doctorsData = [
    {
      path: Varsha,
      name: "Varsha Punarvasu",
      title: "MD (Psychiatry)",
      position: "Sr. Consultant Psychiatrist",
    },
    {
      path: Shukla,
      name: "Ms. Akshita Shukla",
      title: "MD (Psychiatry)",
      position: "Sr. Consultant Psychiatrist",
    },
    {
      path: Sharin,
      name: "Ms. Kamna Sarin",
      title: "MD (Psychiatry)",
      position: "Sr. Consultant Psychiatrist",
    },
    {
      path: Neha,
      name: "Ms Neha Rao",
      title: "MD (Psychiatry)",
      position: "Sr. Consultant Psychiatrist",
    },
  ];

  const StateArray = [
    {
      name: "Delhi",
      id: "Delhi",
    },
    {
      name: "Gurgaon",
      id: "Gurgaon",
    },
    {
      name: "Chhatarpur",
      id: "Chhatarpur",
    },
  ];
  const visionArray = [
    {
      path: Light,
      title: "Our Vision",
      description:
        "Provide world-class psychiatric care, and mental health treatments with compassion, personalisation, and sincerity",
    },
    {
      path: Steps,
      title: "Our Mission",
      description:
        "Provide world-class psychiatric care, and mental health treatments with compassion, personalisation, and sincerity",
    },
  ];
  return (
    <main>
      <AboutUsmainContainer>
        <AboutUSHeaderBgImage src={AboutUSBackGround} />
        <AboutUSWrapper>
          <AboutUstextContainer>
            <SecondaryHeaderTitle title="About us" subTitle="What we do" />
            <span>
              Sukoon is India’s first super specialty hospital that offers both
              inpatient and outpatient treatments for psychiatry, mental health,
              and deaddiction. We have a team of experienced psychiatrists,
              clinical psychologists, counsellors, and art-based therapists that
              ensures you receive personalised care. Our treatments are designed
              keeping in mind your condition, emotions, and needs. At Sukoon, we
              want to make you feel like yourself again as quickly as possible.
              We ensure this through world-class treatments, premium facilities,
              modern amenities, and above all compassionate caregivers.
            </span>
          </AboutUstextContainer>
        </AboutUSWrapper>
      </AboutUsmainContainer>
      <VisionMissionWrapper>
        <WhatWeDoSection
          titleProp="Vision and mission"
          fromPath="vision"
          dataArray={visionArray}
          noBackImage={true}
          paddingStyle={true}
        />
      </VisionMissionWrapper>
      <InsideSukoon
        responsivePadding="0 2rem 2rem 2rem"
        titleProp=" "
        subTitleProp="Chief Medical Officer Message"
        descProp="Sukoon is India’s first super specialty hospital that offers both inpatient and outpatient treatments for psychiatry, mental health, and deaddiction. We have a team of experienced psychiatrists, clinical psychologists, counsellors, and art-based therapists that ensures you receive personalised care."
      />
      <AboutUstabWrapper>
        <Tabs
          tabsArray={tabsArray}
          showButton={false}
          fullWidth={true}
          customStyle={true}
        />
      </AboutUstabWrapper>
      <AboutUsDoctorContainer>
        <DoctorCardsWrapper>
          {doctorsData.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.name} />
          ))}
        </DoctorCardsWrapper>
      </AboutUsDoctorContainer>
      <AboutUsFacilitiesContainer>
        <SecondaryHeaderTitle
          title="Our Facilities"
          subTitle="See where they are"
        />
        <AboutUsFacilitiestabContainer>
          <Tabs
            tabsArray={StateArray}
            showButton={false}
            customStyle={true}
            fullWidth={true}
          />
        </AboutUsFacilitiestabContainer>
        <MapsWrapper>
          <MapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `508px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </MapsWrapper>
      </AboutUsFacilitiesContainer>

      <SingleSectionWrapper margin="6.5rem 0 5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
        />
      </SingleSectionWrapper>
      <ArticleSection
        titleProp="Media"
        subtitleProp="Our recent announcements"
        showIcons={true}
        urlPath="media"
      />
      <Faq />
      <ArticleSection showIcons={true} urlPath="articles" />
      <SingleSectionWrapper margin="6rem 0">
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

export default index;
