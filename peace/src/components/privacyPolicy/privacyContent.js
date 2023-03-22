import React from "react";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import { HeaderArray, SubArray } from "./privacyPolicyData";
import {
  ContentPrivacyInnerWrapper,
  ContentPrivacyParagraph,
  ContentPrivacySubHeader,
  ContentPrivacyWrapper,
} from "./privacyPolicyStyle";

export default function PrivacyContent() {
  return (
    <ContentPrivacyWrapper>
      <SecondaryHeaderTitle title="Privacy policy" subTitle="" />
      <ContentPrivacyParagraph>
        {HeaderArray &&
          HeaderArray.map((subHead) => <p>{subHead.description} </p>)}
      </ContentPrivacyParagraph>
      <ContentPrivacySubHeader>
        {SubArray &&
          SubArray.map((list) => (
            <ContentPrivacyInnerWrapper>
              <h4>{list.title} </h4>
              {list.subTitle ? <p>{list.subTitle}</p> : null}
              {list.nestedArray.map((subList) => (
                <>
                  {subList.description ? (
                    <ul>
                      <li>{subList.description}</li>
                    </ul>
                  ) : null}
                  {subList.subDescription ? (
                    <p>{subList.subDescription} </p>
                  ) : null}
                  {subList.finalDescription ? (
                    <p>
                      <i>{subList.finalDescription}</i>{" "}
                    </p>
                  ) : null}
                </>
              ))}
            </ContentPrivacyInnerWrapper>
          ))}
      </ContentPrivacySubHeader>
    </ContentPrivacyWrapper>
  );
}
