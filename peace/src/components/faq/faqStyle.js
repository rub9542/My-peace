import styled from "styled-components";

import {
  FlexAlignJustifyBetweenContainer,
  FlexAlignJustifyCenterContainer,
} from "../../styles/commonStyle";
import { AccordionItemPanel } from "react-accessible-accordion";
import faqBackground from "../../images/faq/faqBg.png";

const FaqContainer = styled.section`
  background: url(${faqBackground}) no-repeat;
  background-size: cover;
  padding: 2rem 2rem 0 2rem;
  @media (max-width: 1024px) {
    background: none;
  }
  @media (max-width: 800px) {
    padding: 2rem 0 0 0;
  }
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 0 20px;
  animation: fadein 0.35s ease-in;
  p {
    font-size: 14px;
  }
`;
const FaqMainSection = styled(FlexAlignJustifyBetweenContainer)`
  align-items: flex-start;
  padding-top: 5rem;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }
`;
const FaqAccordionSection = styled.section`
  background-color: #fff;
  width: 550px;
  margin: auto;
  @media (max-width: 1024px) {
    top: 0;
    width: 100%;
    position: relative;
  }
`;

const FaqAccordionButton = styled.button`
  color: #444;
  cursor: pointer;
  padding: 22px 8px;
  text-align: left;
  line-height: 22px;
  border: 1px solid #d7def0;
`;
const FaqContentMain = styled.div`
  top: 0px;
  left: 0;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: start;
    width: 100%;
  }
`;
const FaqImageWrapper = styled.div`
  z-index: 5;
  margin-left: -3.35rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const AccordionWrapper = styled.div`
  margin-top: 1rem;
  align-items: flex-start;
  @media (max-width: 1024px) {
    margin-top: 0;
    width: 100%;
  }
`;
const FaqFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: -2rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const ViewMoreSection = styled(FlexAlignJustifyCenterContainer)`
  margin: 2rem 0 1rem 0;
`;
const FaqContentDiv = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    h2 {
      text-align: left;
    }
    padding-left: 1rem;
  }
`;

export {
  FaqContainer,
  FaqMainSection,
  FaqAccordionSection,
  FaqAccordionButton,
  FaqContentMain,
  FaqFooter,
  ViewMoreSection,
  FaqContentDiv,
  FaqImageWrapper,
  StyledAccordionItemPanel,
  AccordionWrapper,
};
