import { useEffect, useState } from "react";
import { styled } from "styled-components";

interface IProps {
  timerNum: number;
}
const Timer = ({ timerNum }: IProps) => {
  const COUNT_DOWN_DATE = new Date(timerNum);
  const [timeRemaining, setTimeRemaining] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const remainingTime = Math.ceil((+COUNT_DOWN_DATE - +currentDate) / 1000);
      setTimeRemaining(remainingTime);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleTime = () => {
    if (timerNum === 0) return;
    if (!timeRemaining) return;
    const days =
      String(Math.floor(timeRemaining / 86400)).length === 1
        ? String(Math.floor(timeRemaining / 86400)).padStart(2, "0")
        : Math.floor(timeRemaining / 86400);

    const hours =
      String(Math.floor((timeRemaining % 86400) / 3600)).length === 1
        ? String(Math.floor((timeRemaining % 86400) / 3600)).padStart(2, "0")
        : Math.floor((timeRemaining % 86400) / 3600);

    const minutes =
      String(Math.floor((timeRemaining % 3600) / 60)).length === 1
        ? String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, "0")
        : Math.floor((timeRemaining % 3600) / 60);

    const seconds =
      String(timeRemaining % 60).length === 1
        ? String(timeRemaining % 60).padStart(2, "0")
        : timeRemaining % 60;

    return { days, hours, minutes, seconds };
  };

  return (
    <TimerContainer>
      <InnerContainer>
        <div>
          <h3>{handleTime()?.days || "00"}</h3>
          <span>days</span>
        </div>
        <div>
          <h3>{handleTime()?.hours || "00"}</h3>
          <span>hours</span>
        </div>
        <div>
          <h3>{handleTime()?.minutes || "00"}</h3>
          <span>minutes</span>
        </div>
        <div>
          <h3>{handleTime()?.seconds || "00"}</h3>
          <span>seconds</span>
        </div>
      </InnerContainer>
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  > div {
    display: flex;
    width: 1.2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    padding: 0 3.2rem;

    h3 {
      font-size: 3.2rem;
      margin: 0;
      font-weight: 700;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    span {
      color: #fff;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
