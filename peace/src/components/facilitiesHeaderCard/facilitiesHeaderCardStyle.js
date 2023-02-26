import styled from "styled-components";

import FacilitiesHeader from "../../images/facilities/facilities_header_bg.png";
import variables from "../../styles/variables";

const { colors } = variables;

const FacilitiesHeaderCardContainer = styled.div`
  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : `url(${FacilitiesHeader})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px;
  padding: 10rem 5rem;

  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    padding: 5rem 2rem;
  }
`;

const FacilitiesLabel = styled.p`
  font-family: Lato-Bold;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    display: none;
  }
`;
const FacilitiesSpanWrapper = styled.span`
  font-family: Lato-Regular;
  font-size: 16px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
`;

const FacilitiesContainer = styled.div`
  width: 655px;
  background: ${colors.facilitiesTextColor};
  border-radius: 8px;

  @media (max-width: 800px) {
    height: fit-content;
  }
  @media (max-width: 1024px) {
    h2 {
      text-align: left;
    }
  }
`;
const FacilitiesTextWrapper = styled.div`
  padding: 1.5rem;
  h2 {
    color: rgba(16, 16, 16, 1);
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 20px !important;
    }
    span {
      margin: 0;
    }
  }
`;

const FacilitiesButton = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;
  }
`;
export {
  FacilitiesHeaderCardContainer,
  FacilitiesLabel,
  FacilitiesSpanWrapper,
  FacilitiesContainer,
  FacilitiesTextWrapper,
  FacilitiesButton,
};
