import logo from './logo.svg';
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import ResumeForm from "./components/ResumeForm"
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
  Collapse
} from "shards-react";

function App() {
  return (
    <div className="App">
      <Navbar type="dark" theme="dark" expand="md">
        <NavbarBrand>CVK</NavbarBrand>
       <Nav navbar>
       <NavItem>
          <NavLink active href="/">Resume Builder</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active href="/Privacy">Privacy</NavLink>
        </NavItem>
       </Nav>
      </Navbar>
      <Container id="quiz" fluid={true}>
        <div id="starter">
        <img src="static/images/CVKraft.jpg" id="cvk-logo" alt="CVKraft Logo"></img>
        <Button outline theme="info">Get Started</Button>
        <script>{
        setTimeout(() => {document.getElementById("starter").addEventListener("click", function(){
                            document.getElementById("starter").classList.add("hidden");
                            })
                          }, 200)}
        </script>
        </div>
        <ResumeForm></ResumeForm>
      </Container>
    </div>
  );
}

export default App;
