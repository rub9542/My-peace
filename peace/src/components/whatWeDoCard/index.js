import React from "react";

import {
  WhatWeDoCardDescription,
  WhatWeDoCardHeader,
  WhatWeDoCardWrapper,
  VisionImageWrapper,
} from "./whatWeDoCardStyle";

export default function index({ cardObj, cardfor }) {
  return (
    <WhatWeDoCardWrapper>
      {cardfor === "vision" ? (
        <VisionImageWrapper>
          <img alt={cardObj.title} src={cardObj.path} />
        </VisionImageWrapper>
      ) : (
        <img alt={cardObj.title} src={cardObj.path} />
      )}
      <WhatWeDoCardHeader>{cardObj.title}</WhatWeDoCardHeader>
      <WhatWeDoCardDescription>{cardObj.description}</WhatWeDoCardDescription>
    </WhatWeDoCardWrapper>
  );
}
