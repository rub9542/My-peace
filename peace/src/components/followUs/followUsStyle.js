import styled from "styled-components";

const FollowTitle = styled.h2`
  font-family: Accanthis-Bold;
  font-size: 48px;
  line-height: 51px;
  letter-spacing: -0.01em;
  text-align: left;
  color: rgba(51, 27, 59, 1);
  margin-bottom: 1rem;
`;

const FollowContainer = styled.div`
  padding: 2rem;
  @media (max-width: 600px) {
    padding: 2rem 0.5rem;
  }

  .lhVvjI {
    margin: 0;
    padding: 0;
  }
  ul {
    width: 100%;
    justify-content: normal;
    gap: 115px;
    overflow: auto;

    @media (max-width: 900px) {
      gap: 10px;
      flex-wrap: nowrap;
    }
  }
  li {
    padding: 1rem 2.7rem 1rem 0rem;
    font-size: 36px;
    @media (max-width: 900px) {
      font-size: 18px;
    }
  }
`;

const FollowCard = styled.div`
  display: flex;
  justify-content: normal;
  padding: 1rem 0.5rem;
  gap: 67px;
`;

const FollowCardUnique = styled.div`
  width: 30%;
  left: 82px;
  top: 1618px;
  border-radius: 5px;

  > img {
    width: -webkit-fill-available;
  }
`;

export { FollowTitle, FollowContainer, FollowCard, FollowCardUnique };
