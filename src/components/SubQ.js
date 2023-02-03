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
        const values = this.state.questions;
    return(
        <>
        {values.map((value, index) => (
        <>
        <h3>{values[index]}</h3>
        <Form.Control key={index} placeholder={values[index]} id={`form-input-${index+1}`} />
        </>
      ))}
        </>
    );
    }
}
export default SubQ