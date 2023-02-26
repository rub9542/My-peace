import styled from "styled-components";

import { DefaultParagraphText } from "../../styles/commonStyle";
import FlowerImage from "../../images/homePage/insideSukoonFlower.png";

const InsideSukoonWrapper = styled.div`
  background-image: url(${FlowerImage});
  background-repeat: no-repeat;
  background-position: right top;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    background: transparent;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding: ${(props) =>
      props.responsiveStyle ? props.responsiveStyle : "2rem 2rem"};
    h2 {
      text-align: left;
    }
  }
`;
const InsideSukoonImageWrapper = styled.div`
  z-index: 2;
`;
const InsideSukoonTextWrapper = styled.div`
  width: 40%;
  margin: 2rem 2.5rem;

  @media (max-width: 600px) {
    padding: 1rem 0 0 0;
    width: 100%;
    margin: 0;
  }
`;

const InsideSukoonParagraphText = styled(DefaultParagraphText)`
  line-height: 195.5%;
`;
const DashedCircleDiv = styled.div`
  height: 440px;
  width: 456.58758544921875px;
  border: ${(props) =>
    props.dotColor
      ? `2px dashed ${props.dotColor}`
      : `2px dashed rgba(0, 0, 0, 0.26)`};
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const VideoContainer = styled.iframe`
  height: 500px;
  width: 900px;
`;
const VideoMainContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
`;
const InsideSukoonVideo = styled.div`
  position: absolute;
  z-index: 5;
  width: 50%;
  right: 25%;
`;
const CloseIcon = styled.div`
  padding: 25px;
  display: flex;
  justify-content: end;
`;
export {
  InsideSukoonWrapper,
  InsideSukoonParagraphText,
  InsideSukoonImageWrapper,
  InsideSukoonTextWrapper,
  DashedCircleDiv,
  VideoContainer,
  VideoMainContainer,
  InsideSukoonVideo,
  CloseIcon,
};
