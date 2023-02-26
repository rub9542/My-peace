import styled from "styled-components";
import { FlexAlignJustifyBetweenContainer } from "../../styles/commonStyle";

import variables from "../../styles/variables";

const { colors } = variables;

const modalStyle = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 2s",
    zIndex: "33333",
  },
  content: {
    background: colors.light,
    boxShadow: "0px 0px 9px rgba(0, 0, 0, 0.25)",
    borderRadius: "18px",
    maxWidth: "740px",
    position: "static",
    maxHeight: "92vh",
    padding: "2rem",
    boxSizing: "border-box",
  },
};

const ModalHeaderSection = styled(FlexAlignJustifyBetweenContainer)`
  align-items: flex-start;
  > h2 {
    margin: 0 0 2rem 0;
    font-family: "Accanthis-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 106.3%;
    letter-spacing: -0.01em;
    color: ${colors.textColor};
  }
`;
const ModalContentSection = styled.section`
  width: 655px;
  text-align: center;

  @media (max-width: 768px) {
    min-width: -webkit-fill-available;
    width: 50%;
  }
`;
const SuccessModalContentWrapper = styled.div`
  p {
    // margin: 0 0 2rem 0;
    font-family: "Accanthis-Regular";
    font-style: normal;
    font-size: 32px;
    line-height: 106.3%;
    letter-spacing: -0.01em;
    color: ${colors.textColor};
    @media (max-width: 600px) {
      font-size: 16px;
    }

    > span {
      display: none;
    }
  }
`;

export {
  modalStyle,
  ModalContentSection,
  ModalHeaderSection,
  SuccessModalContentWrapper,
};
