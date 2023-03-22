import React, { useState } from "react";

import Facilities from "../facilities";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import {
  InternationalpatientsHeader,
  InternationalHeaderBgImage,
  InternationaltextContainer,
  InternationalBuddyContainer,
  AminitiesInternationalContainer,
  AminitiescardContainer,
  PatientscareContainer,
  InternationalHeaderContainerImage,
} from "./internationalPatientsStyles";
import { PrimaryLargeButton } from "../button";
import InternationalImageBg from "../../images/internationalPatients/headerBg-image.png";
import BuddySection from "../homePage/buddySection";
import MedicineImage from "../../images/internationalPatients/Medicine.png";
import NurseImage from "../../images/internationalPatients/Nursing.png";
import RelaxImage from "../../images/internationalPatients/Relaxing.png";
import AminitiesInternational from "./aminitiesInternational";
import PatientsCare from "./patientsCare";
import CheckList from "./checkList";
import Faq from "../faq";
import ArticleSection from "../articleSection";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import BookAppointmentModal from "../bookAppointmentModal";
import TouchForm from "../getInTouch/touchForm";

function InternationalPatientsComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [formSuccess, setformSuccess] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };
  const onOpenModal = () => {
    setOpenModal(true);
  };
  const cardData = [
    {
      path: MedicineImage,
      title: "Consult Best Doctors",
      label:
        "Management of the psychological as well as physical withdrawal symptoms under the supervision of a team consisting of a Psychiatrist, a Clinical Psychologist and an Art based Therapist.",
    },
    {
      path: NurseImage,
      title: "Our Mission",
      label:
        "Provide world-class psychiatric care, and mental health treatments with compassion, personalization, and sincerity",
    },
    {
      path: RelaxImage,
      title: "Experience Permium Facilities",
      label:
        "Management of the psychological as well as physical withdrawal symptoms under the supervision of a team consisting of a Psychiatrist, a Clinical Psychologist and an Art based Therapist.",
    },
  ];
  const buddyObj = {
    fromLocationPath: "international",
    cardHeight: "391px",
    innerHeight: "60%",
    subTitle: "Plan Your Trip",
    needBottomtext: false,
  };
  const aminitiesContent = [
    {
      desc: "Providing detailed medical opinion and video- consultation with our team of doctors before arrival.",
    },
    {
      desc: "Dedicated Relationship manager to take care of all you needs inside the hospital.",
    },
    {
      desc: "Assistance with Visa Services",
    },
    {
      desc: "International Concierge Desk available at the hospital will facilitate travel within the city as well as for local sight-seeing",
    },
    {
      desc: "International Concierge Desk at dedicated International lounge will help to arrange for a hotel/ guest house as per your preference",
    },
    {
      desc: "Dedicated Relationship manager to take care of all you needs inside the hospital.",
    },
  ];
  return (
    <main>
      <InternationalHeaderContainerImage>
        <InternationalHeaderBgImage src={InternationalImageBg} />
        <InternationalpatientsHeader>
          <InternationaltextContainer>
            <SecondaryHeaderTitle
              title="International patients"
              subTitle="Facilities for international patient"
            />
            <span>
              Sukoon's International Team will compassionately ensure that you
              and your loved ones medical journey is smooth, hassle free, and
              comfortable. We will hand hold you at every step to provide a
              world-class experience.
            </span>
          </InternationaltextContainer>
          <br />
          <PrimaryLargeButton
            name="Free virtual consultation"
            onClick={onOpenModal}
          />
        </InternationalpatientsHeader>
      </InternationalHeaderContainerImage>
      <InternationalBuddyContainer>
        <BuddySection
          otherData={buddyObj}
          dataArray={cardData}
          noBgImage={true}
          isInternationalPage={true}
        />
      </InternationalBuddyContainer>
      <AminitiesInternationalContainer>
        <SecondaryHeaderTitle
          title="Amenities for"
          subTitle="International Patients"
        />
        <span>
          Sukoon's International Team will compassionately ensure that you and
          your loved ones medical journey is smooth, hassle free, and
          comfortable. We will hand hold you at every step to provide a
          world-class experience.
        </span>
        <AminitiescardContainer>
          {aminitiesContent.map((x, index) => (
            <AminitiesInternational key={index} context={x.desc} />
          ))}
        </AminitiescardContainer>
      </AminitiesInternationalContainer>
      <PatientscareContainer>
        <PatientsCare />
        <CheckList />
      </PatientscareContainer>

      <SingleSectionWrapper>
        <SecondaryHeaderTitle
          title="Our Facilities"
          subTitle="Know about our facilities"
        />
        <Facilities />
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
      <SingleSectionWrapper margin="6rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
      <BookAppointmentModal
        open={openModal}
        onCloseModal={onCloseModal}
        title={!formSuccess ? "Free virtual consultation" : ""}
      >
        <TouchForm
          formSuccess={formSuccess}
          setformSuccess={setformSuccess}
          frompath="virtual-consultations"
        />
      </BookAppointmentModal>
    </main>
  );
}

export default InternationalPatientsComponent;
