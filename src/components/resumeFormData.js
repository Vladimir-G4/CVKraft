export const prompts = [
    {id: 0, question : "What is your name?", subQuestions: false, multiInput: false, skippable: false},
    {id: 1, question : "What is your email?", subQuestions: false, multiInput: false, skippable: false},
    {id: 2, question : "What is your phone #?", subQuestions: false, multiInput: false, skippable: true},
    {id: 3, question : "Education", subQuestions: ["Expected Graduation Date", "GPA", "Relevant Coursework"] , multiInput: true, skippable: true},
    {id: 4, question : "Skills", subQuestions: false, multiInput: false, skippable: false},
    {id: 5, question : "Portfolio", subQuestions: false, multiInput: false, skippable: true},
    {id: 6, question : "Work Experience", subQuestions: false, multiInput: false, skippable: true},
    {id: 7, question : "Volunteer Experience", subQuestions: false, multiInput: false, skippable: true},
    {id: 8, question : "Leadership Experience", subQuestions: false, multiInput: false, skippable: true},
    {id: 9, question : "Relevant Links/Social Media", subQuestions: false, multiInput: false, skippable: true},
];

export const answers = [];