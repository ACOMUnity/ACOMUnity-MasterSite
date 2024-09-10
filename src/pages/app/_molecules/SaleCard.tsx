import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../../../styles/element.styled";

interface ISale {
  phase: string;
  title: string;
  link: string;
  startTime: number;
}

interface IProps {
  sales: ISale;
}
const SaleCard = ({ sales }: IProps) => {
  return (
    <MainContainer to={sales.link}>
      <InnerContainer>
        <Container>
          <Title>
            <h1>{sales.phase}</h1>
            <p>{sales.title}</p>
          </Title>
          <Body>
            <Button disabled={!sales.startTime}>
              {sales.startTime > 0 ? "Participate" : "Coming Soon"}
            </Button>
          </Body>
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};

export default SaleCard;

const MainContainer = styled(Link)`
  display: flex;
  max-width: 31.7rem;
  width: 100%;
  height: 24rem;
  padding: 1.6rem 1.2rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0.2px solid #f8d749;
  background: #101122;
`;

const InnerContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  background: #101122;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.8rem;
  background: #101122;
`;

const Title = styled.div`
  font-family: "Tomorrow";
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  > h1 {
    color: #f8d749;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  > p {
    color: #fff;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;

  a {
    color: #000;
    text-transform: capitalize;
  }

  > button {
    color: #000;
    font-family: "Tomorrow";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
