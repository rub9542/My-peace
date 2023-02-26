import styled from "styled-components";
import {
  DefaultParagraphText,
  FlexAlignJustifyCenterContainer,
} from "../../styles/commonStyle";
import { TabInnerSection, TabList } from "../tabs/tabsStyle";
import variables from "../../styles/variables";

const { colors } = variables;

const ExploreWeeklyContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    margin: 3rem 1.5rem;
  }
`;

const ExploreWeeklyTextWrapper = styled.div`
  width: 45%;
  margin: 2rem 2.5rem;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
const ExploreWeeklyParagraphText = styled(DefaultParagraphText)`
  line-height: 195.5%;
`;
const HeaderText = styled.h2`
  font-family: "Lato-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;
  letter-spacing: -0.01em;
  color: #331b3b;
  margin: 1rem 0;
`;
const YogaContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 2rem auto;
  justify-content: space-between;
  margin-bottom: 5rem;
  margin-left: 4rem;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
    margin: 0;
  }
`;
const PsychiatricContainer = styled.section`
  display: flex;
  flex-direction: row-reverse;
  margin: 2rem auto;
  justify-content: space-between;
  margin-bottom: 5rem;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
  }
`;
const TextCardWrapper = styled.div`
  width: 28%;
  > h4 {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 123.3%;
    letter-spacing: -0.01em;
    color: #101010;
    margin: 0;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
  @media (max-width: 1024px) {
    width: 90%;
    margin-bottom: 2rem;
    > h2 {
      display: flex;
      justify-content: start;
    }
  }
`;
const ParagraphText = styled.div`
  line-height: 195.3%;
  letter-spacing: 0.02em;
  color: #2d2d2d;
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 257.3%;
  letter-spacing: 0.02em;
  color: ${colors.dark};
  > ol {
    padding-inline-start: 1rem;
  }
`;
const SecondaryTextWrapper = styled.div`
  width: 28%;
  > h4 {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 123.3%;
    letter-spacing: -0.01em;
    color: #101010;
    margin: 0;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
  @media (max-width: 1024px) {
    width: 90%;
    margin-bottom: 2rem;
    margin-right: 0;
    > h2 {
      display: flex;
      justify-content: start;
    }
  }
`;
const TabsSection = styled(TabInnerSection)`
  width: 85%;
  margin: auto;
`;
const SingleTab = styled(TabList)`
  font-size: 36px;
  line-height: 28px;
  letter-spacing: 0.5px;
  padding: 0.5rem 8rem;
  color: ${(props) => (props.active ? "#313131" : "#8F8F8F")};
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "6px solid #37474F" : "0px")};
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 0.5rem 3rem !important
  }
  @media (max-width: 600px) {
    padding: 0.5rem 1rem !important
  }
`;
const DownloadSection = styled(FlexAlignJustifyCenterContainer)`
  margin: 2rem 0 3rem 0;
`;

const PaddingDiv = styled.div`
  padding: 0 3rem;
`;
const MainImageWrapper = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
const HeaderTextWrapper = styled.h2`
  font-family: "Accanthis-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 51px;
  letter-spacing: -0.01em;
  color: #331b3b;
  margin: 0 0 2rem 0;
  @media (max-width: 600px) {
    font-size: 20px !important;
  }
  > span {
    display: block;
    font-family: "Accanthis-Regular";
    font-style: normal;
    font-weight: 400;
  }
`;
const ContentImageWrapper = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
const ContentSubWrapper = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

export {
  ExploreWeeklyContainer,
  ExploreWeeklyTextWrapper,
  ExploreWeeklyParagraphText,
  HeaderText,
  YogaContainer,
  TextCardWrapper,
  ParagraphText,
  PsychiatricContainer,
  SecondaryTextWrapper,
  TabsSection,
  SingleTab,
  DownloadSection,
  PaddingDiv,
  MainImageWrapper,
  HeaderTextWrapper,
  ContentImageWrapper,
  ContentSubWrapper,
};
