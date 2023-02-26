import styled from "styled-components";
import {
  DefaultParagraphText,
  FlexAlignCenterContainer,
  FlexAlignJustifyBetweenContainer,
  FlexAlignJustifyCenterContainer,
  FlexContainer,
} from "../../styles/commonStyle";
import { TabInnerSection, TabList } from "../tabs/tabsStyle";
import variables from "../../styles/variables";

const ExperienceSectionWrapper = styled.section`
  margin: 2rem 0;
  padding: 0 2rem;
  margin-left: 2rem;
  @media (max-width: 800px) {
    padding: 0;
    margin-left: 0;
    margin: 2rem 0.5rem;
  }
`;
const RoomSectionWrapper = styled.div``;
const Title = styled.h3`
  font-family: "Lato-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 20px;
  color: #1e1e1e;
  mqargin: 1rem 0;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;
const ParagraphText = styled(DefaultParagraphText)`
  font-size: 19px;
  line-height: 156.3%;
  letter-spacing: 0.02em;
  color: #2d2d2d;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
const DifferentRoomSection = styled(FlexAlignJustifyBetweenContainer)`
  align-items: flex-start;
  margin: 2rem 0;
  box-sizing: border-box;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;
const TabSection = styled.div`
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
    overflow: auto;
  }
`;
const ImageGridSection = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  grid-gap: 1rem;
  box-sizing: border-box;
  padding-left: 2rem;

  @media (max-width: 950px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  min-width: ${(props) => (props.width ? props.width : "50%")};
  > img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
const TabsSection = styled(TabInnerSection)``;
const SingleTab = styled(TabList)`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  padding: 0.5rem 1.2rem;
  color: ${(props) => (props.active ? "#313131" : "#8F8F8F")};
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2.5px solid #37474F" : "0px")};
  @media (max-width: 800px) {
    font-size: 14px !important;
    padding: 1rem 5px !important;
  }
`;
const ServicesGridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: auto;
  margin-top: 1rem;
  grid-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, auto);
  }
`;
const SingleServiceText = styled(FlexAlignCenterContainer)`
  > svg {
    margin-right: 0.5rem;
  }
`;
const ServiceText = styled(DefaultParagraphText)`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #000000;
`;

const DotsWrapper = styled(FlexAlignJustifyCenterContainer)`
  > div {
    display: flex;
    align-items: center;
    margin-top: -1.5rem;
    > div {
      margin-right: 0.5rem;
    }
  }
`;
const OtherExperienceSectionWrapper = styled(FlexAlignJustifyBetweenContainer)`
  margin: 3rem 2rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    margin: 0;
  }
`;
const OtherExperiencetTextSectionWrapper = styled.div`
  width: 50%;
  box-sizing: border-box;
  margin-right: 2rem;
  > p {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 156.3%;
    letter-spacing: 0.02em;
    color: #2d2d2d;
  }
  > h3 {
    font-family: "Lato-Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 20px;
    color: #1e1e1e;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
  }
`;
const OtherExperienceImageSectionWrapper = styled(
  FlexAlignJustifyBetweenContainer
)`
  width: 50%;
  box-sizing: border-box;
  > img {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const SliderArrowsDotsSection = styled(FlexAlignJustifyBetweenContainer)`
  // padding: 0 1.5rem 0 0px;
  position: relative;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    left: 0rem;
  }
`;
const SliderCustomArrows = styled(FlexContainer)`
  width: 100%;
  justify-content: space-between;
`;
const SliderSingleArrow = styled(FlexAlignJustifyCenterContainer)`
  margin-right: 1rem;
  cursor: pointer;
  border: 2px solid
    ${(props) =>
      props.initialCount
        ? variables.colors.borderColor
        : variables.colors.dark};
  border-radius: 50%;
  width: 35px;
  height: 34px;
  @media (max-width: 800px) {
    margin-right: 0;
  }
`;

export {
  ExperienceSectionWrapper,
  RoomSectionWrapper,
  Title,
  ParagraphText,
  TabSection,
  DifferentRoomSection,
  ImageGridSection,
  TabsSection,
  SingleTab,
  ServiceText,
  ServicesGridSection,
  SingleServiceText,
  ImageContainer,
  DotsWrapper,
  OtherExperienceSectionWrapper,
  OtherExperienceImageSectionWrapper,
  OtherExperiencetTextSectionWrapper,
  SliderArrowsDotsSection,
  SliderCustomArrows,
  SliderSingleArrow,
};
