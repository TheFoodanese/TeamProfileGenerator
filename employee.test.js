module.exports = Employee;

const Employee = import('../Employee');

describe('Employee', () => {
    it('should create an Employee object', () => {
        const employee = new Employee('John Doe', 123, 'john@example.com');

        expect(employee).toEqual(expect.any(Object));
        expect(employee.name).toEqual('John Doe');
        expect(employee.id).toEqual(123);
        expect(employee.email).toEqual('john@example.com');
    });

    it('should return the role of the employee', () => {
        const employee = new Employee('John Doe', 123, 'john@example.com');

        expect(employee.getRole()).toEqual('Employee');
    });
});
