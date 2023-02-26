import styled from "styled-components";
import variables from "../../styles/variables";

import { FlexAlignJustifyBetweenContainer } from "../../styles/commonStyle";
const { colors } = variables;

const TabMainWrapper = styled(FlexAlignJustifyBetweenContainer)`
  padding: ${(props) =>
    props.isService ? "1rem 0.5rem 1rem 1.5rem" : "1rem 0.5rem "};
  margin-left: ${(props) => (props.isService ? "5%" : "unset")};
  position: sticky;
  position: -;
  top: 0;
  width: ${(props) => (props.fullwidth ? "auto" : "90%")};
  margin: auto;
  @media (max-width: 1100px) {
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    button {
      display: none;
    }
    width: 95%;
    margin: auto;
  }
`;
const TabInnerSection = styled.ul`
  width: ${(props) => (props.widthStyle ? "100%" : "86%")};
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d6d6d6;
  @media (max-width: 900px) {
    // width: ${(props) => (props.widthStyle ? "100%" : "100%")};
    width: 100%;
  }
`;
const TabList = styled.li`
  display: block;
  font-family: "Accanthis-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: ${(props) => (props.active ? "#313131" : "#8F8F8F")};
  padding: ${(props) => (props.isService ? "1rem 1rem 1rem 0" : "1rem 2rem")};
  cursor: pointer;
  width: ${(props) => (props.isService ? "32%" : "unset")};
  margin-top: ${(props) => (props.isService ? "1%" : "unset")};
  border-bottom: ${(props) =>
    props.active && !props.isService ? "8px solid #37474F" : "0px"};
  &:hover {
    color: ${colors.primary};
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${colors.primary};
    }
  }
  @media (max-width: 1200px) {
    padding: 1rem 0rem !important;
  }
  @media (max-width: 800px) {
    width: ${(props) => (props.isService ? "100%" : "unset")};
    a {
      font-size: 10px;
    }
  }
`;
const TabHighlight = styled.div`
  background: #37474f;
  position: absolute;
  height: 8px;
  width: 13%;
  top: 76%;
  border-radius: 2px;
`;
export { TabHighlight, TabMainWrapper, TabInnerSection, TabList };
