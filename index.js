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
    console.log("Hey there! Lets talk about your team for a bit.");
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
                name: "managerID",
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
            const manager = new Manager(resp.name, resp.managerID, resp.email, resp.office);
            console.log(`This is the manager: ${manager.name}`);
            myTeam.push(manager);
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
                name: "engineerID",
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
            const engineer = new Engineer(resp.name, resp.engineerID, resp.email, resp.gitHub);
            console.log(`This is the engineer: ${engineer}`);
            myTeam.push(engineer);
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
                name: "internID",
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
            const intern = new Intern(resp.name, resp.internID, resp.email, resp.school);
            console.log(`This is the Intern: ${intern}`);
            myTeam.push(intern);
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
        console.log("Team is being populated!");
    })
}