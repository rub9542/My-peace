import styled from "styled-components";

const AboutUSWrapper = styled.div`
  padding: 3rem;
  position: relative;
  > button {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem 1rem;

    > button {
      display: none;
    }
  }
`;

const AboutUstextContainer = styled.div`
  width: 50%;
  > h2 {
    font-size: 44px;
  }
  > span {
    font-family: Lato-Regular;
    font-size: 16px;
    line-height: 38px;
    letter-spacing: 0.02em;
    text-align: left;
  }

  @media (max-width: 900px) {
    width: 100%;
    text-align: left;
    > h2 {
      text-align: left;
      margin-bottom: 1rem;
      font-size: 20px;
    }
    > span {
      font-size: 14px;
    }
  }
`;

const AboutUSHeaderBgImage = styled.img`
  position: absolute;
  top: 5rem;
  right: 0;
  width: fit-content;

  @media (max-width: 900px) {
    display: none;
  }
`;

const AboutUsmainContainer = styled.div`
  position: relative;
  > img {
    top: -2rem;
  }

  @media (min-width: 900px) and (max-width: 1150px) {
    > img {
      width: 45%;
    }
  }
`;
const VisionMissionWrapper = styled.div`
  margin: 2rem 0;
`;

const AboutUstabWrapper = styled.div`
  padding: 0rem 2rem;
  ul {
    justify-content: flex-start;
    gap: 5rem;
    li {
      padding: 1rem 2.5rem 1rem 1rem;
      font-family: Accanthis-Regular;
      font-size: 36px;
      line-height: 28px;
      letter-spacing: 0.5px;
      text-align: left;
    }
  }
  @media (max-width: 800px) {
    padding: 0rem;
  }
  @media (max-width: 600px) {
    > div {
      display: contents;
    }
    ul {
      flex-wrap: nowrap;
      overflow: scroll;
      justify-content: space-around;
      gap: 2rem;
    }
    li {
      padding: 1rem 2.5rem 1rem 2.5rem;
      font-size: 12px !important;
    }
    .hxjXoG {
      border-bottom: 4px solid #37474f;
      border-radius: 2px;
    }
  }
`;
const AboutUsDoctorContainer = styled.div`
  padding: 0 2rem;
`;

const AboutUsFacilitiesContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;

  @media (max-width: 600px) {
    padding: 4rem 0.5rem;
  }
`;
const AboutUsFacilitiestabContainer = styled.div`
  padding: 0rem 1rem;

  li {
    font-family: Accanthis-Regular;
    font-size: 36px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.5px;
    text-align: center;
    padding-left: 5rem;
    padding-right: 5rem;
  }
  @media (max-width: 800px) {
    padding: 0 1rem 2rem 1rem;
  }
  @media (max-width: 600px) {
    > div {
      display: contents;
    }
    ul {
      flex-wrap: nowrap;
      overflow: scroll;
    }
    li {
      font-size: 12px !important;
      padding: 1rem 2.5rem 1rem 2.5rem !important;
    }
  }
`;
const MapsWrapper = styled.div`
  padding: 0 1.5rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
export {
  AboutUSWrapper,
  AboutUstextContainer,
  AboutUSHeaderBgImage,
  AboutUsmainContainer,
  VisionMissionWrapper,
  AboutUstabWrapper,
  AboutUsDoctorContainer,
  AboutUsFacilitiesContainer,
  AboutUsFacilitiestabContainer,
  MapsWrapper,
};
