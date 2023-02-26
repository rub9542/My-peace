import React from "react";

import {
  FlowerImage,
  WhatWeDoInnerSectionWrapper,
  WhatWeDoSectionWrapper,
  DashedCircleDiv,
  WhatWEDoContainer,
  WhatWeDoheaderContainer,
} from "./whatWeDoSectionStyle";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import WhatWeDoCard from "../whatWeDoCard";
import FlowerBgImage from "../../images/homePage/whatwedo.png";

export default function index({
  titleProp,
  fromPath,
  dataArray,
  noBackImage,
  paddingStyle,headerResponsivepadding
}) {
  return (
    <WhatWEDoContainer>
      <WhatWeDoSectionWrapper forBg={fromPath}>
        <WhatWeDoheaderContainer style={paddingStyle}>
          <SecondaryHeaderTitle
            title={titleProp ? titleProp : "What We Do"}
            subTitle="Why Choose us?"
          />
        </WhatWeDoheaderContainer>
        <WhatWeDoInnerSectionWrapper styleFor={fromPath}>
          {dataArray.map((dataObj, idx) => (
            <WhatWeDoCard
              key={dataObj.title}
              cardObj={dataObj}
              cardfor={fromPath}
            />
          ))}
        </WhatWeDoInnerSectionWrapper>
        {noBackImage ? (
          <></>
        ) : (
          <FlowerImage alt="background " src={FlowerBgImage} />
        )}
      </WhatWeDoSectionWrapper>
      <DashedCircleDiv />
    </WhatWEDoContainer>
  );
}
