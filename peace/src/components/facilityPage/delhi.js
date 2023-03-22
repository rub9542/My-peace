import React from "react";
import FacilitiesHeaderCard from "../../components/facilitiesHeaderCard";
import CommonFacilities from "./commonFacilities";

export default function DelhiPageComponent() {
  return (
    <main>
      <FacilitiesHeaderCard
        title="Delhi"
        subTitle="The heart of hindustan."
        description="Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people."
      />
      <CommonFacilities title="Delhi" />
    </main>
  );
}
