import React from "react";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import { HeaderArray, SubArray } from "./termsAndConditionData";
import {
  ContentHeaderWrapper,
  ContentMapWrapper,
  ContentParagraphWrapper,
  ContentSubHeader,
} from "./termsAndConditionStyle";

export default function TacContent() {
  return (
    <ContentHeaderWrapper>
      <SecondaryHeaderTitle title="Terms and Condition" subTitle="" />
      <ContentParagraphWrapper>
        {HeaderArray &&
          HeaderArray.map((subHead) => <p>{subHead.description} </p>)}
      </ContentParagraphWrapper>
      <ContentSubHeader>
        {SubArray &&
          SubArray.map((list) => (
            <ContentMapWrapper>
              <h4>{list.title} </h4>
              <p>{list.subTitle}</p>
              {list.nestedArray.map((subList) => (
                <ul>
                  <li>{subList.description}</li>
                </ul>
              ))}
            </ContentMapWrapper>
          ))}
      </ContentSubHeader>
    </ContentHeaderWrapper>
  );
}
