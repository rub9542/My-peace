import React, { useState } from "react";
import Dropdown from "../dropdown";
import CareerCard from "../careerCard";

import ConsultImage from "../../images/homePage/consult.png";
import {
  ContentSectionWrapper,
  CareerSectionTextWrapper,
  SecondaryTitle,
  FilterLabel,
  FilterSection,
  CareerCardSectionWrapper,
  CareerCardInnerWrapper,
  SearchBlogWrapper,
  FilterSubSection,
} from "./careerStyle";
import { StaticImage } from "gatsby-plugin-image";

const CareerCardData = [
  {
    path: ConsultImage,
    title: "Sr. therapist",
    role: "Consultation",
    department: "Mental health",
    location: "Gurgaon",
    address: "Sector-56, Gurugram Haryana - 122011",
  },
  {
    path: ConsultImage,
    title: "Psychiatric doctors",
    role: "Consultation",
    department: "Mental health",
    location: "Gurgaon",
    address: "Sector-56, Gurugram Haryana - 122011",
  },
  {
    path: ConsultImage,
    title: "Health specialist",
    role: "Consultation",
    department: "Mental health",
    location: "Gurgaon",
    address: "Sector-56, Gurugram Haryana - 122011",
  },
  {
    path: ConsultImage,
    title: "Care taker",
    role: "Consultation",
    department: "Mental health",
    location: "Gurgaon",
    address: "Sector-56, Gurugram Haryana - 122011",
  },
  {
    path: ConsultImage,
    title: "Occupational therapist",
    role: "Consultation",
    department: "Mental health",
    location: "Gurgaon",
    address: "Sector-56, Gurugram Haryana - 122011",
  },
  {
    path: ConsultImage,
    title: "Jr. Psychiatry ",
    role: "Consultation",
    department: "Mental health",
    location: "Gurgaon",
    address: "Sector-56, Gurugram Haryana - 122011",
  },
];

export default function CareerContent() {
  const [filterShow, setFilterShow] = useState(false);

  const handleClick = () => {
    setFilterShow((show)=> !show);
  };

  return (
    <ContentSectionWrapper>
      <CareerSectionTextWrapper>
        <SecondaryTitle>
          Browse
          <br />
          <span>Open Positions</span>
        </SecondaryTitle>
      </CareerSectionTextWrapper>
      <SearchBlogWrapper onClick={handleClick}>
        <p>Search blogs</p>
        <StaticImage alt="menu icon" src="../../images/career/menuIcon.png" />
      </SearchBlogWrapper>
      <FilterSection filterShow={filterShow}>
        <div>
          <FilterLabel>Filter by location</FilterLabel>
          <Dropdown placeholder="Choose location" />
        </div>
        <div>
          <FilterLabel>Filter by department</FilterLabel>
          <Dropdown placeholder="Select department" />
        </div>
        <div>
          <FilterLabel>Filter by roletype</FilterLabel>
          <Dropdown placeholder="Select role" />
        </div>
      </FilterSection>

      <CareerCardSectionWrapper>
        <CareerCardInnerWrapper>
          {CareerCardData.map((careerData) => (
            <CareerCard key={careerData.title} CardTotalData={careerData} />
          ))}
        </CareerCardInnerWrapper>
      </CareerCardSectionWrapper>
    </ContentSectionWrapper>
  );
}
