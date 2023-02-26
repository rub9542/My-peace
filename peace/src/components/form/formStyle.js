import styled from "styled-components";

import variables from "../../styles/variables";

const { colors } = variables;

const FormLabel = styled.label`
  font-family: "Lato-Bold";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0.5rem;
  line-height: 24px;
  display: block;
  text-align: left;
  color: ${colors.dark};
`;
const FormInput = styled.input`
  background: ${(props) => (props.bg ? props.bg : "#EEEEEE")};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #757575;
  border: 0px;
  width: -webkit-fill-available;
  outline: none;

  ::placeholder {
    color: #757575;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(0, 0, 0, 1);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(0, 0, 0, 1);
  }
`;
const FormField = styled.div`
  margin-bottom: 1.5rem;

  > span {
    text-align: left;
    display: block;
  }
`;
const FormError = styled.span`
  color: red;
  font-size: 12px;
`;
const FormSuccess = styled.span`
  color: #246335;
  font-size: 12px;
`;

const FormtextArea = styled.textarea`
  resize: none;
  background: ${(props) => (props.bg ? props.bg : "#EEEEEE")};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-family: "Lato-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #757575;
  border: 0px;
  width: -webkit-fill-available;
  outline: none;
  max-height: 138.16px;
  max-width: 95%;
  min-width: 95%;

  @media (max-width: 800px) {
    min-width: auto;
  }
`;
export {
  FormLabel,
  FormInput,
  FormField,
  FormError,
  FormtextArea,
  FormSuccess,
};
