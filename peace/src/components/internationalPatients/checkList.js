import React from "react";

import {
  CheckListWrapper,
  CheckListContainer,
  ChecklistTitle,
  CheckListPoints,
  CheckListPointsWrapper,
} from "./internationalPatientsStyles";
import PointsImg from "../../images/patientsCare/points.png";
function CheckList() {
  const checkArry = [
    {
      title: "Process",
      list: [
        {
          points: "General Enquiry",
        },
        {
          points: "Medical opinion by psychiatrist",
        },
        {
          points: "Visa assistance",
        },
        {
          points: "Booking, Arrival",
        },
        {
          points: "Consultation with doctors",
        },
        {
          points: "Treatment",
        },
        {
          points: "Sight seeing if medically allowed",
        },
        {
          points: "Follow-up via video appointments",
        },
      ],
    },
    {
      title: "Checklist",
      list: [
        {
          points: "Quotation provided by Sukoon",
        },
        {
          points: "Treatment plan provided by Sukoon",
        },
        {
          points: "Photographs (passport size)",
        },
      ],
    },
    {
      title: "Document needed",
      list: [
        {
          points: "Old Medical Reports",
        },
        {
          points: "Visa",
        },
        {
          points: "Passport",
        },
      ],
    },
  ];
  return (
    <CheckListWrapper>
      {checkArry.map((x) => (
        <CheckListContainer key={x.title}>
          <ChecklistTitle>{x.title}</ChecklistTitle>
          <CheckListPointsWrapper>
            {x.list.map((y) => (
              <CheckListPoints key={y.points}>
                <img src={PointsImg} alt="internationalImages"/>
                <span>{y.points}</span>
              </CheckListPoints>
            ))}
          </CheckListPointsWrapper>
        </CheckListContainer>
      ))}
    </CheckListWrapper>
  );
}

export default CheckList;
