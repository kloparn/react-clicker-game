import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { Multiplier as CalculatedMultiplier, Reset } from "../functions";

const Home = () => {
  const [currentPoints, setPoints] = useState(
    localStorage.getItem("points") === null
      ? () => {
          Reset();
          return 0;
        }
      : JSON.parse(localStorage.getItem("points")!)
  );

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(currentPoints));
  }, [currentPoints]);

  return (
    <Main>
      <h1>Click the Logo!</h1>
      <CustomButton
        onClick={() => setPoints(currentPoints + CalculatedMultiplier())}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </CustomButton>
      <h2>
        <code>{currentPoints}</code>
      </h2>
      <button
        onClick={() => {
          setPoints(0);
          Reset();
        }}
      >
        Reset points
      </button>
      <button onClick={() => setPoints(currentPoints + 1000)}>1000+</button>

      <p></p>
    </Main>
  );
};

const Main = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

const CustomButton = styled.div`
  background-color: transparent;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  :active {
    transform: scale(1.07);
    transition: all 0.25s;
  }
`;

export default Home;
