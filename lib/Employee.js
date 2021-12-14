class Employee {
    constructor(name, empID, email) {
        this.name = name;
        this.id = empID;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}