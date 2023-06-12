const Employee = require("../lib/Employee");

let employees = [];

test("create an employee", () => {
  let name = "Billy";
  let id = 4;
  let email = "Billy@email.com";
  let addEmployee = new Employee (name, id, email);
  employees.push(addEmployee);
  expect(employees.length).toBe(1);
});

test("check employee name", () => {
  expect(employees[0].name).toBe("Billy");
});

test("check employee id", () => {
  expect(employees[0].id).toBe(4);
});

test("check employee email", () => {
  expect(employees[0].email).toBe("Billy@email.com");
});
