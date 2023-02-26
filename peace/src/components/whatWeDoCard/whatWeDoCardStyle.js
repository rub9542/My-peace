import styled from "styled-components";
import { DefaultParagraphText } from "../../styles/commonStyle";

import variables from "../../styles/variables";

const { colors } = variables;

const WhatWeDoCardWrapper = styled.div`
  background: ${colors.light};
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  z-index: 2;
  padding: 1.5rem 1rem;
`;
const WhatWeDoCardHeader = styled.h5`
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 137.3%;
  letter-spacing: 0.055em;
  text-transform: uppercase;
  color: #331b3b;
  margin: 1rem 0;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const WhatWeDoCardDescription = styled(DefaultParagraphText)`
  font-size: 16px;
  line-height: 36px;
  color: #3d3d3d;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const VisionImageWrapper = styled.div`
  position: relative;
  height: 25vh;
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    bottom: 0rem;
  }

  @media (max-width: 800px) {
    height: 10vh;

    img {
      height: 151.83030700683594px;
      // width: 162px;
      max-width: 75%;
    }
  }
`;
export {
  WhatWeDoCardWrapper,
  WhatWeDoCardDescription,
  WhatWeDoCardHeader,
  VisionImageWrapper,
};
