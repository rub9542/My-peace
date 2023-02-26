import React from "react";

import {
  PatientsCard,
  PatientsTextWrapper,
  PatientsTextTitle,
  PatientsTextSubTitle,
  PatientsTextDescription,
} from "./internationalPatientsStyles";
function PatientsCare() {
  return (
    <PatientsCard>
      <PatientsTextWrapper>
        <div>
          <PatientsTextTitle>Patient Care</PatientsTextTitle>
          <PatientsTextSubTitle>
            Safest Place for your loved ones to stay
          </PatientsTextSubTitle>
          <PatientsTextDescription>
            We have carefully hand picked trusted guest houses and hotel
            partners for your loved ones while you recover. Choose from numerous
            safe, convenient, and affordable options depending on your needs.
          </PatientsTextDescription>
        </div>
      </PatientsTextWrapper>
    </PatientsCard>
  );
}

export default PatientsCare;
