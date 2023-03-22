import React from "react";

import FirstStep from "../../images/recoveryJourney/firststep.png";
import SecondFifthStep from "../../images/recoveryJourney/secondfivestep.png";
import ThirdStep from "../../images/recoveryJourney/thirdstep.png";
import FourthStep from "../../images/recoveryJourney/fourthstep.png";
import MobFirstThirdStep from "../../images/recoveryJourney/mob_step1and3.png";
import MobSecondStep from "../../images/recoveryJourney/mob_step2.png";
import MobFourthStep from "../../images/recoveryJourney/mob_step4.png";
import MobFifthStep from "../../images/recoveryJourney/mob_step5.png";

import {
  YogaContainer,
  HeaderText,
  PsychiatricContainer,
  TextCardWrapper,
  ParagraphText,
  SecondaryTextWrapper,
  PaddingDiv,
  ContentImageWrapper,
  ContentSubWrapper,
} from "./recoveryStyle";

const totalData = [
  {
    title: "Check In",
    subTitle: "Step 1",
    imagePath: FirstStep,
    mobImagePath: MobFirstThirdStep,
    description: [
      {
        option: "Clinical and Financial Forms completed",
      },
      {
        option: "IPD Check-In with assigned Nurse",
      },
      {
        option: "Hospital Rules explained",
      },
    ],
  },
  {
    title: "Settling In",
    subTitle: "Step 2",
    imagePath: SecondFifthStep,
    mobImagePath: MobSecondStep,
    description: [
      {
        option: "The doctor's prescription administered ",
      },
      {
        option: "Psychometric Testing initiated",
      },
      {
        option: "A psychiatrist visit ",
      },
      {
        option: "A psychologist visit ",
      },
      {
        option: "An art therapist visit",
      },
      {
        option: "Daily updates to the family",
      },
    ],
  },

  {
    title: "Recovery",
    subTitle: "Step 3",
    imagePath: ThirdStep,
    mobImagePath: MobFirstThirdStep,
    description: [
      {
        option: "Daily Psychiatrist visits ",
      },
      {
        option: "Daily therapy sessions with a Clinical Psychologist",
      },
      {
        option: "Daily Art Therapy sessions",
      },
      {
        option: "Daily yoga and physiotherapy sessions ",
      },
      {
        option: "Daily recreational activities ",
      },
      {
        option: "Gourmet meals ",
      },
      {
        option: "Dietician consultation ",
      },
      {
        option: "Weekly family therapy and updates",
      },
    ],
  },
  {
    title: "Discharge",
    subTitle: "Step 4",
    imagePath: FourthStep,
    mobImagePath: MobFourthStep,
    description: [
      {
        option: "Discharge planning (2-3 days) ",
      },
      {
        option: "Discharge Psychometric Testing ",
      },
      {
        option: "Family counselling scheduled ",
      },
      {
        option: "Pre-discharge procedures initiate",
      },
    ],
  },
  {
    title: "Recovery",
    subTitle: "Step 5",
    imagePath: SecondFifthStep,
    mobImagePath: MobFifthStep,
    description: [
      {
        option: "Personalised recovery plan",
      },
      {
        option: "Follow up appointments scheduled ",
      },
      {
        option: "Online and offline sessions are available",
      },
    ],
  },
];

export default function RecoveryComponent() {
  return (
    <div>
      {totalData.map((data, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <PsychiatricContainer>
              <PaddingDiv></PaddingDiv>
              <SecondaryTextWrapper key={data.index}>
                <HeaderText>{data.subTitle}</HeaderText>
                <h4>{data.title}</h4>
                <ParagraphText>
                  {data.description.map((listData, index) => (
                    <p key={listData.option}>
                      {index + 1}. {listData.option}
                    </p>
                  ))}
                </ParagraphText>
              </SecondaryTextWrapper>
              <>
                <ContentImageWrapper>
                  <img alt="step-images" src={data.imagePath} />
                </ContentImageWrapper>
                <ContentSubWrapper>
                  <img alt="step-images" src={data.mobImagePath} />
                </ContentSubWrapper>
              </>
            </PsychiatricContainer>
          ) : (
            <YogaContainer>
              <TextCardWrapper>
                <HeaderText>{data.subTitle}</HeaderText>
                <h4>{data.title}</h4>
                <ParagraphText>
                  {data.description.map((listData, index) => (
                    <p key ={listData.option}>
                      {index + 1}. {listData.option}
                    </p>
                  ))}
                </ParagraphText>
              </TextCardWrapper>

              <>
                <ContentImageWrapper>
                  <img alt="step-images" src={data.imagePath} />
                </ContentImageWrapper>
                <ContentSubWrapper>
                  <img alt="step-images" src={data.mobImagePath} />
                </ContentSubWrapper>
              </>
            </YogaContainer>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
