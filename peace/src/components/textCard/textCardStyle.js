import styled from "styled-components";

import { DefaultParagraphText } from "../../styles/commonStyle";

const TextCardWrapper = styled.div`
  width: 50%;
  > h2 {
    font-family: "Accanthis-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 123.3%;
    letter-spacing: -0.01em;
    color: #101010;
    margin: 0;
  }

  @media (max-width: 800px) {
    width: 100%;
    > h2 {
    font-family: "Accanthis-Bold";
      font-size: 20px !important;
    }
  }
`;
const ParagraphText = styled(DefaultParagraphText)`
  line-height: 195.3%;
  letter-spacing: 0.02em;
  color: #2d2d2d;

  @media (max-width: 600px) {
    font-size: 14px !important;
  }
`;

export { TextCardWrapper, ParagraphText };
