import React from "react";
import FacilitiesHeaderCard from "../../components/facilitiesHeaderCard";
import CommonFacilities from "./commonFacilities";

export default function GurgaonPageComponent() {
  return (
    <main>
      <FacilitiesHeaderCard
        title="Gurgaon"
        subTitle="Truer to the nature of the beast."
        description=" Gurgaon is a town in Assam, India and was the capital of the Ahom kingdom for many years. It was built by the Ahom king Suklenmung in 1540. It is said that the capital was built at the suggestion of MongKwang princess Nang Sao Seng from present-day Myanmar who was married to Suklenmung."
      />
      <CommonFacilities title="Gurgaon" />
    </main>
  );
}
