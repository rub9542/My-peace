import styled from "styled-components";
import { FlexContainer } from "../../styles/commonStyle";
const ArticleSectionWrapper = styled.section`
  min-height: 615px;
  margin: 4rem 0;
  background-position: right;
  @media (max-width: 1024px) {
    background: transparent;
  }
  @media (max-width: 800px) {
  margin: 3rem 0;
    padding: 0;
    h2 {
      text-align: left;
}
`;
const ArticleSubWrapper = styled.div`
background: #EDF0EE;
border-radius: 350px 0 0 0;
background-position: right;
padding-bottom: 2rem;
@media (max-width: 1024px) {
    background: transparent;
}
`

const ArticleCardContainer = styled.div`
  margin-left: 2rem;
  @media(max-width: 800px){
    margin: 0;
  }
`;
const ArticleInnerSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 3rem 0 1.5rem 0;
  padding: 0 2rem;

@media (max-width: 700px) {
    grid-template-columns:repeat(1, 1fr);
}
`
const ArticleSectionFooter=styled(FlexContainer)`
justify-content:end;
padding-right: 2rem;
@media (max-width: 800px) {
    display: none;
}
`
const SecondaryTitle = styled.h2`
font-family: 'Accanthis-Bold';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 51px;
letter-spacing: -0.01em;
color: #331B3B;
margin:0;
padding-left: 4rem;
@media (max-width: 1024px) {
    text-align:center;
    padding: 0 0 0 1.5rem;
  }
`;

const SubTitleText = styled.h2`
  font-family: "Accanthis-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 51px;
  letter-spacing: -0.01em;
  color: #331b3b;
  margin: 0 0 2rem 0;
  padding-left: 4rem;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 0 0 1.5rem;  
  }
`;
export {
  ArticleSectionWrapper,
  ArticleInnerSectionWrapper,
  ArticleSectionFooter,
  ArticleCardContainer,
  SecondaryTitle,
  ArticleSubWrapper,
  SubTitleText,
};
