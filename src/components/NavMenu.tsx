import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavMenu = () => {
  return (
    <Main>
      <ButtonContainer>
        <CustomNavLink to="/">Home</CustomNavLink>
      </ButtonContainer>
      <ButtonContainer>
        <CustomNavLink to="/upgrades">Upgrades</CustomNavLink>
      </ButtonContainer>
    </Main>
  );
};

const ButtonContainer = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border: solid 1px white;
  border-radius: 20%;
  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
    transition: all 0.2s;
  }
`;

const CustomNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text};
  :hover {
    color: white;
    text-decoration: none;
  }
`;

const Main = styled.div`
  padding-top: 1rem;
  background-color: #282c34;
  display: flex;
  justify-content: space-evenly;
  font-size: 3rem;
  align-items: center;
  overflow: hidden;
`;

export default NavMenu;
