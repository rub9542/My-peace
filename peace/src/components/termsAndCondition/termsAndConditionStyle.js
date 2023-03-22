import styled from "styled-components";

const ContentHeaderWrapper = styled.section`
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
const ContentParagraphWrapper = styled.div`
  p {
    font-family: "Lato-Regular";
    font-size: 18px;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0.02em;
    text-align: justify;
  }
  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
  }
`;
const ContentSubHeader = styled.div``;
const ContentMapWrapper = styled.div`
  padding: 2rem 0;
  h4 {
    font-family: "Lato-Regular";
    font-size: 20px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.02em;
    text-align: left;
    margin: 0;
  }
  ul {
    margin: 0 1.75rem;
  }
  p,
  li {
    font-family: "Lato-Regular";
    font-size: 18px;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0.02em;
    text-align: justify;
    list-style-type: disc !important;
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 16px;
    }
    p,
    li {
      font-size: 14px;
    }
  }
`;
export {
  ContentHeaderWrapper,
  ContentMapWrapper,
  ContentParagraphWrapper,
  ContentSubHeader,
};
