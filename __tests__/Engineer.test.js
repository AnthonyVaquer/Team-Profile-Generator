const Engineer = require("../lib/Engineer");

let employees = [];

test("create an engineer", () => {
  let name = "Ricky";
  let id = 2;
  let email = "Ricky@email.com";
  let gitHub = "github.com/ricky";
  let addEngineer = new Engineer (name, id, email, gitHub);
  employees.push(addEngineer);
  expect(employees.length).toBe(1);
});

test("check engineer name", () => {
  expect(employees[0].name).toBe("Ricky");
});

test("check engineer id", () => {
  expect(employees[0].id).toBe(2);
});

test("check engineer email", () => {
  expect(employees[0].email).toBe("Ricky@email.com");
});

test("check engineer GitHub", () => {
    expect(employees[0].gitHub).toBe("github.com/ricky");
  });