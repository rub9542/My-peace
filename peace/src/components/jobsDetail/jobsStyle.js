import styled from "styled-components";
import { MainSectionWrapper } from "../mediaDetail/mediaDetailStyle";

const JobsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  p {
    font-family: Accanthis-Bold;
    font-size: 44px;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgba(38, 50, 56, 1);
    margin: 0;
  }
  div {
    align-self: center;
    button {
      background-color: rgba(19, 68, 62, 1);
    }
  }

  @media (max-width: 600px) {
    background-color: rgba(237, 240, 238, 1);
    padding: 1rem 1rem 0;
    margin: -0.25rem 0 0 0;
    p {
      font-family: Accanthis-Bold;
      font-size: 20px;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: -0.01em;
      text-align: left;
    }
    div {
      display: none;
      align-self: center;
      button {
        // background-color: rgba(19, 68, 62, 1);
      }
    }
  }
`;

const JobContentWrapper = styled.div`
  strong {
    font-size: 36px;
    font-weight: 500;
  }
  span {
    font-family: Lato-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(38, 50, 56, 1);
  }
  ul {
    margin: 0 2rem 3rem 2rem;
    li {
      list-style: unset;
    }
  }
  @media (max-width: 600px) {
    background-color: rgba(237, 240, 238, 1);
    padding: 1rem;
    strong {
      font-size: 20px;
      font-family: Accanthis-Regular;
    }
    span {
      font-family: Lato-Regular;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.02em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
    }
    ul {
      font-family: Lato-Regular;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.02em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
      margin: 0 0rem 3rem 2rem;
      li {
        list-style: unset;
      }
    }
  }
`;

const JobListWrapper = styled.div`
  p {
    font-family: Lato-Semibold;
    font-size: 36px;
    line-height: 86px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(38, 50, 56, 1);
    margin-bottom: 0;
  }
  ul {
    font-family: Lato-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(38, 50, 56, 1);
    margin: 0 2rem 3rem 2rem;
    li {
      list-style: unset;
    }
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
    p {
      font-family: Accanthis-Bold;
      font-size: 20px;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: -0.01em;
      text-align: left;
    }
    ul {
      font-family: Lato-Regular;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.02em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
      margin: 0 0rem 3rem 2rem;
      li {
        padding: 0.5rem 0;
      }
    }
  }
`;
const CareerDetailWrapper = styled(MainSectionWrapper)`
  @media (max-width: 600px) {
    padding: 3rem 0 1rem;
  }
`;
export {
  CareerDetailWrapper,
  JobsHeaderContainer,
  JobContentWrapper,
  JobListWrapper,
};
