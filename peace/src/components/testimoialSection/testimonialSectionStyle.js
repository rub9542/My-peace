import styled from "styled-components";

import {
  FlexAlignJustifyBetweenContainer,
  FlexAlignJustifyCenterContainer,
  FlexContainer,
} from "../../styles/commonStyle";
import variables from "../../styles/variables";

const TesitimonialSectionWrapper = styled.section`
  padding-left: 2rem;
  margin: 3rem 0;
  margin-left: 2rem;
  background-position-y: 52px;
  @media (max-width: 1024px) {
    background: #EDF0EE;
    padding-top:2rem;
  }
  @media (max-width: 800px) {
    margin-left: 0;
    padding-left: 0;
  }
`;
const TestimonialHeader = styled.h2`
font-family: 'Accanthis-Bold';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 109.3%;
letter-spacing: -0.01em;
color: #331B3B;
margin:0;
@media (max-width: 1024px) {
  text-align:center;
}
`
const TestimonialSubHeader = styled(TestimonialHeader)`
margin-bottom:2rem;
font-family: 'Accanthis-Regular';
font-weight:400;
@media (max-width: 1024px) {
  text-align:center;
}
`
const TesitimonialInnerSectionWrapper = styled.div`
background: #EDF0EE;
border-radius:400px 0 0 0;
@media (max-width: 1024px) {
  border-radius:0;
}
`;
const TesitimonialCarouselSectionWrapper = styled.div`
padding-left:11rem;
position:relative;
z-index:1;
@media (max-width: 1024px) {
  padding-left:0;
}
`;
const TesitimonialContainer = styled.div`
  position: relative;
`;
const SliderArrowsDotsSection = styled(FlexAlignJustifyBetweenContainer)`
    padding: 1.5rem 1.5rem 2rem 0px;
    position: relative;
    left: -8rem;
    @media (max-width: 1024px) {
      left: 0rem;
    }
    @media (max-width: 800px) {
      padding: 1.5rem 1rem;
    }
`;
const SliderCustomArrows = styled(FlexContainer)`
width: 100%;
`;
const SliderSingleArrow = styled(FlexAlignJustifyCenterContainer)`
  margin-right: 1rem;
  cursor:pointer;
  border: 2px solid
    ${(props) =>
    props.initialCount
      ? variables.colors.borderColor
      : variables.colors.dark};
  border-radius: 50%;
  width: 35px;
  height: 34px;
  @media (max-width: 800px) {
    width: 25px;
    height: 24px;
  }
`;
const SubClickArrow = styled.div`
cursor:pointer;
z-index: 1000;
`

const DotWrapper = styled.div`
  height: 2rem;
  margin-right:0.5rem;
  gap: 10px;
`;
const DotItem = styled.div`
  height: 12px;
  width: ${(props) => (props.active ? "36.8px" : "12.800000190734863px")};
  border-radius: 50px;
  background-color: ${(props) =>
    props.active ? variables.colors.primary : variables.colors.borderColor};
  cursor: pointer;
  transform: translate3d(0px, 0px, 0px);
`;
const DashedCircleDiv = styled.div`
  height: 460px;
  width: 500.58758544921875px;
  border: 2px dashed rgba(0, 0, 0, 0.26);
  position: absolute;
  border-radius: 50%;
  bottom: -3rem;

  @media (max-width:1024px){
    display:none;
  }
`;
export {
  TesitimonialSectionWrapper,
  TesitimonialInnerSectionWrapper,
  TesitimonialCarouselSectionWrapper,
  SliderArrowsDotsSection,
  SliderCustomArrows,
  SliderSingleArrow,
  DotWrapper,
  TestimonialHeader,
  TestimonialSubHeader,
  DotItem,TesitimonialContainer,DashedCircleDiv,
  SubClickArrow
};
