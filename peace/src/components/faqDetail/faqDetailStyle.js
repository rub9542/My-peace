import styled from "styled-components";
import {
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqDetailSectionWrapper = styled.section`
  overflow: hidden;
`;

const DetailSectionTextWrapper = styled.div`
  width: 45%;
  margin: 2rem 2.5rem;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 4rem 1.25rem 0 1.25rem;
  }
`;
const DetailSearch = styled.div`
  margin: 2.5rem;
  width: 34%;
  @media (max-width: 800px) {
    width: 90%;
    margin: 0;
    padding: 0 1.25rem 0 1.25rem;
  }
`;
const SecondaryTitle = styled.h2`
  font-family: "Accanthis-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 51px;
  letter-spacing: -0.01em;
  color: #331b3b;
  margin: 0 0 2rem 0;
  > span {
    display: block;
    font-family: "Accanthis-Regular";
    font-style: normal;
    font-weight: 400;
  }
`;
const DetailLabel = styled.label`
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  display: block;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    display: none;
  }
`;

const DetailAccordionWrapper = styled.section`
  margin-top: 2rem;
  align-items: flex-start;
  @media (max-width: 1024px) {
    margin-top: 5rem;
    width: 100%;
  }
`;
const DetailAccordionSection = styled.div`
  background-color: #fff;
  @media (max-width: 1024px) {
    top: 0;
    width: 100%;
    position: relative;
  }
`;
const DetailAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 0 20px;
  animation: fadein 0.35s ease-in;
  p {
    font-size: 18px;
    padding: 0 18px;
    line-height: 35px;
  }
  ul {
    font-size: 18px;
    padding: 0 18px;
    line-height: 25px;
  }
  li {
    margin: 1rem !important;
    list-style: disc !important;
  }
  @media (max-width: 600px) {
    padding: 0 1.25rem;
    p {
      font-size: 12px;
      margin: 0 0 0.5rem 0;
      line-height: 20px;
      padding: 0;
    }
    ul {
      font-size: 12px;
      padding: 0;
    }
  }
`;
const DetailAccordionButton = styled(AccordionItemButton)`
  p {
    font-size: 24px;
    margin: 0;
    line-height: 35px;
  }
  @media (max-width: 600px) {
    > p {
      font-size: 14px;
    }
  }
`;
const FaqinvisibleLine = styled.div`
  height: 3px;
  width: 50%;
  background-color: rgba(255, 255, 255, 1);
  margin: 0.5rem;
`;
export {
  DetailAccordionButton,
  DetailAccordionItemPanel,
  DetailAccordionSection,
  DetailAccordionWrapper,
  DetailLabel,
  DetailSearch,
  DetailSectionTextWrapper,
  FaqDetailSectionWrapper,
  SecondaryTitle,
  FaqinvisibleLine,
};
