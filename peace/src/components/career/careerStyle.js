import styled from "styled-components";

import { DefaultParagraphText } from "../../styles/commonStyle";
import variables from "../../styles/variables";
import { SecondaryTitle } from "../faqDetail/faqDetailStyle";
import { FilterLabel } from "../mediaPage/mediaPageStyle";

const { colors } = variables;

const CareerMainWrapper = styled.section`
  overflow: hidden;
`;
const CareerSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 2rem 1rem;
  }
  @media (max-width: 600px) {
    padding: 4.5rem 1rem 2rem;
    margin: 0;
  }
`;
const CareerSectionTextWrapper = styled.div`
  width: 45%;
  margin: 2rem 2.5rem;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 0 1.25rem 0 1.25rem;
  }
`;
const CareerSectionParagraphText = styled(DefaultParagraphText)`
  line-height: 195.5%;
`;
const ContentSectionWrapper = styled.div``;
const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  @media (max-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const FilterSection = styled(GridSection)`
  margin: 2rem 2.5rem;

  @media (max-width: 600px) {
    display: ${(props) => (props.filterShow === true ? "grid" : "none")};
    width: 93%;
    margin: 2rem auto;
  }
`;
const FilterLabelWrapper = styled(FilterLabel)``;

const CareerCardSectionWrapper = styled.section`
  padding: 0 2rem 0 2rem;
  min-height: fit-content;
  max-height: 615px;
  position: relative;
  z-index: 1;
  @media (max-width: 1024px) {
    background: transparent;
    margin-bottom: 0;
    margin-left: 0;
    padding: 0 1.25rem 2rem 1.25rem;
    max-height: fit-content;
  }
`;
const CareerCardInnerWrapper = styled(GridSection)`
  grid-gap: 2rem;
  margin: 4rem 3rem;
  @media (max-width: 1024px) {
    padding-left: 0rem;
    margin: 0;
  }
`;
const CareerImageWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const SecondaryTitleWrapper = styled(SecondaryTitle)`
  font-size: 48px;
`;
const SearchBlogWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    margin: 0 0 2rem 0;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    > p {
      font-family: "Lato-Regular";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      color: ${colors.dark};
    }
  }
`;
const ResponsiveWrapper = styled.div`
  display: flex;
`;

const NotFound = styled.p`
  display: flex;
  justify-content: center;
  color: ${colors.primary};
`;
export {
  CareerMainWrapper,
  CareerSectionWrapper,
  CareerSectionTextWrapper,
  CareerSectionParagraphText,
  ContentSectionWrapper,
  FilterSection,
  FilterLabelWrapper,
  CareerCardSectionWrapper,
  CareerCardInnerWrapper,
  CareerImageWrapper,
  SecondaryTitleWrapper,
  SearchBlogWrapper,
  ResponsiveWrapper,
  NotFound,
};
