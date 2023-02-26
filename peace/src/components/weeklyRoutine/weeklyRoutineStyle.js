import styled from "styled-components";
import {
  DefaultParagraphText,
  FlexAlignJustifyCenterContainer,
} from "../../styles/commonStyle";

const ExploreWeeklyContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

const ExploreWeeklyTextWrapper = styled.div`
  width: 50%;
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
  font-family: "Accanthis-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 51px;
  letter-spacing: -0.01em;
  color: #331b3b;
  margin: 2rem 2.5rem;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;
const YogaContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 4rem auto;
  justify-content: space-between;
  margin-bottom: 5rem;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
  }
`;
const PsychiatricContainer = styled.section`
  display: flex;
  flex-direction: row-reverse;
  width: 90%;
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
  width: 42%;
  > h2 {
    font-family: "Accanthis-Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 123.3%;
    letter-spacing: -0.01em;
    color: #101010;
    margin: 0;
  }
  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 2rem;
    > h2 {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ParagraphText = styled(DefaultParagraphText)`
  line-height: 195.3%;
  letter-spacing: 0.02em;
  color: #2d2d2d;
  margin-left: 0.5rem;
  width: 90%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const SecondaryTextWrapper = styled.div`
  margin-right: 2rem;
  width: 40%;
  > h2 {
    font-family: "Accanthis-Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 123.3%;
    letter-spacing: -0.01em;
    color: #101010;
    margin: 0;
  }
  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 2rem;
    margin-right: 0;
    > h2 {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const DownloadSection = styled(FlexAlignJustifyCenterContainer)`
  margin: 2rem 0 3rem 0;
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
  DownloadSection,
};
