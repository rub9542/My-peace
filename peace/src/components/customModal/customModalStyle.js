import styled from "styled-components";
import { FlexAlignJustifyBetweenContainer } from "../../styles/commonStyle";

const ModalWrapper = styled(FlexAlignJustifyBetweenContainer)`
  margin: 2.5rem 0;
`;
const BgSection = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 3px 15px rgba(9, 9, 9, 0.05);
  border-radius: 8px;
  @media (max-width: 800px) {
    background: #fff;
    box-shadow: none;
    border-radius: 8px;
  }
`;
const ModalInnerWrapper = styled(BgSection)`
  padding: 2rem;
  margin: 0 2rem;
  width: 84%;

  @media (max-width: 800px) {
    width: auto;
    padding: 0;
    margin: 0;
  }
`;
const ModalArrowSection = styled(BgSection)`
  position: relative;
  width: 8%;
  height: 543px;
`;
const ModalLeftSection = styled(ModalArrowSection)`
  left: -2rem;
  > img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    right: -3rem;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
const ModalRightSection = styled(ModalArrowSection)`
  right: -2rem;
  > img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    left: -3rem;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export { ModalWrapper, ModalInnerWrapper, ModalLeftSection, ModalRightSection };
