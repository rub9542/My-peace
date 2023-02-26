import styled from "styled-components";
import DetailsBack from "../../images/getInTouch/back-bg.png";

const TouchImageWrapper = styled.section`
  height: fit-content;
  > img {
    width: -webkit-fill-available;
  }
  @media (max-width: 800px) {
    > img {
      display: none;
    }
  }
`;

const FormAndDetailContainer = styled.div`
  background: rgba(74, 103, 82, 0.1);
  width: 100%;
  position: relative;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
const DetailsContainer = styled.div`
  width: 50%;
  padding: 2rem 3rem;
  @media (max-width: 800px) {
    width: -webkit-fill-available;
    padding: 2rem 1rem;
  }
`;
const DetailsTitle = styled.h2`
  font-family: Accanthis-Bold;
  font-size: 48px;
  line-height: 51px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 1rem;
  color: rgba(51, 27, 59, 1);
`;
const FooterText = styled.div`
  > div {
    font-family: "Lato-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
    color: #fff;
    padding-bottom: 1rem;
    gap: 0.5rem;
    display: flex;
    color: rgba(38, 50, 56, 1);
  }
`;
const FooterImageWrapper = styled.div`
  .gatsby-image-wrapper-constrained {
    vertical-align: middle !important;
  }
`;
const AddressTitles = styled.div`
  font-family: Accanthis-Bold;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.025em;
  text-align: left;
`;
const AddressDetails = styled.span`
  font-family: Accanthis-Regular;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.025em;
  text-align: left;
`;
const AddressContainer = styled.div`
  margin-bottom: 1.5rem;
`;
const BackBgImage = styled.div`
  background: url(${DetailsBack}) no-repeat;
  position: absolute;
  height: 221px;
  width: 403px;
  bottom: 0;

  @media (max-width: 800px) {
    width: 0%;
  }
`;
const FormWrapper = styled.div`
  margin: 3.5rem 2rem;
  width: 50%;
  @media (max-width: 800px) {
    width: -webkit-fill-available;
    margin: 3.5rem 1rem;
  }
`;
const FormContainer = styled.div`
  background: #fff;
  padding: ${props=>props.padding?props.padding:"1.5rem"};
  text-align: center;
`;
export {
  TouchImageWrapper,
  FormAndDetailContainer,
  DetailsTitle,
  DetailsContainer,
  FooterImageWrapper,
  FooterText,
  AddressTitles,
  AddressDetails,
  AddressContainer,
  BackBgImage,
  FormContainer,
  FormWrapper,
};
