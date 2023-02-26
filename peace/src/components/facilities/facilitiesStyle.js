import styled from "styled-components";
import variables from "../../styles/variables";
import {
  FlexAlignCenterContainer,
  DefaultParagraphText,
} from "../../styles/commonStyle";


const { colors } = variables;

const FacilitiesDimensions = styled.div`
  // height: 471px;
`;

const FacilitiesContainer = styled(FacilitiesDimensions)`
  margin: 2rem auto;
  position: relative;
  > img {
    width: 100%;
  }

  @media (max-width: 1150px) {
    width: 100%;
    background: ${(props) =>
      props.bg
        ? `
    linear-gradient(
      rgba(0, 0, 0, 0.43) 100%,
      rgba(0, 0, 0, 0) 100%
    ),url(${props.bg}) no-repeat
    `
        : ""};
  }
`;

const FacilitiesWrapper = styled(FlexAlignCenterContainer)`
  border-radius: 0px;
  position: absolute;
  top: 0;
  ${(props) => (props.isEven ? `left:0;` : `right:0;`)}
  width: 46%;
  background: linear-gradient(rgba(0, 0, 0, 0.43) 100%, rgba(0, 0, 0, 0) 100%);
  padding: 3.4rem 4rem;
  backdrop-filter: blur(5px);
  bottom: 4px;
  @media (max-width: 1150px) {
    width: auto;
    position: static;
    height: -webkit-fill-available;
    background: transparent;
  }
  @media (max-width: 768px) {
    padding: 3.4rem 1rem;
  }
`;
const FacilitiesImage = styled.img`
  @media (max-width: 1150px) {
    display: none;
  }
`;

const FacilitiesTitle = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: Accanthis-Bold;
  font-size: 44px;
  line-height: 47px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${colors.light};

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 21px;
  }
`;

const FacilitiesSubTitle = styled.span`
  font-family: Accanthis-Regular;
  font-size: 40px;
  font-style: normal;
  line-height: 47px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${colors.light};

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 21px;
  }
`;

const FacilitiesDescription = styled.p`
  font-family: Lato-Regular;
  font-size: 16px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${colors.light};
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
const FacilitiesTextWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (max-width: 850px) {
    width: 90%;
  }
`;
const AwardSectionBgImage = styled.img`
  position: absolute;
  width: -webkit-fill-available;
  left: 0;
  bottom: 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const AwardSectionImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 8rem;
  // @media (max-width: 1024px) {
  //   flex-direction: column;
  //   align-items: center;
  // }
  @media (min-width: 650px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 600px) {
    grid-gap: 1rem;
    margin-top: 5rem;
  }
`;

const ParagraphText = styled(DefaultParagraphText)`
  line-height: 195.3%;
  letter-spacing: 0.02em;
  color: #2d2d2d;
`;

const AwardSectionWrapper = styled.section`
  padding: 2.5rem 4rem;
  position: relative;

  @media (max-width: 1024px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    margin: 0;
  }
`;
const AwardParagraph = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    width: 90%;
  }
  > h2 {
    font-family: "Accanthis-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 123.3%;
    letter-spacing: -0.01em;
    color: #101010;
    margin: 0;
  }
`;

const FacilitiesStyle = {
  FacilitiesContainer,
  FacilitiesSubTitle,
  FacilitiesWrapper,
  FacilitiesTitle,
  FacilitiesDescription,
  FacilitiesTextWrapper,
  FacilitiesImage,
  AwardSectionBgImage,
  AwardSectionImageWrapper,
  AwardSectionWrapper,
  AwardParagraph,
  ParagraphText,
};

export default FacilitiesStyle;
