import styled from "styled-components";
import { FlexContainer } from "../../styles/commonStyle";

const StaticContainer = styled.div`
  background: rgba(237, 240, 238, 1);
  border-top-right-radius: 16rem 6rem;
  height: ${(props) => (props.cardName === "subscribe" ? "343px" : "269px")};
  @media (max-width: 810px) {
    height: auto;
  }

  @media (max-width: 600px) {
    border-top-right-radius: 0px;
  }
`;

const StaticWrapper = styled(FlexContainer)`
  width: ${(props) => (props.cardName === "subscribe" ? "100%" : "95%")};
  height: 100%;
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const StaticTextWrapper = styled.div`
  width: ${(props) => (props.cardName === "subscribe" ? "65%" : "100%")};
  text-align: left !important;
  padding: ${(props) =>
    props.cardName === "subscribe"
      ? "3rem 0rem 2rem 4rem"
      : "2rem 0rem 2rem 4rem"};
  align-self: center;
  h2 {
    text-align: left !important;
    @media (max-width: 1024px) {
      text-align: center !important;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
    text-align: center !important;
  }
  @media (max-width: 800px) {
    padding: 2rem 1rem;
  }
`;

const StaticImageWrapper = styled.div`
  margin-top: -4.75rem;
  margin-left: auto;
  img {
    width: ${(props) => (props.cardName === "subscribe" ? "546px" : "auto")};
    margin-top: ${(props) =>
      props.cardName === "subscribe" ? "3rem" : "0"};
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 810px) {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    img {
      position: relative;
    }
  }
`;

const SubScribeInputSection = styled.div`
  width: 75%;
  margin-bottom: 1.5rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const StaticStyle = {
  StaticContainer,
  StaticWrapper,
  StaticTextWrapper,
  StaticImageWrapper,
  SubScribeInputSection,
};
