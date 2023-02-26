import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  YogaContainer,
  PsychiatricContainer,
  TextCardWrapper,
  ParagraphText,
  SecondaryTextWrapper,
} from "./weeklyRoutineStyle";

const totalData = [
  {
    title: "Yoga",
    description:
      "Our fitness therapists have designed effective classes that will help you recover both physically and mentally",
  },
  {
    title: "Psychiatric Consult",
    description:
      "Meet with your dedicated Psychiatrist! We will ensure that you receive personalized medical care and attention.",
  },
  {
    title: "Mental Gym",
    description:
      "Meet with your dedicated Psychiatrist! We will ensure that you receive personalized medical care and attention.",
  },
  {
    title: "Nutritionist",
    description:
      "Our Clinical nutritionist will plan your meals tailor-made to your health requirements. It is important to us that you eat right!",
  },
  {
    title: "Psychotherapy session",
    description:
      "Build emotional strength and resilience in therapy with your clinical psychologist in a private and comfortable environment",
  },
  {
    title: "Art Therapy session",
    description:
      "Freely express yourself using drawing, painting, crafts, clay, music, storytelling, creative writing, or movement.",
  },
  {
    title: "Recreational Activities",
    description:
      "Unwind with some recreational activities such as board games, movie screenings to relieve stress. It also helps with sleep regulation.",
  },
  {
    title: "Progress Monitoring",
    description:
      "Consult with your doctor again to review your progress. We believe in round the clock care.",
  },
  {
    title: "Physiotherapy",
    description:
      "Our physical therapist will conduct a one on one session to address your body aches and pains. It is essential for your sustained recovery.",
  },
  {
    title: "Night Check-up",
    description:
      "Before you hit the bed, our doctor on duty will check on you to ensure that you are geared for a good night's sleep.",
  },
];

export default function YogaContent() {
  return (
    <div>
      {totalData.map((data, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <YogaContainer key={data.title}>
              <TextCardWrapper>
                <h2>{data.title}</h2>
                <ParagraphText>{data.description}</ParagraphText>
              </TextCardWrapper>

              <div>
                <StaticImage
                  alt="Yoga image"
                  src="../../images/weeklyRoutine/yoga.png"
                />
              </div>
            </YogaContainer>
          ) : (
            <PsychiatricContainer key={index}>
              <SecondaryTextWrapper key={index}>
                <h2>{data.title}</h2>
                <ParagraphText>{data.description}</ParagraphText>
              </SecondaryTextWrapper>

              <div>
                <StaticImage
                  alt="Yoga image"
                  src="../../images/weeklyRoutine/yoga.png"
                />
              </div>
            </PsychiatricContainer>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
