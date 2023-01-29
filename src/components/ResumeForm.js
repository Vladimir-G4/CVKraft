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
  import { CSSTransition } from 'react-transition-group';


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
    console.log(answers);
    document.getElementById('form-input').value = '';
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
        <InputGroup>
          <FormInput autocomplete="off" id='form-input' placeholder={questions[currentQuestion].placeholder} type={questions[currentQuestion].type} required/>
          <Button id="start-btn" onClick={handleAnswer} outline theme="info">Next</Button>
        </InputGroup>
        {questions[currentQuestion].subQuestions && <h1>(insert subquestions)</h1>}
    </section>
    
   )
}



export default ResumeForm;