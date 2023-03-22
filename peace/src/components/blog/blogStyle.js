import styled from "styled-components";
import { DefaultParagraphText } from "../../styles/commonStyle";

const BlogMainWrapper = styled.section`
  overflow: hidden;
`;

const BlogContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  @media (max-width: 600px) {
    margin: 4.5rem 0 0 0;
    > div {
      h2,
      p {
        text-align: left;
        padding: 0rem 1rem;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

const BlogParagraphText = styled(DefaultParagraphText)`
  line-height: 195.5%;
`;

const BlogTextWrapper = styled.div`
  width: 45%;
  margin: 4rem;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

const SecondarySubWrapper = styled.div`
  margin: 0 0 0 4rem;
  @media (max-width: 600px) {
    h2 {
      text-align: left;
      padding-left: 1rem;
    }
    margin: 0;
  }
`;
const FilterWrapper = styled.div`
  padding: 0 1.5rem;
`;
const BlogImageWrapper = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
export {
  BlogMainWrapper,
  BlogContentWrapper,
  BlogParagraphText,
  BlogTextWrapper,
  SecondarySubWrapper,
  FilterWrapper,
  BlogImageWrapper,
};
