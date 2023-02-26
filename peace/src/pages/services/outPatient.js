import * as React from "react";
// import { useParams } from 'react-router-dom';
import OtherLayout from "../../layouts/otherLayout";
import ServicesPageComponent from "../../components/services";

const OutPatientServices = () => {
  const isBrowser = typeof window !== "undefined";
  const service = isBrowser ? window.location.search.split("=")[1] : "";
  return (
    <OtherLayout>
      <ServicesPageComponent
        activeTab={2}
        activeService={service ? service : ""}
      />
    </OtherLayout>
  );
};

export default OutPatientServices;
