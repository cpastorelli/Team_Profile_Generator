const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, managerID, email, office) {
        super(name, managerID, email);
        this.office = office;
    }
    
    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;