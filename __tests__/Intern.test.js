const Intern = require("../lib/Manager");

let employees = [];

test("create an intern", () => {
  let name = "Jimmy";
  let id = 1;
  let email = "intern@email.com";
  let school = "Harvard";
  let addIntern = new Intern(name, id, email, school);
  employees.push(addManager);
  expect(employees.length).toBe(1);
});

test("check intern school", () => {
  expect(employees[0].school).toBe("Harvard");
});

test("check intern name", () => {
  expect(employees[0].name).toBe("Jimmy");
});

test("check intern email", () => {
  expect(employees[0].email).toBe("email");
});

test("check intern id", () => {
  expect(employees[0].id).toBe(1);
});
