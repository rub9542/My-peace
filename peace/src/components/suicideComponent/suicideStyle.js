import styled from "styled-components";

const SuicidemainWrapper = styled.main`
  @media (max-width: 1024px) {
    > section {
      display: flex;
      flex-direction: row;
    }
  }
  @media (max-width: 950px) {
    > section {
      > div {
        width: max-content;
      }
      img {
        display: none;
      }
    }
  }
  @media (max-width: 600px) {
    > section {
      > div {
        padding: 2rem 1rem;
        h2,
        p {
          text-align: left;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
`;
const SuicideHelplineContainer = styled.div`
  height: 290px;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  margin: 0 3rem;

  @media (max-width: 900px) {
    height: fit-content;
    margin: 0;
    border-radius: 0px;
  }
`;

const HelpLineWtrapper = styled.div`
  text-align: center;
  color: rgba(61, 61, 61, 1);
  padding: 1rem 0;
  p {
    font-family: Accanthis-Regular;
    font-size: 32px;
    letter-spacing: 0.035em;
    text-align: center;
    margin: 1rem 0rem;
  }
  span {
    font-family: Lato-Regular;
    font-size: 20px;
    letter-spacing: 0.035em;
    text-align: center;
  }

  @media (max-width: 900px) {
    text-align: center;
    p {
      font-size: 20px;
    }
    span {
      font-size: 14px;
    }
  }
`;

const HelplineImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 149px;
  padding: 1rem 0;

  img {
    max-height: 90px;
    width: fit-content;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
    img {
      max-height: 60px;
      max-width: 232.8px;
    }
  }
`;

const ThoughtsContainer = styled.div`
  padding: 2rem 3rem;
  p {
    font-family: Accanthis-Bold;
    font-size: 48px;
    line-height: 62px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgba(51, 27, 59, 1);
    margin-bottom: 0.5rem;
  }
  span {
    font-family: Lato-Regular;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(61, 61, 61, 1);
  }

  @media (max-width: 900px) {
    padding: 2rem 1rem;
    p {
      font-size: 20px;
      line-height: 21.26px;
    }
    span {
      font-size: 14px;
    }
  }
`;

const ThoughtsWrapper = styled.div`
  display: flex;
  padding: 2rem 0rem;
  gap: 25px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ThoughtsImageWrapper = styled.div`
  img {
    height: 314px;
    width: 386px;
  }
  @media (max-width: 900px) {
    img {
      height: 188px;
      width: 100%;
    }
  }
`;

const ThoughtsWrappertext = styled.div`
  > p {
    font-family: Lato-Semibold;
    font-size: 36px;
    // line-height: 86px;
    letter-spacing: 0.02em;
    text-align: left;
    margin: 0;
    color: rgba(38, 50, 56, 1);
  }
  > div {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 36px;
  }
  @media (max-width: 900px) {
    > p {
      font-size: 20px;
      line-height: 21.26px;
    }
    > div {
      padding: 1rem 0;
    }
  }
`;

const ThoughtsList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  > img {
    height: 18px;
    width: 18px;
  }
  > span {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
  }

  @media (max-width: 900px) {
    > span {
      font-size: 14px;
    }
  }
`;
export {
  SuicideHelplineContainer,
  HelpLineWtrapper,
  HelplineImageContainer,
  ThoughtsWrappertext,
  ThoughtsContainer,
  ThoughtsWrapper,
  ThoughtsImageWrapper,
  ThoughtsList,
  SuicidemainWrapper,
};
