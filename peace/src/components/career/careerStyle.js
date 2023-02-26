import styled from "styled-components";

import { DefaultParagraphText } from "../../styles/commonStyle";
import variables from "../../styles/variables";

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
`;
const FilterSection = styled(GridSection)`
  margin: 2rem 2.5rem;
  @media (max-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.filterShow === true ? "grid" : "none")};
    grid-template-columns: repeat(1, 1fr);
    width: 93%;
    margin: 2rem auto;
  }
`;
const FilterLabel = styled.label`
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  display: block;
  margin-bottom: 0.5rem;
`;
const CareerCardSectionWrapper = styled.section`
  padding: 0 2rem 0 2rem;
  min-height: 615px;
  position: relative;
  z-index: 1;
  @media (max-width: 1024px) {
    background: transparent;
    margin-bottom: 0;
    margin-left: 0;
    padding: 0 1.25rem 2rem 1.25rem;
  }
`;
const CareerCardInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 4rem 3rem;
  @media (max-width: 1024px) {
    padding-left: 0rem;
    margin: 0;
  }
  @media (max-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CareerImageWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const SecondaryTitle = styled.h2`
font-family: 'Accanthis-Bold';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 51px;
letter-spacing: -0.01em;
color: #331B3B;
margin:0 0 2rem 0;
@media (max-width: 600px) {
  font-size: 30px !important;
  line-height: 30px !important;
}
>span{
    display:block;
    font-family: 'Accanthis-Regular';
    font-style: normal;
    font-weight: 400;
}

}
`;
const SearchBlogWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    width: 90%;
    margin: 2rem auto;
    background-color: #eeeeee;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem 0 1rem;
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

export {
  CareerMainWrapper,
  CareerSectionWrapper,
  CareerSectionTextWrapper,
  CareerSectionParagraphText,
  ContentSectionWrapper,
  FilterSection,
  FilterLabel,
  CareerCardSectionWrapper,
  CareerCardInnerWrapper,
  CareerImageWrapper,
  SecondaryTitle,
  SearchBlogWrapper,
};
