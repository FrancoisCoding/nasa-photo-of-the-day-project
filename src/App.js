import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./data";
import PreLoadScreen from "./components/PreLoadScreen";
import styled from 'styled-components';

const DivStyling = styled.div



function App() {
  return (
    <div className="App">
      <PreLoadScreen />
      <Data />
    </div>
  );
}

export default App;
