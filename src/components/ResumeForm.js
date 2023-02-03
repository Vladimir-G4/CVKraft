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
import SubQ from "./SubQ";


const ResumeForm = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   useEffect(() => {
    console.log("current question:", currentQuestion);
  }, [currentQuestion]);
   const [questions] = useState(prompts);

   const handleAnswer = (e) => {
    let answer;
    if(!questions[currentQuestion].subQuestions){
      answer = document.getElementById('form-input').value;
    }
    else{
      const aLen = questions[currentQuestion].subQuestions.length;
      

    }
    

    answers.push(answer);
    setCurrentQuestion(currentQuestion + 1);
    console.log(currentQuestion + ` ${questions[currentQuestion].question}`);
    console.log(answers);
    document.getElementById('form-input-0').value = '';
   }
   return(
    <section className="questionBox">
    <CSSTransition
          in={true}
          timeout={2000}
          classNames="fade"
          unmountOnExit
        >
    <h1>{questions[currentQuestion].question}</h1>
    </CSSTransition>
        <InputGroup id="input-block">
          <Form.Control autocomplete="off" id='form-input-0' placeholder={questions[currentQuestion].placeholder} type={questions[currentQuestion].type} required/>
          <>{questions[currentQuestion].subQuestions && <SubQ questions={questions[currentQuestion].subQuestions}/>}</>
        </InputGroup>
        <Button id="start-btn" onClick={handleAnswer} variant="outline-primary" theme="info">Next</Button>
    </section>
    
   )
}



export default ResumeForm;