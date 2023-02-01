import React, {useState, useEffect} from "react";
import {prompts, answers} from "./resumeFormData";
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
    Form,
    Collapse,
  } from "react-bootstrap";
  import { TypeAnimation } from 'react-type-animation';
  import { CSSTransition } from 'react-transition-group';
 


class SubQ extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questions: props.questions
        };
    }

    render() {
    return(
        <>
        <h1>{this.state.questions[0]}</h1>
        </>
    );
    }
}
export default SubQ