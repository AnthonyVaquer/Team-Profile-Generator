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
.then(manager => {
    let addManager = new Manager(manager.name, manager.id, manager.officeID, manager.email)
    console.log(manager);
    employees.push(addManager);
    console.log(employees);

})