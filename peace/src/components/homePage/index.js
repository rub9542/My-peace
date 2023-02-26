import React from "react";

import Facilities from "../facilities";
import BuddySection from "./buddySection";
import QuoteSection from "./quoteSection";
import OurDoctors from "../ourDoctors";
import InsideSukoon from "../insideSukoon";
import WhatWeDoSection from "../whatWeDoSection";
import ArticleSection from "../articleSection";
import TestimonialSection from "../testimoialSection";
import Faq from "../faq";
import Card from "../staticComponent/card";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";

import PersonalisedImage from "../../images/homePage/personlaised.png";
import ConsultImage from "../../images/homePage/consult.png";
import PremiumImage from "../../images/homePage/premium.png";
import AnxietyImage from "../../images/homePage/anxiety.png";
import SadImage from "../../images/homePage/feeling.png";
import AddictionImage from "../../images/homePage/addiction.png";

export default function HomePage() {
  const whatWeDoData = [
    {
      path: ConsultImage,
      title: "Consult the best doctors",
      description:
        "Get expert advice from an experienced team of psychiatrists, clinical psychologists, counsellors, and art-based therapists that ensure holistic care to address your concerns. We take our doctor-patient confidentiality with utmost seriousness while guiding you towards better days.",
    },
    {
      path: PersonalisedImage,
      title: "Get personalized care 24*7",
      description:
        "Clinically governed by Dept. of Mental Health and Behavioral Sciences, Fortis Hospitals Ltd, Sukoon offers psychiatric, deaddiction, rehabilitation, and mental health treatments for both inpatients and outpatients. We are a one-of-a-kind healthcare provider for all your psychiatric and mental well-being needs.",
    },
    {
      path: PremiumImage,
      title: "Recover in premium facilities",
      description:
        "Enhance your recovery in a calming, positive, and comfortable world-class environment. With residential care tailor-made to your mental and psychological health, recovery and better days are just around the corner.",
    },
  ];
  const cardData = [
    {
      path: AddictionImage,
      label:
        "Do you go through the fear of losing yourself to your addictions?",
      title: "",
    },
    {
      path: SadImage,
      label:
        "Are you someone experiencing severe mental illness or stress issues?",
      title: "",
    },
    {
      path: AnxietyImage,
      label:
        "Have you been putting up your entire life with anxiety disorders or enduring lack of tranquility?",
      title: "",
    },
  ];
  return (
    <section>
      <QuoteSection />
      <SingleSectionWrapper>
        <BuddySection
          title={true}
          needBottomtext={true}
          otherData={{}}
          dataArray={cardData}
        />
      </SingleSectionWrapper>
      <WhatWeDoSection dataArray={whatWeDoData} fromPath="home" />
      <SingleSectionWrapper margin="6rem 0">
        <Card
          title="Accreditation"
          subTitle="We’ve been officially recognized by"
          type="image"
        />
      </SingleSectionWrapper>
      <SingleSectionWrapper>
        <SecondaryHeaderTitle
          title="Our Facilities"
          subTitle="Know about our facilities"
        />
        <Facilities />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="6.5rem 0 0.2rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
        />
      </SingleSectionWrapper>
      <InsideSukoon />
      <TestimonialSection />
      <SingleSectionWrapper margin="0 0 0 1.5rem">
        <OurDoctors />
      </SingleSectionWrapper>
      <Faq />
      <ArticleSection showIcons={true} urlPath="media" />
      <SingleSectionWrapper margin="6rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </section>
  );
}
