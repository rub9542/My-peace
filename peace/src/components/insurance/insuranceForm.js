import React, { useState } from "react";

import InsuranceStyles from "./insuranceStyle";
import TouchForm from "../getInTouch/touchForm";

function InsuranceForm() {
  const [formSuccess, setformSuccess] = useState(false);

  return (
    <InsuranceStyles.InsuranceContactContainer>
      <TouchForm
        formSuccess={formSuccess}
        setformSuccess={setformSuccess}
        frompath="insurances"
      />
    </InsuranceStyles.InsuranceContactContainer>
  );
}

export default InsuranceForm;
