const Manager = require('../lib/Manager')

let employees = [];

test('create a manager', () => {
    let name = 'test'
    let id = 0
    let email = 'test@email.com'
    let officeNumber = 1
    let addManager = new Manager (name, id, email, officeNumber)
    employees.push(addManager);
  expect(employees.length).toBe(1);
});

test('check manager office number', () => {
expect(employees[0].officeNumber).toBe(1)
})

test('check manager name', () => {
    expect(employees[0].name).toBe('test')
})