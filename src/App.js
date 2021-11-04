import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./data";
import PreLoadScreen from "./components/PreLoadScreen";
import styled from 'styled-components'

const DivStyling = styled.div`
h1{
  text-align:center;
}

.react-datepicker-__input-container
}text-align: center;



`


function App() {
  return (
    <DivStyling>
     <PreLoadScreen />
      <Data />
    </DivStyling>
  );
}

export default App;

