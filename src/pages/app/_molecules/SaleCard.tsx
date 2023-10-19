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
  console.log(sales.startTime);
  return (
    <MainContainer to={sales.link}>
      <Title>
        <h1>{sales.phase}</h1>
        <p>{sales.title}</p>
      </Title>
      <Body>
        <Button disabled={!sales.startTime}>
          {sales.startTime > 0 ? "Participate" : "Coming Soon"}
        </Button>
      </Body>
    </MainContainer>
  );
};

export default SaleCard;

const MainContainer = styled(Link)`
  max-width: 340px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  border: 1px solid #3e3e3a;
  gap: 36px;
  background: transparent;
  border-radius: 12px;
  box-shadow: 4px 8px 8px #3e3e3a;
  transition: all 0.3s ease-in;

  &:hover {
    box-shadow: 2px 2px 4px #3e3e3a;
    transition: all 0.3s ease-in;
  }
`;

const Title = styled.div`
  width: 100%;
  background-color: #2e3c72;
  /* background: linear-gradient(120deg, gold, #110295); */
  /* background-color: #110295; */
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
  height: 184px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 16px;

  > h1 {
    font-size: 16px;
    font-weight: 400;
    color: gold;
  }

  > p {
    font-size: 22px;
    text-transform: capitalize;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a {
    color: #000;
    text-transform: capitalize;
  }

  > button {
    width: 100%;
  }
`;
