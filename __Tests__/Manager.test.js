
const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('Set Office Number', () => {
    const office = '19C';
    const emp = new Manager('Aristotle', 322, 'Father@philoosphy.com', office);
    expect(emp.office).toBe(office);
});