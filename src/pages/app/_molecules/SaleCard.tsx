import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface ISale {
  phase: string;
  title: string;
  link: string;
}

interface IProps {
  sales: ISale;
}
const SaleCard = ({ sales }: IProps) => {
  return (
    <MainContainer>
      <Title>
        <h1>{sales.phase}</h1>
        <p>{sales.title}</p>
      </Title>
      <Body>
        <Link to={sales.link}>view details &rarr;</Link>
      </Body>
    </MainContainer>
  );
};

export default SaleCard;

const MainContainer = styled.div`
  max-width: 340px;
  /* border: 1px solid gold; */
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  box-shadow: 0 4px 14px 2px gold;
`;

const Title = styled.div`
  width: 100%;
  background-color: #2e3c72;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 184px;

  > h1 {
    font-size: 16px;
    font-weight: 400;
  }

  > p {
    font-size: 22px;
    text-transform: capitalize;
  }
`;

const Body = styled.div`
  height: 38px;

  a {
    color: #000;
    text-transform: capitalize;
  }
`;
