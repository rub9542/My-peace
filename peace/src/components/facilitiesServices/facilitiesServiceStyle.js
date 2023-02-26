import styled from "styled-components";

import variables from "../../styles/variables";

const { colors } = variables;
const FacilitiesServicesContainer = styled.div`
  background-color: ${colors.facilitiesServiceBg};
  border-radius: 0px 400px 0px 0px;
  padding: 2rem 3rem;
  margin: 3rem 0px;
  @media (max-width: 1080px) {
    height: fit-content;
    border-radius: 0px;
  }

  @media (max-width: 600px) {
    background-color: ${colors.light};
    padding: 2rem 1rem;
  }
`;

const FacilitiesServiceHeaderText = styled.p`
  font-family: Accanthis-Regular;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 20px;
    margin: 0;
  }
`;
const FacilitiesHeaderWrapper = styled.div`
  height: fit-content;
  width: 593px;

  @media (max-width: 767px) {
    width: fit-content;
  }
`;

const FacilitiesServiceSpan = styled.span`
  font-family: Lato-Regular;
  font-size: 16px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const FacilitiesServiceListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FacilitiesServiceListTitle = styled.p`
  font-family: Accanthis-Regular;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.01em;
  text-align: left;

  @media (max-width: 600px) {
    font-family: Accanthis-Bold;
    color: rgba(36, 99, 53, 1);
    font-size: 14px;
    line-height: 16.7px;
  }
`;

const FacilitiesListItemsWrapper = styled.div`
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: 600px) {
    margin: 1rem;
  }
`;

const FacilitiesItemDot = styled.img`
  height: 16px;
  width: 16px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const FacilitiesItem = styled.span`
  font-family: Lato-Regular;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${colors.facilitiesItem};
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const FacilitiesListContainer = styled.div``;

export {
  FacilitiesServicesContainer,
  FacilitiesServiceHeaderText,
  FacilitiesHeaderWrapper,
  FacilitiesServiceSpan,
  FacilitiesServiceListWrapper,
  FacilitiesServiceListTitle,
  FacilitiesListItemsWrapper,
  FacilitiesItemDot,
  FacilitiesItem,
  FacilitiesListContainer,
};
