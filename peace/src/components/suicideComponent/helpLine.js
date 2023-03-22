import React from "react";
import {
  SuicideHelplineContainer,
  HelpLineWtrapper,
  HelplineImageContainer,
} from "./suicideStyle";
import MaxLifeline from "../../images/suicide/max-lifeline.png";
import MaxCrisis from "../../images/suicide/max-crisisLine.png";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";

function HelpLine() {
  const imageArr = [
    {
      img: MaxLifeline,
    },
    {
      img: MaxCrisis,
    },
  ];
  return (
    <SuicideHelplineContainer>
      <HelpLineWtrapper>
        <SecondaryHeaderTitle
          title={"Helpline"}
          subTitle={
            "If You Or Someone You Know Is Having Thoughts Of Suicide, A Prevention Hotline Can Help"
          }
        />
      </HelpLineWtrapper>
      <HelplineImageContainer>
        {imageArr.map((x) => (
          <img src={x.img} key={x.img} alt="imgSuicide" />
        ))}
      </HelplineImageContainer>
    </SuicideHelplineContainer>
  );
}

export default HelpLine;
