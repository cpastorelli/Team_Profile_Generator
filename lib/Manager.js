class Manager extends Employee() {
    constructor(name, empID, email, office) {
        super(name, empID, email);
        this.office = office;
    }
    
    getOffice(){
        return this.office;
    }

    getRole(){
        return "Manager";
    }
}