import styled from "styled-components";

import {
  DefaultParagraphText,
  SectionWithFlowerBg,
} from "../../styles/commonStyle";

const OurDoctorsSectionWrapper = styled(SectionWithFlowerBg)`
  padding: 2rem 4rem 2rem 2.5rem;
  > div {
    text-align: center;
  }
  @media (max-width: 1024px) {
    background: transparent;
  }
  @media (max-width: 600px) {
    h2,
    p {
      text-align: left;
    }
    padding: 2rem 2.5rem 2rem 2.5rem;
  }
`;
const OurDoctorsSectionParagraphText = styled(DefaultParagraphText)`
  line-height: 257.3%;
  width: 73%;
  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
  }
`;

const DoctorCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin: 1.5rem 0;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export {
  OurDoctorsSectionWrapper,
  OurDoctorsSectionParagraphText,
  DoctorCardsWrapper,
};
