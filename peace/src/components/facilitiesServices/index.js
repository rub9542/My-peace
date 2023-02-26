import React from "react";

import {
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
} from "./facilitiesServiceStyle";
import FacilitiesDot from "../../images/facilities/facilities-list-dot.png";

function index({ facilitieslist }) {
  return (
    <FacilitiesServicesContainer>
      <FacilitiesHeaderWrapper>
        <FacilitiesServiceHeaderText>Services</FacilitiesServiceHeaderText>
        <FacilitiesServiceSpan>
          Gurgaon is a town in Assam, India and was the capital of the Ahom
          kingdom for many years. It was built by the Ahom king Suklenmung in
          1540. It is said that the capital was built at the suggestion of
          MongKwang princess Nang Sao Seng from present-day Myanmar who was
          married to Suklenmung.
        </FacilitiesServiceSpan>
      </FacilitiesHeaderWrapper>
      <FacilitiesServiceListWrapper>
        {facilitieslist.map((x) => (
          <FacilitiesListContainer key={x.title}>
            <FacilitiesServiceListTitle>{x.title}</FacilitiesServiceListTitle>
            {x.nestedItem.map((y) => (
              <FacilitiesListItemsWrapper key={y.name}>
                <FacilitiesItemDot src={FacilitiesDot} />
                <FacilitiesItem>{y.name}</FacilitiesItem>
              </FacilitiesListItemsWrapper>
            ))}
          </FacilitiesListContainer>
        ))}
      </FacilitiesServiceListWrapper>
    </FacilitiesServicesContainer>
  );
}

export default index;
