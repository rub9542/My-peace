import * as React from "react";
import RecoveryJourneyComponent from "../components/recoverJourney";

import OtherLayout from "../layouts/otherLayout";

const RecoveryJourney = () => {
  return (
    <OtherLayout>
      <RecoveryJourneyComponent />
    </OtherLayout>
  );
};

export default RecoveryJourney;

export const Head = () => <title>Recovery Journey Page</title>;
