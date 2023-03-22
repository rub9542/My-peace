import React from "react";
import { AnxdietyCardWrapper, CardSpanTitle } from "./anxietyCardStyle";

export default function index({
  src,
  label,
  title,
  cardHeight,
  innerHeight,
  fromLocation,
  forInternational,
}) {
  return (
    <AnxdietyCardWrapper
      cardHeight={cardHeight}
      imageheight={innerHeight}
      fromPath={fromLocation}
      intStyle={forInternational}
    >
      <img src={src} alt={label} />
      <p>
        {title && (
          <CardSpanTitle>
            {title.toUpperCase()}
          </CardSpanTitle>
        )}
        <br />
        {label}
      </p>
    </AnxdietyCardWrapper>
  );
}
