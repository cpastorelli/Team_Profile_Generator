const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('Set GitHub account', () =>{
    const gitHubAccount = 'QueenCleopatra';
    const emp = new Engineer('Cleopatra', 30, 'Cleopatra@Philopator.com', gitHubAccount);
    expect(emp.gitHub).toBe(gitHubAccount);
});