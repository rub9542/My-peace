import styled from "styled-components";
import { DefaultParagraphText } from "../../styles/commonStyle";

const ExploreContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 600px;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;
const FlowerImage = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  bottom: 275px;
  left: 95px;
  @media (max-width: 1024px) {
   bottom:0;
   left: 0;
  }
`;
const ExploreSukoonTextWrapper = styled.div`
  width: 41%;
  margin: 5rem 2.5rem;
  padding-top: 5rem;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
const ExploreSukoonParagraphText = styled(DefaultParagraphText)`
  line-height: 195.5%;
`;
const ViewMoreSection = styled.div`
  display: flex;
  margin: 2rem 0 1rem 0;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const PaddingFlex = styled.div``;

export {
  ExploreContainer,
  ImageWrapper,
  ExploreSukoonTextWrapper,
  ExploreSukoonParagraphText,
  ViewMoreSection,
  PaddingFlex,
  FlowerImage
};
