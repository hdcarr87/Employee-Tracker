var connection = require("./connection.js");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    //make a list of all employees for the "view emp"
    findAllEmp() {
        return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) As manager FROM employee LEFT JOIN on role.dept_id = role.id LEFT JOIN department on role.dept_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
    }

    //new department
    createNewDep(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }

    //create a new role
    createRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    }

    //Add a new employee
    createEmp(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }

    //view all departments
    findAllDept() {
        return this.connection.query( "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.dept_id = department.id GROUP BY department.id, department.name;");
    }

    //view all roles
    findAllRoles() {
        return this.connection.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.dept_id = department.id;");
    }

    //update an employee's role
    updateEmpRole(employeeId, roleId) {
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]);
    }
}

module.exports = new DB(connection);