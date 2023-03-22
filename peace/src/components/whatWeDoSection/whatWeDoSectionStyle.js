import styled from "styled-components";

const WhatWeDoSectionWrapper = styled.section`
  background: #edf0ee;
  padding: 0 2rem 3rem 0;
  min-height: 615px;
  margin: 5rem 0;
  background-position: right;
  position: relative;
  border-radius: 350px 0 0 0;
  margin-left: 4rem;
  z-index: 1;
  @media (max-width: 1024px) {
    padding-top: ${(props) => (props.forBg === "vision" ? "2rem" : "0rem")};
    background: ${(props) => (props.forBg === "vision" ? "" : "transparent")};
    margin-bottom: 0;
    margin-left: 0px;
    border-radius: ${(props) => props.forBg === "vision" && "0px"};
    padding: 0 1.25rem 2rem 1.25rem;
  }
`;
const WhatWEDoContainer = styled.div`
  position: relative;
`;
const DashedCircleDiv = styled.div`
  height: 460px;
  width: 500.58758544921875px;
  border: 2px dashed rgba(0, 0, 0, 0.26);
  position: absolute;
  border-radius: 50%;
  bottom: -3rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const WhatWeDoInnerSectionWrapper = styled.div`
  ${(props) =>
    props.styleFor === "home"
      ? `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding-left: 5rem;
  @media (max-width: 1024px) {
    padding-left: 0rem;
  }
  @media (max-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  `
      : `  display: flex;
  // gap: 4rem;
  justify-content: space-between;
  gap: 6rem;
  padding: 4rem 4rem 2rem 4rem;
  div {
    // width: 522px;
    border-radius: 18px;
  }
  h5,
  p {
    text-align: left;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem 0.5rem 0rem 0.5rem;
  }`}
`;
const FlowerImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const WhatWeDoheaderContainer = styled.div`
  padding: ${(props) => (props.style ? "0rem 0rem 2rem 0rem" : "2rem 0")};

  @media (max-width: 1024px) {
    padding: 2rem 0;
  }
`;
export {
  WhatWeDoSectionWrapper,
  WhatWeDoInnerSectionWrapper,
  FlowerImage,
  DashedCircleDiv,
  WhatWEDoContainer,
  WhatWeDoheaderContainer,
};
