import styled from "styled-components";
import variables from "../../styles/variables";

import PatientscardBg from "../../images/patientsCare/patient-bg.png";
const { colors } = variables;

const InternationalpatientsHeader = styled.div`
  padding: 3rem;
  position: relative;
  > button {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;

    > button {
      display: none;
    }
  }
`;
const InternationaltextContainer = styled.div`
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
const InternationalHeaderBgImage = styled.img`
  position: absolute;
  top: 5rem;
  right: 0;
  width: fit-content;

  @media (max-width: 900px) {
    display: none;
  }
`;
const InternationalHeaderContainerImage = styled.div`
  position: relative;

  > img {
    top: 0rem;
  }
`;
const InternationalBuddyContainer = styled.div`
  margin: 5rem 0;

  @media (max-width: 600px) {
    margin: 2rem 0rem;

    h2 {
      font-size: 20px !important;
    }
  }
`;
const AminitiesInternationalContainer = styled.div`
  padding: 0 3rem;

  > span {
    font-family: Lato-Regular;
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(61, 61, 61, 1);
  }
  @media (max-width: 600px) {
    padding: 0 1rem;

    h2 {
      text-align: left;
      font-size: 20px !important;
      line-height: 21.26px;

      > span {
        font-size: 20px !important;
      }
    }
    span {
      font-size: 14px !important;
    }
  }
`;
const AminitiescardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1rem 0rem 5rem 0rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AminitiesCards = styled.div`
  width: -webkit-fill-available;
  background: #c7dbce;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  font-family: Lato-Regular;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.055em;
  text-align: left;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const PatientscareContainer = styled.div`
  padding: 2rem 0rem;
`;
const PatientsCard = styled.div`
  background: url(${PatientscardBg}) no-repeat;
  height: 471px;
  background-size: cover;
  @media (max-width: 768px) {
    height: 306px;
  }
`;
const PatientsTextWrapper = styled.div`
  width: 65%;
  height: 471px;
  background: linear-gradient(
    270.62deg,
    rgba(0, 0, 0, 0.43) 99.52%,
    rgba(0, 0, 0, 0) 99.53%
  );
  backdrop-filter: blur(4.5px);
  > div {
    padding: 3rem;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: -webkit-fill-available;
    backdrop-filter: none;
    > div {
      padding: 2rem 1rem;
    }
  }
`;

const PatientsTextTitle = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: Accanthis-Bold;
  font-size: 44px;
  line-height: 47px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${colors.light};

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 21px;
  }
`;

const PatientsTextSubTitle = styled.span`
  font-family: Accanthis-Regular;
  font-size: 44px;
  font-style: normal;
  line-height: 47px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${colors.light};

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 21px;
  }
`;
const PatientsTextDescription = styled.p`
  font-family: Lato-Regular;
  font-size: 16px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${colors.light};
  width: 80%;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 28.46px;
    width: 100%;
  }
`;

const CheckListWrapper = styled.div`
  // height: 501px;
  background: rgba(237, 240, 238, 1);
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  text-align: left;
  gap: 3rem;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;
const CheckListContainer = styled.div`
  width: 30%;
  background: rgba(255, 255, 255, 1);
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    width: auto;
  }
`;
const ChecklistTitle = styled.h5`
  font-family: Lato-Bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.055em;
  text-align: left;
  color: rgba(51, 27, 59, 1);
  margin-top: 1rem;
  text-transform: uppercase;
`;
const CheckListPoints = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
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
`;
const CheckListPointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export {
  InternationalpatientsHeader,
  InternationalHeaderBgImage,
  InternationaltextContainer,
  InternationalBuddyContainer,
  PatientsTextTitle,
  AminitiesInternationalContainer,
  AminitiescardContainer,
  AminitiesCards,
  PatientscareContainer,
  PatientsCard,
  PatientsTextWrapper,
  PatientsTextSubTitle,
  PatientsTextDescription,
  CheckListWrapper,
  CheckListContainer,
  ChecklistTitle,
  CheckListPoints,
  CheckListPointsWrapper,
  InternationalHeaderContainerImage,
};
