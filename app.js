const inquirer = require("inquirer");

function addEmployee(){
     return inquirer.prompt([
       {
         type: "input",
         message: "What is the name of employee?",
         name: "employeeName"
       },
       {
         type: "input",
         message: "What is the employee's ID number?",
         name: "employeeId"
       },
       {
         type: "input",
         message: "What is the employee's email address?",
         name: "employeeEmail"
       },
       {
         type: "input",
         message: "What is the employee's Github page?",
         name: "employeeGithub"
       },
       {
         type: "list",
         message: "What is the employee's role?",
         name: "employeeRole",
         choices: ["Manager", "Engineer", "Intern"]
       }
     ]);

};

async function init(){
     try{
          const employeInput = await addEmployee();
          const name = employeInput.name;
          const id = employeInput.id;
          const email = employeInput.email;
     }
     catch(error){
          console.log(error)
          inquirer.prompt(employeInput);
     }
}

init()