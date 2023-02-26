import styled from "styled-components";

import variables from "../../styles/variables";

const { colors } = variables;

const Button = styled.button`
  outline: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  font-family: Lato-Regular;
  line-height: 20px;
  padding: 0.8rem 2rem;
  border: 0px;
  cursor: pointer;
`;
const OutlineButton = styled(Button)`
  background-color: ${colors.light};
  color: ${colors.dark};
  &:hover {
    color: ${colors.light};
    background-color: ${colors.primary};
  }
`;
const PrimaryButton = styled(Button)`
  background-color: ${colors.primary};
  color: ${colors.light};
  border: 1px solid ${colors.primary};
  &:hover {
    color: ${colors.primary};
    background-color: ${colors.light};
    border: 1px solid ${colors.primary};
  }
`;
const OutlineLargeButton = styled(OutlineButton)`
  padding: 0.8rem 3.5rem;
`;
const PrimaryLargeButton = styled(PrimaryButton)`
  padding: 0.8rem 3.5rem;
`;

const ButtonStyle = {
  OutlineButton,
  PrimaryButton,
  OutlineLargeButton,
  PrimaryLargeButton,
};

export default ButtonStyle;
