import React from "react";

import FacilitiesStyle from "./facilitiesStyle";
import { facilitiesData } from "./facilitiesData";
import { OutlineLargeButton } from "../button";
import { Link } from "gatsby";

function Facilities() {
  return (
    <>
      {facilitiesData.map((x, index) => {
        return (
          <FacilitiesStyle.FacilitiesContainer bg={x.imagePath} key={x.title}>
            <FacilitiesStyle.FacilitiesImage src={x.imagePath} />
            <FacilitiesStyle.FacilitiesWrapper
              isEven={(index + 1) % 2 === 0 ? true : false}
            >
              <FacilitiesStyle.FacilitiesTextWrapper>
                <FacilitiesStyle.FacilitiesTitle>
                  {x.title}
                </FacilitiesStyle.FacilitiesTitle>{" "}
                <FacilitiesStyle.FacilitiesSubTitle>
                  {x.subtitle}
                </FacilitiesStyle.FacilitiesSubTitle>
                <br />
                <FacilitiesStyle.FacilitiesDescription>
                  {x.description}
                </FacilitiesStyle.FacilitiesDescription>
                <Link to={x.urlPath}>
                  <OutlineLargeButton />
                </Link>
              </FacilitiesStyle.FacilitiesTextWrapper>
            </FacilitiesStyle.FacilitiesWrapper>
          </FacilitiesStyle.FacilitiesContainer>
        );
      })}
    </>
  );
}

export default Facilities;
