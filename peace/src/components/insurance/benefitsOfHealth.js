import React from "react";
import InsuranceStyles from "./insuranceStyle";
import BenefitList from "./insuranceData";
function BenefitsOfHeath() {
  return (
    <InsuranceStyles.InsuranceWrapper>
      <InsuranceStyles.InsuranceTextWrapper>
        <InsuranceStyles.InsuranceBenefitsTitle>
          Benefits of Health Insurance{" "}
        </InsuranceStyles.InsuranceBenefitsTitle>
        <InsuranceStyles.InsuranceParagraphText>
          There are several benefits to investing in a health insurance plan
          next to understanding health insurance meaning. Following are the
          benefits of health insurance plans in India:
        </InsuranceStyles.InsuranceParagraphText>
        <InsuranceStyles.BenefitContainer>
          {BenefitList.map((item) => (
            <InsuranceStyles.BenefitContainerItem key={item}>
              {item}
            </InsuranceStyles.BenefitContainerItem>
          ))}
        </InsuranceStyles.BenefitContainer>
      </InsuranceStyles.InsuranceTextWrapper>
    </InsuranceStyles.InsuranceWrapper>
  );
}

export default BenefitsOfHeath;
