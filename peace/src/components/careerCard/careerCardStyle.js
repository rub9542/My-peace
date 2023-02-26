import styled from "styled-components";
import { DefaultParagraphText } from "../../styles/commonStyle";

import variables from "../../styles/variables";

const { colors } = variables;

const CareerCardWrapper = styled.div`
  background: ${colors.light};
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  z-index: 2;
  padding: 1.5rem 1rem;
`;
const CareerCardHeader = styled.h5`
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 137.3%;
  letter-spacing: 0.055em;
  text-transform: uppercase;
  color: #331b3b;
  margin: 1rem 0 0 0;
`;
const CareerCardRole = styled(DefaultParagraphText)`
  font-size: 16px;
  line-height: 36px;
  color: #3d3d3d;
  margin: 0;
`;
const CareerCardAddress = styled.div`
  color: #000;
  > h4 {
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  > p {
    font-size: 14px;
    line-height: 25px;
    font-weight: 400;
    width: 50%;
    margin: 0;
  }
`;

export {
  CareerCardWrapper,
  CareerCardHeader,
  CareerCardRole,
  CareerCardAddress,
};
