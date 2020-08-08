import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Upgrades = () => {
  const [points, setPoints] = useState(
    JSON.parse(localStorage.getItem("points")!)
  );
  const [mouseAddition, setMouseAddition] = useState(
    JSON.parse(localStorage.getItem("mouseAddi")!)
  );
  const [mouseMultiplication, setMouseMultiplication] = useState(
    JSON.parse(localStorage.getItem("mouseMulti")!)
  );

  useEffect(() => {
    localStorage.setItem("mouseAddi", JSON.stringify(mouseAddition));
    localStorage.setItem("mouseMulti", JSON.stringify(mouseMultiplication));
    localStorage.setItem("points", JSON.stringify(points));
  }, [points, mouseAddition, mouseMultiplication]);

  const clickerAddition = (cost: number) => {
    points >= cost
      ? setMouseAddition(mouseAddition + 1)
      : setMouseAddition(mouseAddition);
    points >= cost ? setPoints(points - cost) : setPoints(points);
  };

  return (
    <div>
      <h1 style={{ color: "#ffffff", fontSize: "4rem" }}>
        <code>{points}</code>
      </h1>
      <Main>
        <UpgradeTag
          onClick={() =>
            clickerAddition(
              mouseAddition === 0
                ? 20
                : mouseAddition === 1
                ? 35
                : Math.floor((mouseAddition * 15) ** 1.1)
            )
          }
        >
          <p>
            Cost:{" "}
            {mouseAddition === 0
              ? "20"
              : mouseAddition === 1
              ? "35"
              : Math.floor((mouseAddition * 15) ** 1.1)}
          </p>
          <CustomPicture src="cursor.png" alt="Mouse picture" />
          <p>1+ per click</p>
          <code>{mouseAddition}</code>
        </UpgradeTag>
        <UpgradeTag>sdawds</UpgradeTag>
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
`;

const UpgradeTag = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  border-color: none;
  :active {
    transform: scale(1.07);
    transition: all 0.25s;
  }
  :focus {
    outline: none;
  }
`;

export default Upgrades;
