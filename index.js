const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//begin program
//init();

function init() {

}

function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Managers name?",          
            },
            {
                type: "input",
                name: "empID",
                message: "What is the Managers ID?",
            },
            {
                type: "input",
                name: "email",
                message: "what is the Mnagers Email?",
            },
            {
                type: "input",
                name: "office",
                message: "What is the Managers office number?", 
            },
        ])
        .then((resp) => {
            console.log(resp);
            const manager = new Manager(resp.name, resp.empID, resp.email, resp.office);
            console.log(`This is the manager: ${manager}`);
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?",
            },
            {
                type: "input",
                name: "empID",
                message: "What is the Engineer's ID?",
            },
            {
                type: "input",
                name: "email",
                message: "what is the Engineer's Email?",
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the Engineer's GitHub username?", 
            },
        ])
        .then((resp) =>{
            console.log(resp);
            const engineer = new Engineer(resp.name, resp.empId, resp.email, resp.gitHub);
            console.log(`This is the engineer: ${engineer}`);
        })
}

function createIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Intern's name?",
            },
            {
                type: "input",
                name: "empID",
                message: "What is the Intern's ID?",
            },
            {
                type: "input",
                name: "email",
                message: "what is the Intern's Email?",
            },
            {
                type: "input",
                name: "school",
                message: "What is the Intern's school?", 
            },
        ])
        .then((resp) =>{
            console.log(resp);
            const intern = new Intern(resp.name, resp.empId, resp.email, resp.school);
            console.log(`This is the Intern: ${intern}`);
        })
}
