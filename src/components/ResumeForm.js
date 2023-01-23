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
    FormInput,
    Collapse,
  } from "shards-react";
  import { TypeAnimation } from 'react-type-animation';


const ResumeForm = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   useEffect(() => {
    console.log("current question:", currentQuestion);
  }, [currentQuestion]);
   const [questions] = useState(prompts);

   const handleAnswer = (e) => {
    const answer = document.getElementById('form-input').value;

    answers.push(answer);
    setCurrentQuestion(currentQuestion + 1);
    console.log(currentQuestion + ` ${questions[currentQuestion].question}`);
    console.log(answer);
   }
   return(
    <>
    <h1>{questions[currentQuestion].question}</h1>
        <InputGroup>
          <FormInput id='form-input' required/>
          <Button id="start-btn" onClick={handleAnswer} outline theme="info">Next</Button>
        </InputGroup>
    </>
   )
}

export default ResumeForm;