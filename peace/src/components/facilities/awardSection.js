import React from "react";

import AwardCard from "../facilitiesAwardCard";
import ClutchImage from "../../images/facilities/clutch.png";
import DesignRush from "../../images/facilities/designrush.png";
import Expertise from "../../images/facilities/expertise.png";
import BgImage from "../../images/facilities/awardsbg.png";

import FacilitiesStyle from "./facilitiesStyle";
import FaclityPageTextCard from "../textCard";

const cardData = [
  {
    path: ClutchImage,
    heading: "Best Doctors",
    label:
      "Management of the psychological as well as physical withdrawal symptoms under the supervision of a team consisting of a Psychiatrist, a Clinical Psychologist and an Art based Therapist.",
  },
  {
    path: Expertise,
    heading: "Personalised Care",
    label:
      "Management of the psychological as well as physical withdrawal symptoms under the supervision of a team consisting of a Psychiatrist, a Clinical Psychologist and an Art based Therapist.",
  },
  {
    path: DesignRush,
    heading: "Permium Facilities",
    label:
      "Management of the psychological as well as physical withdrawal symptoms under the supervision of a team consisting of a Psychiatrist, a Clinical Psychologist and an Art based Therapist.",
  },
];

const textCard = [
  {
    title: "Awards",
    description:
      "Gurgaon is a town in Assam, India and was the capital of the Ahom kingdom for many years. It was built by the Ahom king Suklenmung in 1540. It is said that the capital was built at the suggestion of MongKwang princess Nang Sao Seng from present-day Myanmar who was married to Suklenmung.",
  },
];

function AwardSection() {
  return (
    <FacilitiesStyle.AwardSectionWrapper>
        {textCard.map((textData, index) => (
          <FaclityPageTextCard
            key={textData.title + index}
            title={textData.title}
            description={textData.description}
          />
        ))}
      <FacilitiesStyle.AwardSectionImageWrapper>
        {cardData.map((card, index) => (
          <AwardCard
            key={card.label + index}
            heading={card.heading}
            src={card.path}
            label={card.label}
          />
        ))}
      </FacilitiesStyle.AwardSectionImageWrapper>
      <FacilitiesStyle.AwardSectionBgImage
        src={BgImage}
        alt="background image"
      />
    </FacilitiesStyle.AwardSectionWrapper>
  );
}

export default AwardSection;
