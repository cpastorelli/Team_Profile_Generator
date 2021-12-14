class Engineer extends Employee {
    constructor(name, empID, email, gitHub) {
        super(name, empID, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}