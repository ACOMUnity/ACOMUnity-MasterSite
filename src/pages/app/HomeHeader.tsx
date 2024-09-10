import styled from "styled-components";

const HomeHeader = () => {
  return (
    <Container>
      <h1>AGEMS Token Sale Journey: </h1>
      <span>Unveiling Four Distinct Phases</span>
      <p>
        We are thrilled to introduce the AGEMS token sale, meticulously
        segmented into four distinct phases, each representing a crucial chapter
        in our journey.
      </p>
    </Container>
  );
};

export default HomeHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  h1 {
    color: #f8d749;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    color: #fff5ce;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: #fff;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
