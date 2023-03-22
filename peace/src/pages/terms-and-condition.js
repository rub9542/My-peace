import * as React from "react";
import TermsAndConditionsComponent from "../components/termsAndCondition";

import OtherLayout from "../layouts/otherLayout";
function TermsAndConditions() {
  return (
    <OtherLayout>
      <TermsAndConditionsComponent />
    </OtherLayout>
  );
}

export default TermsAndConditions;
export const Head = () => <title>Sukoon || Terms and Conditions</title>;
