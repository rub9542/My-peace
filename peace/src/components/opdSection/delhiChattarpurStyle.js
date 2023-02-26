import styled from "styled-components";
import {
  DefaultParagraphText,
  FlexAlignJustifyCenterContainer,
  FlexContainer,
} from "../../styles/commonStyle";

const OpdSectionWrapper = styled.div`
  margin: 2rem 0;
  padding: 0 2rem;
  margin-left: 2rem;
  @media (max-width: 800px) {
    padding: 0 1rem;
    margin-left: 0;
  }
`;
const OpdGridSection = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 1rem;
  height: 442px;
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const SingleGridSection = styled.div`
  background: ${(props) => (props.bg ? `url(${props.bg}) no-repeat` : "")};
  background-position: center;
  background-size: cover;
`;
const SingleInnerSection = styled(FlexAlignJustifyCenterContainer)`
  font-family: "Lato-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.3%;
  text-align: center;
  letter-spacing: -0.01em;
  cursor: pointer;
  height: 100%;
  color: #ffffff;
  backdrop-filter: blur(4.5px);
  background: rgba(0, 0, 0, 0.2);
  @media (max-width: 800px) {
    height: 51.999961853027344px;
    font-size: 14px;
  }
`;
const ActiveOpdSection = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: ${(props) => (props.active ? "opacity 1s" : "opacity 0s")};
  background: ${(props) => (props.bg ? `url(${props.bg}) no-repeat` : "")};
`;
const ActiveOpdInnerSection = styled(FlexContainer)`
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4.5px);
  padding: 2rem;
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;
const ActiveOpdTextSection = styled.div`
  width: 40%;
  h3 {
    font-family: "Lato-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.3%;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin: 1rem 0;
  }
  @media (max-width: 600px) {
    width: 100%;

    h3 {
      font-size: 14px;
    }
  }
`;
const ActiveOpdImageSection = styled.div`
  width: 50%;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const CloseIcon = styled.img`
  position: absolute;
  top: 0;
  height: fit-content !important;
  width: fit-content !important;
  right: 0;
  cursor: pointer;
`;
const ActiveOpdParagraphText = styled(DefaultParagraphText)`
  font-size: 18px;
  line-height: 239.3%;
  letter-spacing: 0.02em;
  color: #ffffff;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export {
  OpdSectionWrapper,
  OpdGridSection,
  SingleGridSection,
  SingleInnerSection,
  ActiveOpdSection,
  ActiveOpdImageSection,
  ActiveOpdInnerSection,
  ActiveOpdTextSection,
  ActiveOpdParagraphText,
  CloseIcon,
};
