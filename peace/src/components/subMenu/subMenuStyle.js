import styled from "styled-components";

import { FlexAlignJustifyBetweenContainer } from "../../styles/commonStyle";

import variables from "../../styles/variables";

const { colors } = variables;

const SubMenuContainer = styled.section`
  background: ${colors.light};
  border-bottom: 1px solid #f2f2f5;
  box-shadow: 0px 25px 26px rgba(0, 0, 0, 0.1);
  min-height: ${(props) => (props.top ? "70vh" : 0)};
  position: absolute;
  width: 100%;
  max-width: 1440px;
  top: ${(props) => (props.top ? props.top : "-100%")};
  left:0;
  transition: top 0.5s;
  opacity: ${(props) => (props.top ? 1 : 0)};
  z-index: ${(props) => (props.top ? 3 : 0)};
`;
const MenuInnerSection = styled(FlexAlignJustifyBetweenContainer)`
  padding: 1rem 3.5rem 2rem 2rem;
  align-items: start;
`;
const SubMenuListWrapper = styled.nav`
  width: 50%;
  flex-grow: 1;
  margin-top: 3rem;
  > h6 {
    font-family: "Accanthis-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin: 0 0 1rem 0;
    color: ${colors.primary};
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  > ul {
    margin: 0;
    > li {
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
      }
      > a {
        font-family: "Lato-Regular";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        text-decoration: none;
        line-height: 19px;
        color: ${colors.textColor};
        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }
`;
const SubMenuImageWrapper = styled.div`
  align-itself: center;
  margin: 0 auto;
  flex-grow: 3;
  text-align: center;
  margin-top: 3rem;
`;

export {
  SubMenuContainer,
  MenuInnerSection,
  SubMenuListWrapper,
  SubMenuImageWrapper,
};
