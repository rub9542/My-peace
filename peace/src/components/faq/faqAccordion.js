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

function FaqAccordion() {
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
          <Accordion allowZeroExpanded={true}>
            <div>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    What is mental illnes
                  </AccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <p>
                    Mental illness is a group of biological brain disorders that
                    affect a person’s thinking, mood, emotions, sense of
                    reality, ability to relate and daily functioning.
                  </p>
                </StyledAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    Will I be allowed to have visitors during my treatment?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <p>
                    Mental illness is a group of biological brain disorders that
                    affect a person’s thinking, mood, emotions, sense of
                    reality, ability to relate and daily functioning.
                  </p>
                </StyledAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    What happens if I am admitted?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <p>
                    Mental illness is a group of biological brain disorders that
                    affect a person’s thinking, mood, emotions, sense of
                    reality, ability to relate and daily functioning.
                  </p>
                </StyledAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    Do I need to bring my documents or records?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <p>
                    Mental illness is a group of biological brain disorders that
                    affect a person’s thinking, mood, emotions, sense of
                    reality, ability to relate and daily functioning.
                  </p>
                </StyledAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    So how do we start the process?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <p>
                    Mental illness is a group of biological brain disorders that
                    affect a person’s thinking, mood, emotions, sense of
                    reality, ability to relate and daily functioning.
                  </p>
                </StyledAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    Can I pay online for my reservation?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <p>
                    Mental illness is a group of biological brain disorders that
                    affect a person’s thinking, mood, emotions, sense of
                    reality, ability to relate and daily functioning.
                  </p>
                </StyledAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    How much experience does your healthcare facilities have
                    <br />
                    treating international patients?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <p>
                    Mental illness is a group of biological brain disorders that
                    affect a person’s thinking, mood, emotions, sense of
                    reality, ability to relate and daily functioning.
                  </p>
                </StyledAccordionItemPanel>
              </AccordionItem>
            </div>
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
