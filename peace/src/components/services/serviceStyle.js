import FacilitiesStyle from "../facilities/facilitiesStyle";
import styled from "styled-components";
import variables from "../../styles/variables";
import { FlexAlignJustifyCenterContainer } from "../../styles/commonStyle";
import serviceBackground from "../../images/homePage/serviceBg.png";

const { colors } = variables;
const ServiceWrapper = styled(FacilitiesStyle.FacilitiesWrapper)`
  backdrop-filter: blur(5px);
  width: 46%;
  border-radius: 0px;
  position: absolute;
  top: 0;
  width: 46%;
  background: linear-gradient(rgba(0, 0, 0, 0.43) 100%, rgba(0, 0, 0, 0) 100%);
  padding: 0rem 4rem;
  backdrop-filter: blur(5px);
  bottom: 4px;
  @media (max-width: 1150px) {
    position: static;
    background: url(${serviceBackground});
    width: 100%;
    padding: 6rem 1rem 2rem 0.75rem;
`;
const ServiceImage = styled(FacilitiesStyle.FacilitiesImage)`
  height: 30rem;
`;

const ServiceContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;
const ServiceContainerDescription = styled(
  FacilitiesStyle.FacilitiesDescription
)`
  margin: 0;
`;
const ServiceDropPoint = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5%;
  left: 5.5%;
  background: #fff;
  width: 50.61px;
  height: 50px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const ServiceDropContent = styled.div`
  max-height: 18rem;
  background: #fff;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  font-family: Lato-Semibold;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
  border-top-right-radius: 6%;
  border-bottom-left-radius: 6%;
  border-bottom-right-radius: 6%;
`;
const ServiceDropSection = styled.div`
  cursor: pointer;
  position: absolute;
  width: 18rem;
  top: 18%;
  left: 7.5%;
  z-index: 3;
`;
const ServiceDropList = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;
const ServiceDropListPointer = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  margin-left: 10px;
  border-bottom: 15px solid #fff;
`;
const ServiceDropListTitle = styled.div`
  padding: 0 0 9px 24px;
  font-family: Lato-Semibold;
  width: 91%;
  font-size: 20px;
  color: #13443e;
`;
const ServiceDropListItem = styled.div`
  padding: 1rem 1.5rem;
  :hover {
    background: rgba(85, 144, 103, 0.11);
  }
`;
const ServiceFacilitiesContainer = styled(FacilitiesStyle.FacilitiesContainer)`
  margin-bottom: -2px;
  @media (max-width: 800px) {
    margin: auto;
  }
`;
const ServiceTextWrapper = styled.div`
  height: 100%;
  padding: 2rem 4rem;
  background: #edf0ee;
  display: flex;
  flex-direction: column;
  @media (max-width: 1150px) {
    padding: 1rem;
  }
`;
const ServiceIconContainer = styled.div`
  margin-bottom: 1rem;
  background: #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 99px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ServiceSpanTitle = styled.span`
  font-family: Lato-Bold;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 1rem;
`;
const ServiceSpanContent = styled.span`
  font-family: Lato-Regular;
  font-size: 16px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
`;

const ServiceListContainer = styled.ul``;
const ServiceListContainerItem = styled.li`
  padding: 0 0 0 1rem;
  display: flex;
`;
const ServiceListDot = styled.div`
  height: 10px;
  width: 10px;
  background: #fff;
  align-self: center;
  margin-right: 12px;
  border-radius: 50%;
`;
const ServiceListItemsWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ServiceItemDot = styled.img`
  height: 16px;
  width: 16px;
`;
const ServiceItem = styled.span`
  font-family: Lato-Regular;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${colors.facilitiesItem};
`;
const ServiceArrow = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  position: relative;
`;
const ServiceArrowLeft = styled.span`
  margin-right: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.33);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderSingleArrow = styled.span``;
const ServiceArrowLeftContainer = styled.span`
  position: absolute;
  left: 3rem;
  display: flex;
  align-items: center;
`;
const ServiceArrowRightContainer = styled.span`
  position: absolute;
  right: 3rem;
  display: flex;
  align-items: center;
`;
const ServiceArrowRight = styled.span`
  margin-left: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.33);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CarouselContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
`;
const ArrowWrapper = styled(FlexAlignJustifyCenterContainer)`
  cursor: pointer;
  border: 2px solid ${variables.colors.dark};
  border-radius: 50%;
  width: 35px;
  height: 34px;
  @media (max-width: 800px) {
    width: 25px;
    height: 24px;
  }
`;
const InsideWrapper = styled.div`
  display: flex;
  align-items: center;
  > p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin: 0.5rem;
    cursor: pointer;
    &:hover {
      color: ${colors.primary};
    }
    @media (max-width: 800px) {
      font-size: 10px;
    }
  }
`;
const ServiceDescription = styled.p`
  font-family: Lato-Regular;
  font-size: 16px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${colors.light};
  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 28px;
    margin: 0;
  }
`;
const ServiceMainText = styled(ServiceTextWrapper)`
  > p {
    font-size: 16px;
    font-family: Lato-Regular;
    font-weight: 400;
    line-height: 35px;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`;
const ServiceMainTextWrapper = styled(ServiceItem)`
  font-size: 16px;
  line-height: 35px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export {
  ServiceArrow,
  SliderSingleArrow,
  ServiceArrowLeft,
  ServiceArrowRight,
  ServiceSpanContent,
  ServiceIconContainer,
  ServiceFacilitiesContainer,
  ServiceWrapper,
  ServiceTextWrapper,
  ServiceContainer,
  ServiceListItemsWrapper,
  ServiceItemDot,
  ServiceDropList,
  ServiceSpanTitle,
  ServiceDropListItem,
  ServiceDropPoint,
  ServiceItem,
  ServiceDropContent,
  ServiceDropListTitle,
  ServiceDropListPointer,
  ServiceContainerDescription,
  ServiceDropSection,
  ServiceListContainerItem,
  ServiceListDot,
  ServiceImage,
  ServiceArrowRightContainer,
  ServiceArrowLeftContainer,
  ServiceListContainer,
  CarouselContainer,
  ButtonContainer,
  ArrowWrapper,
  InsideWrapper,
  ServiceDescription,
  ServiceMainText,
  ServiceMainTextWrapper,
};
