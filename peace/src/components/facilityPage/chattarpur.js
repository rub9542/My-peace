import React from "react";
import FacilitiesHeaderCard from "../../components/facilitiesHeaderCard";
import CommonFacilities from "./commonFacilities";

export default function ChhatarpurPageComponent() {
  return (
    <main>
      <FacilitiesHeaderCard
        title="Chhatarpur"
        subTitle="The king's place."
        description="Being a sub-locality of Chhatarpur in South Delhi, Chhatarpur Enclave enjoys excellent real estate demand owing to its superior connectivity to the employment hubs of Mehrauli-Gurgaon Road and Saket. Chhattarpur Enclave is bounded by various localities of Maidan Garhi, Tyagi Mohalla, Rajpur, "
      />
      <CommonFacilities title="Chhatarpur" />
    </main>
  );
}
