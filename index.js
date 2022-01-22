const fs = require('fs');
const inquirer = require('inquirer');

const createTeamSite = require('./src/createTeamSite');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const myTeam = [];


//begin program
init();

function init() {
    console.log("Hey! Start me!");
    createManagerProfile();
}

function createManagerProfile() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Managers name?",         
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "empID",
                message: "What is the Managers ID?",
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "email",
                message: "what is the Mnagers Email?",
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "office",
                message: "What is the Managers office number?", 
                // validate: (resp) => {}
            },
        ])
        .then((resp) => {
            console.log(resp);
            const manager = new Manager(resp.name, resp.empID, resp.email, resp.office);
            console.log(`This is the manager: ${manager.name}`);
            myTeam.push(manager);
            console.log(myTeam);
            optionsList();
        })
}

function createEngineerProfile() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?",
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "empID",
                message: "What is the Engineer's ID?",
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "email",
                message: "what is the Engineer's Email?",
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the Engineer's GitHub username?",
                // validate: (resp) => {} 
            },
        ])
        .then((resp) => {
            console.log(resp);
            const engineer = new Engineer(resp.name, resp.empId, resp.email, resp.gitHub);
            console.log(`This is the engineer: ${engineer}`);
            myTeam.push(engineer);
            console.log(myTeam);
            optionsList();
        })
}

function createInternProfile() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Intern's name?",
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "empID",
                message: "What is the Intern's ID?",
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "email",
                message: "what is the Intern's Email?",
                // validate: (resp) => {}
            },
            {
                type: "input",
                name: "school",
                message: "What is the Intern's school?",
                // validate: (resp) => {}
            },
        ])
        .then((resp) => {
            console.log(resp);
            const intern = new Intern(resp.name, resp.empId, resp.email, resp.school);
            console.log(`This is the Intern: ${intern}`);
            myTeam.push(intern);
            console.log(myTeam);
            optionsList();
        })
}

function optionsList() {
    inquirer
        .prompt ([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["Add an Engineer to the team.", "Add an Intern to the team.", "My team is complete."]
            },
        ])
        .then((resp) => {
            switch (resp.choice) {
                case "Add an Engineer to the team.":
                    createEngineerProfile();
                    break;
                case "Add an Intern to the team.":
                    createInternProfile();
                    break;
                case "My team is complete.":
                    createHTML("index.html", createTeamSite(myTeam));
            }
        })
}

function createHTML(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if(error) throw error;
        console.log("Team page is being made!");
    })
}