import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Upgrades = () => {
  const [points, setPoints] = useState(
    JSON.parse(localStorage.getItem("points")!)
  );
  const [mouseAddition, setMouseAddition] = useState(
    JSON.parse(localStorage.getItem("mouseAddi-+-1")!)
  );
  const [mouseMultiplication, setMouseMultiplication] = useState(
    JSON.parse(localStorage.getItem("mouseMulti-*-2")!)
  );

  useEffect(() => {
    localStorage.setItem("mouseAddi-+-1", JSON.stringify(mouseAddition));
    localStorage.setItem("mouseMulti-*-2", JSON.stringify(mouseMultiplication));
    localStorage.setItem("points", JSON.stringify(points));
  }, [points, mouseAddition, mouseMultiplication]);

  const clickerAddition = (cost: number) => {
    points >= cost
      ? setMouseAddition(mouseAddition + 1)
      : console.log("not enough points");
    points >= cost ? reducePoints(cost) : console.log();
  };

  const clickerMultiplikation = (cost: number) => {
    points >= cost
      ? setMouseMultiplication(mouseMultiplication + 1)
      : console.log("not enough points");
    points >= cost ? reducePoints(cost) : console.log();
  };

  const reducePoints = (cost: number) => {
    setPoints(points - cost);
  };

  return (
    <div>
      <h1 style={{ color: "#ffffff", fontSize: "4rem" }}>
        <code>Points: {points}</code>
      </h1>
      <Main>
        <UpgradeTag
          onClick={() =>
            clickerAddition(
              mouseAddition === 0
                ? 20
                : mouseAddition === 1
                ? 35
                : Math.floor((mouseAddition * 20) ** 1.1)
            )
          }
        >
          <p>
            Cost:{" "}
            {mouseAddition === 0
              ? "20"
              : mouseAddition === 1
              ? "35"
              : Math.floor((mouseAddition * 20) ** 1.1)}
          </p>
          <CustomPicture src="cursor.png" alt="+1 per click" />
          <p>1+ per click</p>
          <code>{mouseAddition}</code>
        </UpgradeTag>
        <UpgradeTag
          onClick={() =>
            clickerMultiplikation(
              mouseMultiplication === 0
                ? 1000
                : mouseMultiplication === 1
                ? 2750
                : Math.floor((mouseMultiplication * 1250) ** 1.1)
            )
          }
        >
          <p>
            Cost:{" "}
            {mouseMultiplication === 0
              ? "1000"
              : mouseMultiplication === 1
              ? "2750"
              : Math.floor((mouseMultiplication * 1250) ** 1.1)}
          </p>

          <CustomPicture src="2x.png" alt="Doubes the value" />
          <p>2x per click</p>
          <code>{mouseMultiplication}</code>
        </UpgradeTag>
        <UpgradeTag>daw</UpgradeTag>
      </Main>
    </div>
  );
};

const CustomPicture = styled.img`
  width: 20vh;
  height: 20vh;
  background-color: transparent;
`;

const Main = styled.div`
  background-color: #282c34;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    flex-flow: column;
  }
`;

const UpgradeTag = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  border-color: none;
  transition: all 0.25s;
  :focus {
    outline: none;
    transform: scale(1.07);
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

export default Upgrades;
