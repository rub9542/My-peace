import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { FaqFooter, FaqContentDiv,FaqImageWrapper } from "./faqStyle";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";

function FaqContent() {
  return (
    <>
      <FaqContentDiv>
        <SecondaryHeaderTitle title="Frequently asked questions"
          subTitle="See what others asked" />
        <FaqImageWrapper>
          <StaticImage
            alt="psychologist amico"
            src="../../images/faq/psychologist.png"
          />
        </FaqImageWrapper>
      </FaqContentDiv>

      <FaqFooter>
        <div>
          <StaticImage
            alt="footer image"
            src="../../images/faq/faqFooter.png"
          />
        </div>
      </FaqFooter>
    </>
  );
}

export default FaqContent;
