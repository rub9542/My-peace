import styled from "styled-components";
import { FlexContainer } from "../../styles/commonStyle";

import variables from "../../styles/variables";

const { colors } = variables;

const AnxdietyCardWrapper = styled(FlexContainer)`
  background: ${colors.light};
  align-items: flex-end;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 0 1rem;
  height: ${(props) => (props.cardHeight ? props.cardHeight : `277px`)};
  z-index: 2;
  position: relative;
  > p {
    font-family: "Lato-Regular";
    font-style: normal;
    font-size: 16px;
    line-height: ${(props) => (props.intStyle ? "26px" : "36px")};
    padding: ${(props) => (props.intStyle ? "2rem 0" : "0")};
    color: ##331B3B;
    text-align: left;
    margin-top: 0;
  }
  > img {
    // max-width: 200px;
    position: absolute;
    height: ${(props) => (props.imageheight ? props.imageheight : `85%`)};
    width: 65%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -78px;
    bottom: 110px;
  }
  @media (min-width: 800px) and (max-width: 1150px) {
    img {
      // height: fit-content;
      height: 50%;
      width: 50%;
    }
  }
  @media (min-width: 800px) and (max-width: 990px) {
    height: 310px;
    p {
      // max-height: 70%;
      margin-top: 40%;
      padding: 0rem;
    }
  }
  @media (max-width: 800px) {
    ${(props) =>
      props.intStyle
        ? ` margin-top: 4rem;`
        : `
        margin-bottom:6rem;
    `}
    height: 277px;
    max-height: 280px;
    p {
      font-size: 14px;
      line-height: 28px;
      padding: 2rem 0 1rem 0;
    }
    img{
      width: fit-content;
    }
  }
  @media (max-width: 600px) {
    img {
      width: auto;
      top: -90px;
    }
  }
  @media (max-width: 350px) {
    max-height: fit-content;
    img{
      width: auto;
    height: ${(props) => (props.fromPath === "home" ? "85%" : "50%")};
    }
    }
  }
`;
const CardSpanTitle = styled.span`
  font-family: Lato-Bold !important;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.055em;
  text-align: left;
  color: rgba(51, 27, 59, 1);

  display: inline-block;
  padding-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.055em;
    text-align: left;
  }
`;
export { AnxdietyCardWrapper, CardSpanTitle };
