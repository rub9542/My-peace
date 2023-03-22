import * as React from "react";

import OtherLayout from "../layouts/otherLayout";
import InternationalPatientsComponent from "../components/internationalPatients";
function Internationalpatients() {
  return (
    <OtherLayout>
      <InternationalPatientsComponent />
    </OtherLayout>
  );
}

export default Internationalpatients;
export const Head = () => <title>Sukoon || International Patients</title>;
