import styled from "styled-components";

const MainSectionWrapper = styled.section`
  padding: 0 3rem;

  @media (max-width: 600px) {
    padding: 3rem 0 0 0;
  }
`;
const MediaWrapper = styled.div`
  display: flex;
  padding: 2rem 0 1rem 0;
  cursor: pointer;
  @media (max-width: 600px) {
    padding: 0 1rem;
    align-items: center;
    > div {
      > svg {
        height: 12px;
        width: 6.782608509063721px;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;
const BackWrapper = styled.div`
  > p {
    margin: 0;
    margin-top: -14px;
    padding: 0 5px;
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 62px;
    color: #263238;
  }
  @media (max-width: 600px) {
    > p {
      font-family: "Lato-Regular";
      font-size: 14px;
      margin: 0;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
  }
`;
const MainImageWrapper = styled.div`
  > img {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    > img {
      height: 209px;
    }
  }
`;

const MentalHealth = styled.div`
  > p {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 43px;
    padding-bottom: 1rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
    > p {
      font-size: 14px;
      line-height: 28px;
      letter-spacing: 0.02em;
      text-align: left;
    }
  }
`;
const MentalHealthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > h4 {
    font-family: "Accanthis-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 46px;
    margin: 0;
    padding: 2rem 0 1rem 0;
  }

  @media (max-width: 600px) {
    > h4 {
      font-size: 20px;
      line-height: 21px;
      letter-spacing: -0.01em;
      text-align: left;
    }
  }
`;
const DepressionWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
const DepressionContent = styled.div`
  width: 70%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  > h3 {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 86px;
    margin: 0;
  }
  > p {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 43px;
    margin: 0;
  }
  @media (max-width: 600px) {
    // padding: 0 1rem;
    > h3 {
      font-family: "Lato-Bold";
      font-size: 20px;
    }
    > p {
      font-family: Lato-Regular;
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.02em;
      text-align: left;
      padding: 0 0 1rem 0;
    }
  }
`;
const DepressionImage = styled.div`
  padding-right: 2rem;
  @media (max-width: 1024px) {
    padding-right: 0;
    display: flex;
    justify-content: center;
  }
`;
const AnxietyImage = styled.div`
  padding-left: 2rem;
  @media (max-width: 1024px) {
    padding-left: 0;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 600px) {
    // padding: 0 1rem;
  }
`;
const AnxietyWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
const SocialIcon = styled.div`
  padding: 2.25rem 2rem 0 0;
  display: flex;
  gap: 20px;
  img {
    height: 36px;
    width: 40px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
const SingleSectionPadding = styled.div`
  padding: 2rem 0;
`;

export {
  SingleSectionPadding,
  MediaWrapper,
  BackWrapper,
  MainSectionWrapper,
  MainImageWrapper,
  MentalHealthHeader,
  DepressionWrapper,
  DepressionContent,
  DepressionImage,
  AnxietyImage,
  AnxietyWrapper,
  MentalHealth,
  SocialIcon,
};
