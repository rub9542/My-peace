import React from "react";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import Faq from "../faq";
import QuoteSection from "./quoteSection";
import BenefitsOfHeath from "./benefitsOfHealth";
import InsuranceHeader from "./insusranceHeader";
import InsuranceContainer from "./insuranceContact";
function InsuranceComponent() {
  return (
    <div>
      <InsuranceHeader />
      <QuoteSection />
      <BenefitsOfHeath />
      <SingleSectionWrapper margin="6.5rem 0 5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an Appointment now"
        />
      </SingleSectionWrapper>
      <InsuranceContainer />
      <Faq />
      <SingleSectionWrapper margin="5rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </div>
  );
}
export default InsuranceComponent;
