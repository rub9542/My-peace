import styled from "styled-components";
import {
  ContentMapWrapper,
  ContentParagraphWrapper,
  ContentSubHeader,
} from "../termsAndCondition/termsAndConditionStyle";

const ContentPrivacyWrapper = styled.section`
  padding: 3rem 5rem;
  h2 {
    font-size: 44px;
  }
  @media (max-width: 600px) {
    padding: 3rem 1rem;
    h2 {
      text-align: left;
    }
  }
`;
const ContentPrivacyParagraph = styled(ContentParagraphWrapper)`
  p {
    margin: 0.25rem 0;
  }
`;
const ContentPrivacySubHeader = styled(ContentSubHeader)``;
const ContentPrivacyInnerWrapper = styled(ContentMapWrapper)`
  p {
    margin: 0.25rem 0;
  }
`;
export {
  ContentPrivacyInnerWrapper,
  ContentPrivacyParagraph,
  ContentPrivacySubHeader,
  ContentPrivacyWrapper,
};
