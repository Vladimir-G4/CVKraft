import React from "react";
import {prompts} from "./resumeFormData";

class ResumeForm extends React.Component {
    state = {
        currentQuestion : 0,
        input : [],
        finished : false,
        skipped : []
    };

    loadFormData = () => {
        console.log(prompts[0].question);
    }

    componentDidMount() {
        this.loadFormData();
      }
    render(){
        return(
            <p>{prompts[0].question}</p>
        );
    }
}

export default ResumeForm;