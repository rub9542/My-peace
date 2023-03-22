import * as React from "react";

import OtherLayout from "../../layouts/otherLayout";
import ServicesPageComponent from "../../components/services";

const RehabilitationServices = () => {
  const isBrowser = typeof window !== "undefined";

  const service = isBrowser ? window.location.search.split("=")[1] : "";

  return (
    <OtherLayout>
      <ServicesPageComponent
        activeTab={1}
        activeService={service ? service : ""}
      />
    </OtherLayout>
  );
};

export default RehabilitationServices;
export const Head = () => <title>Services || Rehabilitation Services</title>;

