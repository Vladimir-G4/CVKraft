import logo from './logo.svg';
import './App.css';
import React from "react";
import { ReactDOM } from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import ResumeForm from "./components/ResumeForm"
import { TypeAnimation } from 'react-type-animation';

import {
  Button,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
} from "shards-react";

function App() {
  return (
    <div className="App">
      <Container id="quiz" fluid={true}>
        <div id="starter">
          <img src="static/images/CVKraft.jpg" id="cvk-logo" alt="CVKraft Logo"></img>
          <Button id="start-btn" outline theme="info">Get Started</Button>
          <script>

          </script>
        </div>
        <TypeAnimation
          sequence={['What is your name?', 1000]}
          speed={75}
          wrapper="h1"
        />
        <InputGroup>
          <FormInput/>
          <Button id="start-btn" outline theme="info" required>Next</Button>
        </InputGroup>
        
      </Container>
    </div>
  );
}

export default App;
