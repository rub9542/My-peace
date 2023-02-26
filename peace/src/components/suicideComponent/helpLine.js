import React from "react";
import {
  SuicideHelplineContainer,
  HelpLineWtrapper,
  HelplineImageContainer,
} from "./suicideStyle";
import MaxLifeline from "../../images/suicide/max-lifeline.png";
import MaxCrisis from "../../images/suicide/max-crisisLine.png";
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
        <p>Helpline</p>
        <span>
          If you or someone you know is having thoughts of suicide, a prevention
          hotline can help
        </span>
      </HelpLineWtrapper>
      <HelplineImageContainer>
        {imageArr.map((x, index) => (
          <img src={x.img} key={index} alt="imgSuicide"/>
        ))}
      </HelplineImageContainer>
    </SuicideHelplineContainer>
  );
}

export default HelpLine;
