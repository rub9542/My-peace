import styled from "styled-components";
import {
  DefaultParagraphText,
  FlexAlignJustifyBetweenContainer,
} from "../../styles/commonStyle";

import variables from "../../styles/variables";

const { colors } = variables;

const ArticleCardWrapper = styled.div`
  background: ${colors.light};
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 1rem;
`;
const ArticleCardHeader = styled.h5`
  font-family: "Lato-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 154%;
  color: #313131;
  margin: 1.5rem 0;
`;
const ArticleCardDescription = styled(DefaultParagraphText)`
  font-size: 14px;
  line-height: 23px;
  color: #6e6e6e;
`;
const ArticleLabel = styled.label`
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: block;
  color: #6e6e6e;
`;
const ArticleCardFooterSection = styled(FlexAlignJustifyBetweenContainer)`
  > a {
    button {
      font-family: "Lato-Bold";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      color: #13443e;
      outline: 0;
      cursor: pointer;
      border: 0;
      background: transparent;
    }
  }
`;
const ArticleIconSection = styled(FlexAlignJustifyBetweenContainer)`
  margin-top: 1rem;
  > div {
    display: flex;
    > button {
      > svg {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        > rect {
          fill: white;
        }
        > path {
          fill: rgba(19, 68, 62, 1);
        }
      }
    }
    > button:nth-child(2) {
      > svg {
        border: 2px solid rgba(19, 68, 62, 1);
        border-radius: 50%;
        height: 25px;
        width: 25px;
        display: flex;
        > rect {
          fill: white;
        }
        > path {
          fill: rgba(19, 68, 62, 1);
        }
      }
    }
  }
`;
const ArticleImageWrapper = styled.div`
  // max-height: 157px;
  > img {
    border-radius: 5px;
    width: 100%;
  }

  @media (max-width: 700px) {
    max-height: fit-content;
  }
`;
export {
  ArticleCardWrapper,
  ArticleCardDescription,
  ArticleCardHeader,
  ArticleLabel,
  ArticleIconSection,
  ArticleImageWrapper,
  ArticleCardFooterSection,
};
