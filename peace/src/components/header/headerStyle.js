import styled from "styled-components";

import {
  FlexAlignCenterContainer,
  FlexAlignJustifyBetweenContainer,
} from "../../styles/commonStyle";

import overlayImage from "../../images/header/overlay.png";
import variables from "../../styles/variables";

const { colors } = variables;

const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1440px;
  width: 100%;
  position: ${(props) => (props.layout === "other" ? "fixed" : "unset")};
  box-shadow: ${(props) =>
    props.layout === "other" ? "0px 0px 9px rgba(0, 0, 0, 0.25)" : "0px"};
  background: ${(props) =>
    props.layout === "other"
      ? `${colors.light}`
      : `url(${overlayImage}) no-repeat fixed center`};
  background-size: cover;
  height: ${(props) => (props.layout === "other" ? "auto" : "110vh")};
  top: ${(props) => (props.layout === "other" ? "0" : null)};
  z-index: ${(props) => (props.layout === "other" ? "1000" : null)};
  @media (max-width: 800px) {
    height: ${(props) => (props.layout === "other" ? "auto" : "700px")};
  }
  @-moz-document url-prefix() {
    height: ${(props) => (props.layout === "other" ? "auto" : "100vh")};
    @media (max-width: 800px) {
      height: ${(props) => (props.layout === "other" ? "auto" : "60vh")};
    }
  }
`;

const HeaderContainer = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderInnerSection = styled(FlexAlignJustifyBetweenContainer)`
  z-index: 2;
  padding: 0rem 2rem;
  @media (max-width: 1024px) {
    background-color: ${colors.light};
    padding: 1.2rem 2rem;
  }
  @media (max-width: 700px) {
    padding: 1.2rem 1rem;
  }
`;
const HeaderSubInnerSection = styled(FlexAlignJustifyBetweenContainer)`
  background: ${colors.light};
  z-index: 1000;
  position: sticky;
  top: 0;
  padding: 1.2rem 2rem;
  @media (max-width: 1024px) {
    background-color: ${colors.light};
  }

  @media (max-width: 700px) {
    padding: 1.2rem 1rem;
  }
`;
const ResponsiveNavIcon = styled.img`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    padding: 0 0.5rem;
    border-radius: 0px;
    cursor: pointer;
    object-fit: cover;
    z-index: 1;
  }
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LinkText = styled.p`
  color: ${(props) =>
    props.layout === "other" ? colors.primary : colors.light};
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  line-height: 22px;
  cursor: pointer;
  text-decoration: none;
`;

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
`;

const List = styled.li`
  list-style: none;
  padding: 1.94rem 0;
  padding-right: 3.3rem;
  cursor: ${(props) => (props.cursor ? "pointer" : "default")};
  // &:nth-child(7) {
  //   padding: 0;
  // }
  @media (max-width: 1390px) {
    padding-right: 2rem;
  }
  @media (max-width: 1240px) {
    padding-right: 1rem;
  }
  &:hover ${LinkText} {
    color: ${colors.primary};
    transform: scale(1.17);
    transition: transform 0.5s;
  }
`;

const ListSubWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  > li {
    margin-right: 3.3rem;
    list-style: none;
    @media (max-width: 1390px) {
      margin-right: 2rem;
    }
    @media (max-width: 1240px) {
      margin-right: 1rem;
    }
    > a {
      color: #222222;
      font-family: "Lato-Regular";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-decoration: none;
      &:hover {
        color: ${colors.primary};
      }
    }
  }
`;
const HeroContentSection = styled(FlexAlignCenterContainer)`
  text-align: center;
  height: -webkit-fill-available;
  flex-direction: column;
  margin-bottom: 2rem;
  justify-content: center;
  > h6 {
    font-family: "Lato-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: ${colors.light};
    @-moz-document url-prefix() {
      margin-top: 17rem;
      @media (max-width: 800px) {
        margin-top: 10rem;
      }
    }
  }
  > h1 {
    color: ${colors.light};
    font-family: "Accanthis-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 110px;
    margin: 2rem 0;
    @media (max-width: 1024px) {
      font-size: 70px;
      line-height: 90px;
    }
    @media (max-width: 800px) {
      font-size: 30px;
      line-height: 43.5px;
    }
  }
`;
const HeaderImageWrapper = styled(FlexAlignCenterContainer)`
  gap: 10px;
`;
const ResponsiveAppoinmentWrapper = styled.div`
  display: none;
  button {
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 20px !important;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    padding: 0.8rem 2rem !important;
  }
  @media (max-width: 1024px) {
    display: block;
    button {
      padding: 0.8rem 1rem !important;
    }
  }
`;

