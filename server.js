
var { prompt } = require("inquirer");
var db = require("./db");
require("console.table");


init();

function init() {
    initialPrompts();
}

async function initialPrompts() {
    const { choice } = await prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Vew all employees",
            "Add new department",
            "Add new role",
            "Add new employee",
            "View all departments",
            "View all roles",
            "Update employee role",
        ]
    }
);
    
        switch (choice) {
            case "View all employees":
                return viewEmp();

            case "Add new department":
                return addDepartment();

            case "Add new role":
                return addRole();
                
            case "Add new employee":
                return addEmployee();

            case "View all departments":
                return viewDepartments();

            case "View all roles":
                return viewRoles();

            case "Update employee role":
                return updateRole();
        };
    };
  
//load all current employees
async function viewEmp() {
    var employees = await findAllEmp();
    console.table(employees);
    initialPrompts();
};


async function addDepartment() {
     var department = await prompt([
         {
             name: "name",
             message: "What department do you want to add?"
         }
     ]);

     await db.createNewDep(department);

     console.log("Added ${department.name} to the database");

     initialPrompts();
};