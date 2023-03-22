import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  DetailAccordionButton,
  DetailAccordionItemPanel,
  DetailAccordionSection,
  DetailAccordionWrapper,
  FaqinvisibleLine,
} from "./faqDetailStyle";
import { Markup } from "interweave";

function FaqDetailAccordion({ dataArray }) {
  const accordionButton = {
    display: "flex",
    backgroundColor: "#fff",
    width: "auto",
    padding: "30px 18px",
    lineHeight: "22px",
  };

  return (
    <>
      <DetailAccordionWrapper>
        <DetailAccordionSection>
          <Accordion allowZeroExpanded={true} allowMultipleExpanded={false}>
            {dataArray.length > 0 &&
              dataArray.map((x, index) => (
                <div key={index}>
                  <AccordionItem uuid={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton style={accordionButton}>
                        <DetailAccordionButton>
                          <p> {x?.attributes?.title}</p>
                        </DetailAccordionButton>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <DetailAccordionItemPanel>
                      <Markup content={x?.attributes?.answer} />
                      <FaqinvisibleLine />
                    </DetailAccordionItemPanel>
                  </AccordionItem>
                </div>
              ))}
          </Accordion>
        </DetailAccordionSection>
      </DetailAccordionWrapper>
    </>
  );
}

export default FaqDetailAccordion;