const PopOver = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 154px;
  font-size: 12px;
  top: 80px;
  line-height: 6px;
  padding: 5px 15px;
  border-radius: 10px;
  margin-left: -3.5rem;
  > h5,
  p {
    color: #000 !important;
    font-family: "Lato-Regular" !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    margin: 0.75rem 0 !important;
  }

  @media (max-width: 1024px) {
    top: 70px;
    width: 90%;
    right: 2%;
    left: 0.75%;
    margin: auto;
    z-index: 15;
    align-items: start;
    border-radius: 6px;
    > h5 {
      font-family: "Accanthis-Regular" !important;
      font-style: normal !important;
      font-weight: 700 !important;
      font-size: 16px !important;
      color: ${colors.primary} !important;
    }
    > p {
      font-size: 14px !important;
    }
  }
`;
const PopOverSpan = styled.span`
  position: absolute;
  top: 64px;
  margin-left: 1rem;
  @media (max-width: 1024px) {
    top: 54px;
    right: 5%;
    z-index: 15;
  }
`;
const ResponsiveMenuContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${colors.light};
  z-index: 100000;
  height: 100vh;
  overflow-y: scroll;
  background: ${colors.light};
  border-bottom: 2px solid #0000000f;
`;
const ResponsiveMenuImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
`;

const ResponsiveMenuImage = styled.img`
  width: 3rem;
`;

const ResponsiveNav = styled.nav``;
const ResponsiveNavList = styled.ul`
  margin: 0;
  padding: 0;
`;
const ResponiveSubMenuWrapper = styled.div`
  background: ${colors.light};
  padding: 1rem 3rem;
  > h4 {
    font-family: "Accanthis-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin: 0 0 1rem 0;
    color: ${colors.primary};
  }
`;
const ResponsiveSubMenuList = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  > a {
    font-family: "Lato-Bold";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    text-decoration: none;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  > li {
    padding: 1rem 1.5rem;
    list-style: none;
    @media (max-width: 800px) {
      padding: 1rem 0;
    }
    > p {
      font-family: "Lato-Bold";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
      text-decoration: none;
      margin: 0;
      @media (max-width: 800px) {
        font-size: 12px;
      }
    }
  }
`;

const ResponsiveMenuHeader = styled(FlexAlignJustifyBetweenContainer)`
  background: #f4f4f4;
  padding: 1rem 2rem;
  margin-bottom: 0.5rem;
  &:last-child() {
    margin-bottom: 0rem;
  }
  > a {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
    line-height: 19px;
    color: ${colors.dark};
  }
`;
const ResponsiveBackground = styled.div`
  background: #000;
  opacity: 0.5;
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100vh;
`;
export {
  HeaderContainer,
  HeaderInnerSection,
  ResponsiveNavIcon,
  ListWrapper,
  HeroContentSection,
  Navbar,
  HeaderImageWrapper,
  ResponsiveAppoinmentWrapper,
  ResponsiveMenuContainer,
  ResponsiveMenuImageContainer,
  ResponsiveMenuImage,
  ResponsiveNav,
  ResponsiveNavList,
  ResponsiveMenuHeader,
  ResponsiveSubMenuList,
  ResponiveSubMenuWrapper,
  PopOver,
  PopOverSpan,
  HeaderSubInnerSection,
  ListSubWrapper,
  HeaderWrapper,
  ResponsiveBackground,
  LinkText,
  List,
};
