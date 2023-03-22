import styled from "styled-components";

import { FlexContainer } from "../styles/commonStyle";
import waveImage from "../images/homePage/waveBg.png";

const QuoteSectionWrapper = styled(FlexContainer)`
  align-items: flex-end;
  margin-top: 10rem;
  position: relative;
  padding: 1rem 1rem 1rem 0;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 13rem;
  }
`;
const CarouselWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -15rem;

  @media (max-width: 800px) {
    margin-bottom: 10rem;
    top: ${(props) => (props.responsiveTop ? props.responsiveTop : "-20rem")};
  }
`;
const SingleSectionWrapper = styled.div`
  margin: ${(props) => (props.margin ? `${props.margin}` : "3rem 0")};
  @media (max-width: 1024px) {
    margin: 3rem 0;
  }
  > h2 {
    text-align: center;
    margin-bottom: 4rem;
  }
`;
const QuoteTextWrapper = styled.div`
  align-self: center;
  padding: 0 2rem;
  @media (max-width: 1200px) {
    margin-top: 6rem;
  }
  > i {
    font-family: "Accanthis-StdItalic";
    font-style: italic;
    font-weight: 400;
    font-size: 36px;
    line-height: 82px;
    text-transform: capitalize;
    color: #777777;
    @media (max-width: 1024px) {
      font-size: 28px;
      line-height: 50px;
    }
  }
  > h3 {
    font-family: "Accanthis-StdRegular";
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 110px;
    text-transform: capitalize;
    color: #1c1c1c;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 34px;
      line-height: 70px;
      padding: 1rem 0;
    }
  }

  @media (max-width: 800px) {
    margin-top: 3rem;
    > i,
    > h3 {
      font-size: 20px;
      line-height: 36.5px;
    }
  }
`;

const BuddySectionWrapper = styled.section`
  background: url(${waveImage}) no-repeat;
  text-align: center;
  padding: 2.5rem 3rem;
  position: relative;
  @media (max-width: 1024px) {
    background: rgba(74, 103, 82, 0.1);
    padding: 2.5rem 0.75rem;
  }
  > h2 {
    font-family: "Accanthis-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 106.3%;
    letter-spacing: -0.01em;
    color: #331b3b;
    margin: 3.5rem 0 3rem 0;
    > span {
      font-family: "Accanthis-Regular";
      display: inline-block;
      margin-right: 0.5rem;
      font-weight: 400;
    }
  }
  > p {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    width: 58%;
    margin: 0 auto;
    line-height: 38px;
    color: #3d3d3d;
  }

  @media (max-width: 600px) {
    padding: 2.5rem 1rem;
    > h2 {
      font-size: 24px !important;
      line-height: 25.51px !important;
      margin: 0 0 3rem 0;
      ${(props) =>
        props.customSubTitle
          ? `
      > span {
        font-family: "Accanthis-Bold" !important;
      }
      > svg{
        height: 14px;
        width: 13px;

      }
      `
          : ``}
    }
    > p {
      width: 90%;
      font-size: 14px;
    }
  }
`;
const BuddySectionImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 8rem;
  @media (min-width: 680px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${(props) => (props.forInternational ? "5rem" : "2rem")};
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: ${(props) => (props.forInternational ? "1rem" : "6rem")};
  }
`;
const BuddySectionBgImage = styled.img`
  position: absolute;
  width: 180px;
  height: 355px;
  left: 0;
  bottom: 157px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const TabsSectionWrapper = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
const QuoteImageWrapper = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
const QuoteImageSubWrapper = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;
const ValidationText = styled.div`
  display: flex;
  > p {
    color: red;
    font-size: 12px;
  }
`;
export {
  QuoteSectionWrapper,
  SingleSectionWrapper,
  QuoteTextWrapper,
  BuddySectionWrapper,
  BuddySectionImageWrapper,
  BuddySectionBgImage,
  CarouselWrapper,
  TabsSectionWrapper,
  QuoteImageWrapper,
  QuoteImageSubWrapper,
  ValidationText,
};
