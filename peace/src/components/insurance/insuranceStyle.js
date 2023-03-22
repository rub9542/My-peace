import styled from "styled-components";
import { DefaultParagraphText } from "../../styles/commonStyle";

const InsuranceHeaderWrapper = styled.div`
  padding: 0 0 6rem 2rem;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  @media (max-width: 1024px) {
    background: transparent;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding: 2rem 1rem;
    h2 {
      text-align: left;
    }
  }
`;
const InsuranceHeaderImageWrapper = styled.div`
  @media (max-width: 800px) {
    display: none !important;
  }
`;
const InsuranceHeaderTextWrapper = styled.div`
  width: 40%;
  margin: 4rem 2.5rem;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 1rem 0rem;
  }
`;

const InsuranceHeaderParagraphText = styled(DefaultParagraphText)`
  line-height: 195.5%;
`;

const InsuranceWrapper = styled.div`
  margin-top: 12%;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`;
const BenefitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 800px) {
    gap: 10px;
  }
`;

const BenefitContainerItem = styled.div`
  width: 46%;
  margin: 0;
  font-family: "Lato-Regular";
  background: #c7dbce;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  font-family: "Lato-Regular";
  font-weight: 500;
  font-size: 16px;
  border-radius: 6px;
  border-bottom-left-radius: 0px;
  line-height: 182.3%;
  letter-spacing: 0.055em;

  color: #331b3b;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;
const InsuranceTextWrapper = styled.div`
  // margin: 2rem 2.5rem;
  padding: 0 4rem;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 0;
    // padding: 1rem;
  }
`;
const InsuranceParagraphText = styled(DefaultParagraphText)`
  line-height: 195.5%;
  width: 65%;
  margin: 0 0 2rem 0;

  @media (max-width: 800px) {
    width: 100%;
    // padding: 0 1rem 0 0;
  }
`;

const InsuranceBenefitsTitle = styled.h2`
  width: 40%;
  font-family: "Accanthis-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 51px;
  letter-spacing: -0.01em;
  color: #331b3b;
  margin: 0 0 2rem 0;
  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 100%;
    text-align: left;
  }
`;
const InsuranceContainer = styled.section`
  position: relative;
  display: flex;
  background: #eeeeee;
  background-size: cover;
  margin: 5rem 0;
  padding: 3rem 4rem;
  justify-content: space-between;
  @media (max-width: 1024px) {
    background: none;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
    margin: 0;
  }
`;
const InsuranceContactLeft = styled.div`
  padding-top: 2rem;
  @media (max-width: 800px) {
    h2 {
      text-align: left;
    }
  }
`;
const InsuranceContactLeftImg = styled.div`
  padding-left: 8%;
  padding-top: 5%;
  img {
    height: 34rem;
  }
  @media (max-width: 800px) {
    display: none !important;
  }
`;
const InsuranceContactBgImage = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const InsuranceContactContainer = styled.section`
  // min-width:675px;
  .jgKUmL {
    width: 100%;
    padding: 0;
  }
  width: 36%;
  padding: 2rem;
  background: #fff;
  text-align: center;
  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #757575;
    opacity: 1; /* Firefox */
  }

  .css-13cymwt-control {
    border: none;
    .css-1fdsijx-ValueContainer {
      padding: 0.8rem 0 0.8rem 1rem;
    }
    .css-1dimb5e-singleValue {
      text-align: left;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
  @media (max-width: 768px) {
    min-width: -webkit-fill-available;
  }
  @media (max-width: 600px) {
    > div {
      padding: 0;
    }
  }
`;
const InsuranceFormContainer = styled.div``;

const InsuranceStyles = {
  InsuranceFormContainer,
  InsuranceHeaderWrapper,
  InsuranceContactContainer,
  InsuranceHeaderImageWrapper,
  InsuranceContainer,
  InsuranceHeaderTextWrapper,
  InsuranceHeaderParagraphText,
  BenefitContainerItem,
  BenefitContainer,
  InsuranceContactBgImage,
  InsuranceContactLeftImg,
  InsuranceTextWrapper,
  InsuranceBenefitsTitle,
  InsuranceParagraphText,
  InsuranceContactLeft,
  InsuranceWrapper,
};

export default InsuranceStyles;
