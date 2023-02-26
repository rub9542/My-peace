import React, { useState } from "react";

import FaclityPageTextCard from "../textCard";
import {
  ExperienceSectionWrapper,
  DotsWrapper,
  SliderArrowsDotsSection,
  SliderCustomArrows,
  SliderSingleArrow,
} from "./experienceSectionStyle";
import CustomModal from "../customModal";
import OtherModallContent from "./otherExperienceSection";
import RoomSection from "./roomSection";
import { DotItem } from "../testimoialSection/testimonialSectionStyle";

const textCard = {
  title: "Experience Sukoon",
  description:
    "Gurgaon is a town in Assam, India and was the capital of the Ahom kingdom for many years. It was built by the Ahom king Suklenmung in 1540. It is said that the capital was built at the suggestion of MongKwang princess Nang Sao Seng from present-day Myanmar who was married to Suklenmung.",
};

export default function ExperienceSection() {
  const [activeSection, setActiveSection] = useState(0);

  const experienceData = [
    {
      name: "Rooms",
      id: "rooms",
      component: <RoomSection />,
    },
    {
      name: "Resident Lounges",
      id: "resident_lounges",
      component: <OtherModallContent title="Resident Lounges" />,
    },
    {
      name: "Nursing Stations",
      id: "nursing_stations",
      component: <OtherModallContent title="Nursing Stations" />,
    },
    {
      name: "Fitness Studio",
      id: "fitness_studio",
      component: <OtherModallContent title="Fitness Studio" />,
    },
    {
      name: "Terrace Garden",
      id: "terrace_garden",
      component: <OtherModallContent title="Terrace Garden" />,
    },
    {
      name: "Dining",
      id: "dining",
      component: <OtherModallContent title="Dining" />,
    },
    {
      name: "Spa",
      id: "spa",
      component: <OtherModallContent title="Spa" />,
    },
  ];

  const onChangeIndex = (index) => {
    const currentIndex =
      index === -1
        ? experienceData.length - 1
        : index === experienceData.length
        ? 0
        : index;
    setActiveSection(currentIndex);
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    return (
      <SliderArrowsDotsSection>
        <SliderCustomArrows>
          <SliderSingleArrow
            onClick={() => onChangeIndex(activeSection - 1)}
            initialCount={activeSection === 0 ? true : false}
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1L2 8.34426L10 15"
                stroke={activeSection === 0 ? "#00000054" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </SliderSingleArrow>
          <SliderSingleArrow
            onClick={() => onChangeIndex(activeSection + 1)}
            initialCount={
              activeSection === experienceData.length -1 ? true : false
            }
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 8.34426L1 15"
                stroke={
                  activeSection === experienceData.length -1
                    ? "#00000054"
                    : "black"
                }
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </SliderSingleArrow>
        </SliderCustomArrows>
      </SliderArrowsDotsSection>
    );
  };

  return (
    <ExperienceSectionWrapper>
      <FaclityPageTextCard
        title={textCard.title}
        description={textCard.description}
      />
      <CustomModal
        onPrev={() => onChangeIndex(activeSection - 1)}
        onNext={() => onChangeIndex(activeSection + 1)}
      >
        {activeSection !== undefined
          ? experienceData[activeSection].component
          : ""}
      </CustomModal>

      <ButtonGroup />
      <DotsWrapper>
        <div>
          {experienceData.map((data, index) => (
            <DotItem
              onClick={() => onChangeIndex(index)}
              key={data.id}
              active={index === activeSection}
            />
          ))}
        </div>
      </DotsWrapper>
    </ExperienceSectionWrapper>
  );
}
