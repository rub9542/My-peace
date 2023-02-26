import styled from "styled-components";
import { DefaultParagraphText } from "../../styles/commonStyle";

const BlogMainWrapper = styled.section``;

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
    margin-top: 2rem;
  }
`;

const BlogParagraphText = styled(DefaultParagraphText)`
  line-height: 195.5%;
  @media (max-width: 600px) {
    margin: 0 1rem;
  }
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
