import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import InsuranceStyles from "./insuranceStyle";

import SecondaryHeaderTitle from "../secondaryHeaderTitle";

function InsuranceHeader() {
  return (
    <InsuranceStyles.InsuranceHeaderWrapper>
      <InsuranceStyles.InsuranceHeaderTextWrapper>
        <SecondaryHeaderTitle
          title="Insurances"
          subTitle="Find you way to insure"
        />
        <InsuranceStyles.InsuranceHeaderParagraphText>
          We’re here for you! At Sukoon, our experienced team provides
          compassionate, short-term and inpatient mental health services that
          help you feel better as quickly as possible. We work with you
          one-on-one ensuring that every part of your care is personalised to
          your condition, emotions, and needs.
        </InsuranceStyles.InsuranceHeaderParagraphText>
      </InsuranceStyles.InsuranceHeaderTextWrapper>
      <InsuranceStyles.InsuranceHeaderImageWrapper>
        <StaticImage
          alt="Inside sukoon take a tour"
          src="../../images/insurance/insure1.png"
        />
      </InsuranceStyles.InsuranceHeaderImageWrapper>
    </InsuranceStyles.InsuranceHeaderWrapper>
  );
}
export default InsuranceHeader;
