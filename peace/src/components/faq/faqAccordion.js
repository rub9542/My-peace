import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  FaqAccordionSection,
  StyledAccordionItemPanel,
  ViewMoreSection,
  AccordionWrapper,
} from "./faqStyle";
import { PrimaryLargeButton } from "../button";
import { Link } from "gatsby-link";
import { Markup } from "interweave";

function FaqAccordion({ dataArray }) {
  const accordionButton = {
    display: "flex",
    backgroundColor: "#fff",
    width: "auto",
    padding: "16px 0px",
    lineHeight: "22px",
  };

  return (
    <>
      <AccordionWrapper>
        <FaqAccordionSection>
          <Accordion allowZeroExpanded={true} allowMultipleExpanded={false}>
            {dataArray?.length > 0 &&
              dataArray.map((x, index) => (
                <div key={index}>
                  <AccordionItem uuid={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton style={accordionButton}>
                        {x?.attributes?.title}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <StyledAccordionItemPanel>
                      {/* <p> */}
                        <Markup content={x?.attributes?.answer} />
                      {/* </p> */}
                    </StyledAccordionItemPanel>
                  </AccordionItem>
                </div>
              ))}
          </Accordion>
        </FaqAccordionSection>
        <ViewMoreSection>
          <div>
            <Link to="/faqDetail">
              <PrimaryLargeButton name="View more" />
            </Link>
          </div>
        </ViewMoreSection>
      </AccordionWrapper>
    </>
  );
}

export default FaqAccordion;
