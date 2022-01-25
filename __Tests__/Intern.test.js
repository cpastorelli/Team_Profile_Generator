
const { expect } = require('@jest/globals');
const { white } = require('color-name');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('Set school', () =>{
    const school = 'Golden Girls High';
    const emp = new Intern('Betty', 99, 'Betty@white.com', school );
    expect(emp.school).toBe(school);
});