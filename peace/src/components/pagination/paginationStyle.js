import styled from "styled-components";

import { FlexAlignJustifyCenterContainer } from "../../styles/commonStyle";

const PaginationSection = styled(FlexAlignJustifyCenterContainer)`
  margin: 3rem 0;
`;

const PaginationListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    padding: 0.5rem;
  }
`;

const PaginationList = styled.li`
  list-style: none;
  margin: 0 0.3rem;
  border: 1px solid #d0d0d0;
  border-radius: 32px;
  display: flex;
  cursor: pointer;
  padding: 0.5rem;
  height: 32px;
  width: 32px;
  box-sizing: border-box;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  background: ${(props) => (props.active ? "#455A64" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#333333")};
  line-height: 16px;
  justify-content: center;
`;

export { PaginationSection, PaginationListWrapper, PaginationList };
