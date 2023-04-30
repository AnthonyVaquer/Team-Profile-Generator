const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const path = require("path");
const fs = require("fs");

let employees = []


inquirer.prompt([
    {
        message: 'Who is the team manager?',
        type: 'input',
        name: 'name',
    },
    {
        message: "What is the manager's ID number?",
        type: 'input',
        name: 'id'
    },
    {
        message: "What is the manager's office number?",
        type: 'input',
        name: 'officeID'
    },
    {
        message: "What is the manager's email address?",
        type: 'input',
        name: 'email'
    }
])

// add a new manager to the array

.then(manager => {
    let addManager = new Manager(manager.name, manager.id, manager.officeID, manager.email)
    // console.log("Manager has been added. Please input intern information next.");
    employees.push(addManager);
})

.then(() => {
    inquirer.prompt([
        {
            message: "What is the intern's name?",
            type: 'input',
            name: 'name',
        },
        {
            message: "What is the intern's ID number?",
            type: 'input',
            name: 'id'
        },
        {
            message: "What is the intern's email address?",
            type: 'input',
            name: 'email'
        },
        {
            message: "What school does the intern attend?",
            type: 'input',
            name: 'school'
        }
    ])

    // add a new intern to the array
    .then(intern => {
        let addIntern = new Intern(intern.name, intern.id, intern.email, intern.school)
        // console.log("Intern has been added. Please input engineer information next.");
        employees.push(addIntern);
    })
})
.then(() => {
    inquirer.prompt([
        {
            message: "What is the engineer's name?",
            type: 'input',
            name: 'name',
        },
        {
            message: "What is the engineer's ID number?",
            type: 'input',
            name: 'id'
        },
        {
            message: "What is the engineer's email address?",
            type: 'input',
            name: 'email'
        },
        {
            message: "What is the engineer's GitHub?",
            type: 'input',
            name: 'github'
        }
    ])

    //add a new engineer to employee array
    .then(engineer => {
        let addEngineer = new Engineer (engineer.name, engineer.id, engineer.email, engineer.github)
        employees.push(addEngineer);
        // console.log("Engineer has been added.")
        console.log(employees);
    })
});
