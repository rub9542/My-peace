import React from "react";
import InsuranceStyles from "./insuranceStyle";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import InsuranceForm from "./InsuranceForm";
import { StaticImage } from "gatsby-plugin-image";

function InsuranceContainer() {
  return (
    <InsuranceStyles.InsuranceContainer>
      <InsuranceStyles.InsuranceContactLeft>
        <SecondaryHeaderTitle
          title="Don't see your insurance listed?"
          subTitle="Talk to us"
        />
        <InsuranceStyles.InsuranceContactLeftImg>
        <div>
          <StaticImage
            alt="footer image"
            src="../../images/insurance/insure2.png"
          />
        </div>
      </InsuranceStyles.InsuranceContactLeftImg>
      </InsuranceStyles.InsuranceContactLeft>
      <InsuranceForm />
      <InsuranceStyles.InsuranceContactBgImage>
        <div>
          <StaticImage
            alt="footer image"
            src="../../images/faq/faqFooter.png"
          />
        </div>
      </InsuranceStyles.InsuranceContactBgImage>
    </InsuranceStyles.InsuranceContainer>
  );
}

export default InsuranceContainer;
