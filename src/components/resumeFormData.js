export const prompts = [
    {id: 0, question : "What is your name?", type:'text', multiChoice: false, subQuestions: false, placeholder: 'Bob Jones', multiInput: false, skippable: false},
    {id: 1, question : "What is your email?", type:'email', multiChoice: false, subQuestions: false, placeholder: 'bobbyjones@gmail.com', multiInput: false, skippable: false},
    {id: 2, question : "What is your phone #?", type:'tel', multiChoice: false, subQuestions: false, placeholder: '555-555-5555', multiInput: false, skippable: true},
    {id: 3, question : "Education", type:'text', multiChoice: false, subQuestions: ["Expected Graduation Date", "GPA", "Relevant Coursework"], placeholder: 'Harvard University', subPlaceholders: ['MM-DD-YY', '4.00', 'Intro to Computer Science'], multiInput: true, skippable: true},
    {id: 4, question : "Skills", type:'text', multiChoice: false, subQuestions: false, placeholder: 'HTML, CSS, Javascript, React', multiInput: false, skippable: false},
    {id: 5, question : "Portfolio", type:'url', multiChoice: false, subQuestions: false, placeholder: 'ex: github.com',multiInput: false, skippable: true},
    {id: 6, question : "Work Experience", type:'text', multiChoice: false, subQuestions: ['Role', 'Employer', 'Job Description', 'Start Date', 'End Date'], multiInput: false, skippable: true},
    {id: 7, question : "Volunteer Experience", type:'text', multiChoice: false, subQuestions: false, multiInput: false, skippable: true},
    {id: 8, question : "Leadership Experience", type:'text', multiChoice: false, subQuestions: false, multiInput: false, skippable: true},
    {id: 9, question : "Relevant Links/Social Media", type:'url', multiChoice: false, subQuestions: false, multiInput: false, skippable: true},
    {id: 10, question : "Select Resume Template", type:'radio', multiChoice: ["Option 1", "Option 2", "Option 3"], subQuestions: false, multiInput: false, skippable: true}
];

export const answers = [];