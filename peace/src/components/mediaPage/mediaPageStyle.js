import styled from "styled-components";
import { FlexAlignCenterContainer } from "../../styles/commonStyle";
import variables from "../../styles/variables";

const { colors } = variables;

const MediaPageSection = styled.div`
  margin: 3rem 4rem;
  @media (max-width: 600px) {
    margin: 3rem 1rem;
  }
`;
const TabsWrapper = styled(FlexAlignCenterContainer)`
  border-bottom: 1px solid #d6d6d6;
`;
const Tab = styled.h3`
  font-family: "Accanthis-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 28px;
  letter-spacing: 0.5px;
  border-bottom: ${(props) => (props.active ? "5px solid #37474F;" : "0px")};
  color: ${(props) => (props.active ? "#263238" : "#8F8F8F")};
  margin: 0;
  flex: 0.2;
  margin-right: 6rem;
  padding-bottom: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 600px) {
    font-family: Accanthis-Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.5px;
    text-align: center;
    color: rgba(143, 143, 143, 1);
    margin-right: 1rem;
    padding: 0 2rem;
    flex: 0.5;
  }
`;
const MediaPageHeader = styled.h2`
  font-family: "Accanthis-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 106.3%;
  letter-spacing: -0.01em;
  color: #263238;
  > span {
    font-size: 34px;
    font-weight: 400;
    font-family: "Accanthis-Regular";
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;
const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`;
const FilterSection = styled(GridSection)`
  margin: 2rem 0;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ArticleGridSection = styled(GridSection)`
  margin: 3rem 0;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const FilterLabel = styled.label`
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  display: block;
  margin-bottom: 0.5rem;
`;
const MediaHeaderWrapper = styled.div`
  margin: 2rem 0 0 4rem;
  @media (max-width: 600px) {
    margin: 2rem 0 0 0.5rem;
  }
`;
const MediaMainWrapper = styled.section``;
export {
  MediaPageSection,
  TabsWrapper,
  Tab,
  MediaPageHeader,
  GridSection,
  FilterLabel,
  FilterSection,
  ArticleGridSection,
  MediaMainWrapper,
  MediaHeaderWrapper,
};
