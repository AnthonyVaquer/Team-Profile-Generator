const Intern = require("../lib/Intern");

let employees = [];

test("create an intern", () => {
  let name = "Jimmy";
  let id = 1;
  let email = "intern@email.com";
  let school = "CSULB";
  let addIntern = new Intern(name, id, email, school);
  console.log(addIntern)
  employees.push(addIntern);
  expect(employees.length).toBe(1);
});

test("check intern school", () => {
  expect(employees[0].school).toBe("CSULB");
});

test("check intern name", () => {
  expect(employees[0].name).toBe("Jimmy");
});

test("check intern email", () => {
  expect(employees[0].email).toBe("intern@email.com");
});

test("check intern id", () => {
  expect(employees[0].id).toBe(1);
});
