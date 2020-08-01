import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { NavMenu } from "./components";
import { Home, Upgrades } from "./pages";
import { darkTheme } from "./styles/default-theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Screen className="App">
        <Router>
          <NavHolder>
            <NavMenu />
          </NavHolder>
          <Route exact path="/" component={Home} />
          <Route exact path="/upgrades" component={Upgrades} />
        </Router>
      </Screen>
    </ThemeProvider>
  );
}

const Screen = styled.div`
  overflow: hidden;
  background-color: #282c34;
  min-height: 100vh;
`;

const NavHolder = styled.div`
  transition: all 0.25s linear;
`;

export default App;
