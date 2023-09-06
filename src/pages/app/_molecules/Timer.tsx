import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { slideInDown } from "../../../styles/animate.styled";

const Timer: React.FC = () => {
  const COUNT_DOWN_DATE = new Date(1694695885000);
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
  padding-top: 32px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  > div {
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3px;
    border-radius: 8px;
    padding: 16px 32px;
    border: 1px solid gold;

    h3 {
      font-size: 48px;
      font-weight: 700;
      margin: 0;
    }
  }

  > div:nth-child(1) {
    animation: ${slideInDown} 0.5s ease-in;
  }
  > div:nth-child(2) {
    animation: ${slideInDown} 1s ease-in;
  }
  > div:nth-child(3) {
    animation: ${slideInDown} 1.5s ease-in;
  }
  > div:nth-child(4) {
    animation: ${slideInDown} 2s ease-in;
  }
`;
