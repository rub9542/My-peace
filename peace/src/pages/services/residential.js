import * as React from "react";

import OtherLayout from "../../layouts/otherLayout";
import ServicesPageComponent from "../../components/services";

const ResidentialServices = () => {
  const isBrowser = typeof window !== "undefined";
  const service = isBrowser ? window.location.search.split("=")[1] : "";
  return (
    <OtherLayout>
      <ServicesPageComponent
        activeTab={0}
        activeService={service ? service : ""}
      />
    </OtherLayout>
  );
};

export default ResidentialServices;
export const Head = () => <title>Services || Residential Services</title>;
