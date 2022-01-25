const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Create a new employee object with only name variable',() => {
    const empName = 'Genghis';
    const emp = new Employee(empName);
    expect(emp.name).toBe(empName);
});

test('Create a new employee object with only email variable',() => {
    const empEmail = 'Genghis@Khan.com';
    const emp = new Employee('Genghis', 1227, empEmail);
    expect(emp.email).toBe(empEmail);
});

test('Create a new employee object with only ID variable',() => {
    const empID = 1227;
    const emp = new Employee('Gehghis', empID);
    expect(emp.id).toBe(empID);
});

