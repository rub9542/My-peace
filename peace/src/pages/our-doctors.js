import * as React from "react";
import DoctorsComponent from "../components/doctors";

import OtherLayout from "../layouts/otherLayout";
function TermsAndConditions() {
  return (
    <OtherLayout>
        <DoctorsComponent/>
    </OtherLayout>
  );
}

export default TermsAndConditions;
export const Head = () => <title>Sukoon || Our Doctors</title>;
