import styled from "styled-components";
import { FlexContainer } from "../../styles/commonStyle";

import variables from "../../styles/variables";

const { colors } = variables;

const AwardCardWrapper = styled(FlexContainer)`
  background: ${colors.light};
  align-items: flex-end;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 0 1rem;
  height: 390px;
  z-index: 2;
  position: relative;
  margin: 1rem 0;
  @media (max-width: 1024px) {
    width: 38%;
    margin: 4rem 0;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    width: -webkit-fill-available;
  }
  @media (max-width: 800px) {
    width: -webkit-fill-available;
    > img {
      height: 152px;
      width: 162px;
      top: -70px !important;
    }
  }
  > img {
    max-width: 300px;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -110px;
    bottom: 110px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
`;
const HeadingStyle = styled.p`
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #331b3b;
  text-transform: uppercase;

  @media (max-width: 800px) {
    font-family: "Lato-Bold";
    font-size: 16px;
    line-height: 21px;
  }
`;
const ContentText = styled.p`
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #3d3d3d;
  width: 85%;

  @media (max-width: 800px) {
    font-size: 14px;
    width:100%;
  }
`;

export { AwardCardWrapper, TextWrapper, HeadingStyle, ContentText };
