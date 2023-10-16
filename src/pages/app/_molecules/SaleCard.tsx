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
        <Link to={sales.link}>view details &rarr;</Link>
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
  /* border: 1px solid gold; */
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  box-shadow: 4px 4px 8px #dfd261;
`;

const Title = styled.div`
  width: 100%;
  background-color: #2e3c72;
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
