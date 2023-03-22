import * as React from "react";
import PrivacyPolicyComponent from "../components/privacyPolicy";

import OtherLayout from "../layouts/otherLayout";
function PrivacyPolicy() {
  return (
    <OtherLayout>
      <PrivacyPolicyComponent />
    </OtherLayout>
  );
}

export default PrivacyPolicy;
export const Head = () => <title>Sukoon || Privacy Policy</title>;
