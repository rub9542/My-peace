import styled from "styled-components";
import variables from "../../styles/variables";

import { FlexAlignCenterContainer } from "../../styles/commonStyle";
const { colors } = variables;

const CardContainer = styled.div`
  ${(props) => props.customStyle && `position : relative;`}
  width: -webkit-fill-available;
  background-color: ${colors.light};
  height: 290px;
  margin: 0 auto;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  margin: 2rem 4rem;
  z-index: 2;
  position: relative;
  padding: 0;
  @media (max-width: 800px) {
    margin: 0;
  border-radius: 0px};
  }
  h2 {
    font-family: Accanthis-Regular;
    font-size: 32px;
    line-height: normal;
    font-weight: 400;
    letter-spacing: 0.035em;
    text-align: center;
    color: ${colors.titleColor};
    span {
      font-family: Lato-Regular;
      font-size: 16px;
      line-height: normal;
      letter-spacing: 0.02em;
      text-align: center;
      color: ${colors.subTitleColor};
      margin-top: 1rem;
    }
  }
`;

const CardWrapper = styled.div`
  padding: 2rem 0px;
`;

const CardImageWrapper = styled(FlexAlignCenterContainer)`
  width: 95%;
  margin: 0 auto;
  justify-content: center;
  gap: 10rem;
  overflow: hidden;
  ${(props) =>
    props.customStyle &&
    `
    @media (max-width: 600px) {
  .rec.rec-swipable{
    flex-direction: column !important;
  }
}
  `}
  img {
    height: 86px;
    width: 86px;
  }
  .rec.rec-arrow {
    display: none;
  }
  @media (max-width: 600px) {
    .rec.rec-arrow {
      display: block;
      background-color: #fff;
    }
  }
`;

const CardCarouselWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  img {
    max-height: 50px;
    max-width: 140px;
  }
  ${(props) =>
    props.customStyle &&
    `
    .rec-pagination{
      display:none;
    }
    @media (max-width: 600px) {
      >div{
        >div{
          button:nth-child(3){
            right:10px;
          }
        }
      }
      .rec-pagination{
        display:block;
      }
      .rec-dot_active{
        outline: none;
        background-color: rgba(36, 99, 53, 1) !important;
        width: 27.12px;
        border-radius: 20px;
        box-shadow: inset 0 0 1px 1px rgba(36, 99, 53, 1);
      }
  `}
`;
const CardCarouselArrowBtn = styled.button`
  ${(props) =>
    props.customStyle &&
    `
    @media (max-width:600px){
    position: absolute !important;
  bottom: 25px;
}
  `}
  height: 34px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${(props) => (props.isEdge ? "rgba(0, 0, 0, 0.33)" : variables.colors.dark)};
  background-color: #fff;
  svg {
    height: 16px;
    width: 30px;
  }
`;

const DotWrapperInsurence = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    bottom: 5px;
    width: 70%;
    margin: 0 3rem;
    > div {
      display: flex;
      justify-content: center;
    }
  }
`;
const CardStyle = {
  CardContainer,
  CardWrapper,
  CardCarouselArrowBtn,
  CardImageWrapper,
  CardCarouselWrapper,
  DotWrapperInsurence,
};

export default CardStyle;
