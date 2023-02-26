import React from "react";
import {  AwardCardWrapper,  TextWrapper,  HeadingStyle, ContentText} from "./facilitiesAwardStyle";

export default function AwardCard({ heading, src, label }) {
  return (
    <AwardCardWrapper>
      <img src={src} alt={label} />
      <TextWrapper>
        <HeadingStyle>{heading}</HeadingStyle>
        <ContentText>{label}</ContentText>
      </TextWrapper>
    </AwardCardWrapper>
  );
}
