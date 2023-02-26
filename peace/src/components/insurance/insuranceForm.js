import React from "react";

import InsuranceStyles from "./insuranceStyle";
import TouchForm from "../getInTouch/touchForm";

function InsuranceForm() {
  return (
    <InsuranceStyles.InsuranceContactContainer>
      <TouchForm frompath="insurances" />
    </InsuranceStyles.InsuranceContactContainer>
  );
}

export default InsuranceForm;
