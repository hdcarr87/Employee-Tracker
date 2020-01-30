var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "Axlelee87!",
    database: "employee_trackerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            "Add new department",
            "Add new role",
            "Add new employee",
            "View all departments",
            "View all roles",
            "Vew all employees",
            "Update employee role"
        ]
    })
    .then(function(answer) {
        switch (answer.action) {
            case "Add new department":
                addDepartment();
                break;

            case "Add new role":
                addRole();
                break;

            case "Add new employee":
                addEmployee();
                break;

            case "View all departments":
                viewDepartments();
                break;

            case "View all roles":
                viewRoles();
                break;

            case "View all employees":
                viewEmp();
                break;

            case "Update employee role":
                updateRole();
                break;
        }
    });
}

function addDepartment() {
    inquirer.prompt({
        name: "name",
        type: "input",
        message: "What department do you want to add?"
    })
    .then(function(answer) {
        var query = "INSERT INTO department SET ?";
        var result = connection.query(query, answer);
        
        //console.table(result);
        //console.log(answer.department);
    });
            
};
