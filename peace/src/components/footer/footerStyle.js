import styled from "styled-components";
import variables from "../../styles/variables";

const { colors } = variables;

const FooterMargin = styled.section`
  margin-top: 5rem;
  background-color: #2a3439;
`;

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  @media (max-width: 800px) {
    padding: 2rem;
  }
`;
const FooterLogoContainer = styled.div`
  display: flex;
`;
const FooterMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 0;
  border-bottom: 1px solid #fff;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const SukoonFooterLogo = styled.div`
  background-color: #fff;
  padding: 5px 20px;
  border-radius: 10px;
`;
const FooterIcon = styled.div`
  padding: 1.5rem 0 0.5rem 0;
  margin-left: 5px;
`;
const FooterIconPadding = styled.div`
  padding-right: 2rem;
`;
const IconFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterText = styled.div`
  margin-top: 1rem;
  > div {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
    color: #fff;
    padding-bottom: 1rem;
    gap: 0.5rem;
    display: flex;
  }
`;
const FooterImageWrapper = styled.div`
  .gatsby-image-wrapper-constrained {
    vertical-align: middle !important;
  }
`;
const FooterTextHeader = styled.div`
  > p {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #fff;
  }
`;

const FooterLinkText = styled.div`
  > p {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }
  > a {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
    line-height: 24px;
    padding-bottom: 10px;
    color: ${colors.light};
  }
`;
const FooterSpanDiv = styled.span`
  display: inline-flex;
  padding: 0 10px 0 5px;
`;
const FooterQuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const QuickLinkMenu = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const FacilitiesMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterCopyRights = styled.div`
  display: flex;
  justify-content: center;
  > p {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    margin: 0;
    padding-top: 2rem;
  }
`;

// ResponsiveDesign

const QuickLinkSubMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 42%;
  @media (max-width: 850px) {
    width: 97%;
  }
`;

const QuickLinkContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 42%;
  @media (max-width: 850px) {
    flex-direction: row;
    width: 100%;
    margin-top: -1rem;
  }
`;

const FooterResponsive = styled.div`
  @media (max-width: 850px) {
    display: flex;
    align-self: start;
  }
`;

const FooterStyle = {
  FooterLogoContainer,
  FooterMainContainer,
  FooterContainer,
  FooterMargin,
  SukoonFooterLogo,
  FooterIcon,
  FooterIconPadding,
  IconFlex,
  FooterText,
  FooterSpanDiv,
  FooterTextHeader,
  FooterLinkText,
  FooterQuickLinks,
  QuickLinkMenu,
  FacilitiesMenu,
  FooterCopyRights,
  FooterResponsive,
  QuickLinkSubMenu,
  QuickLinkContact,
  FooterImageWrapper,
};
export default FooterStyle;
