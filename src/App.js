import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
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
  const [showForm, setShowForm] = useState(false);
  const handleStart = () => {
    const starter = document.getElementById('starter');
    starter.style.transition = 'opacity 2s';
    starter.style.opacity = 0;
    setTimeout(() => {
      starter.remove();
      setShowForm(true);
    }, 2000);
  };
  useEffect(() => {
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', handleStart);
    return () => {
      startBtn.removeEventListener('click', handleStart);
    };
  }, []);

  return (
    <div className="App">
      <Container id="quiz" fluid={true}>
        <div id="starter">
          <img src="static/images/CVKraft.jpg" id="cvk-logo" alt="CVKraft Logo"></img>
          <Button id="start-btn" outline theme="info" type="submit">Get Started</Button>
          <script>

          </script>
        </div>
        {showForm && <ResumeForm/>}
        
      </Container>
      <footer>
      <a href="https://github.com/Vladimir-G4/CVKraft">Follow this project on Github!</a>
      </footer>
    </div>
  );
}

export default App;
