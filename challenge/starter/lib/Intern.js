import Employee from "./Employee.js";


class Intern extends Employee {
    
    constructor(name, id, email, school, ){
    super(name, id, email);
    this.school = school;
    }

    getSchool() {
        return 'School';
    }

    getRole() {
        return 'Student';
    }
}

export default Intern;