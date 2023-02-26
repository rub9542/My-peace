import React from "react";
import FaqAccordion from "./faqAccordion";
import FaqContent from "./faqContent";

import { FaqContainer, FaqContentMain, FaqMainSection } from "./faqStyle";

function Faq() {
  return (
      <FaqContainer>
          <FaqMainSection>
            <FaqContentMain>
              <FaqContent />
            </FaqContentMain>
            <FaqAccordion />
          </FaqMainSection>
      </FaqContainer>
  );
}

export default Faq;
