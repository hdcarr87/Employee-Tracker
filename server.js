
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

//add a department
async function addDepartment() {
     var department = await prompt([
         {
             name: "name",
             message: "What department do you want to add?"
         }
     ]);

     await db.createNewDep(department);

     console.log(`Added ${department.name} to the database`);

     initialPrompts();
};

//add a new role
async function addRole() {
    var departments = await db.findAllDepts();
    var departmentOptions = departments.map(({ id, name }) =>
    ({
        name: name,
        value: id
    }));

    var role = await prompt([
        {
            name: "title",
            message: "What is the name of the role?"
        },{
            name: "salary",
            message: "What is the salary?"
        },{
            name: "department_id",
            type: "list",
            message: "Which department will this new role be in?",
            choices: departmentOptions
        }
    ]);

    await db.createRole(role);

    console.log(`Added ${role.title} to the database`);

    initialPrompts();
}

//add new emp
async function addEmployee() {
    var roles = await db.findAllRoles();
    var employees = await db.findAllEmp();

    var newEmp = await prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },{
            name: "last_name",
            message: "What is the employee's last name?"
        },
    ]);

    var roleOptions = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    var { roleId } = await prompt({
        name: "roleId",
        type: "list",
        message: "What is the employee's role?",
        choices: roleOptions
    });

    newEmp.role_id = roleId;

    var managerOptions = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));

    managerOptions.unshift({ name: "None", value: null });

    var { managerId } = await prompt({
        name: "managerId",
        type: "list",
        message: "Whi is the employee's manager?",
        choices: managerOptions
    });

    employees.manager_id = managerId;

    await db.createEmp(employee);

    console.log(`Added ${employee.first_name} ${employee.last_name} to the database`);

    initialPrompts();
}

 //view all departments
async function viewDepartments() {
    var departments = await db.findAllDept();

    console.table(departments);

    initialPrompts();
}

//view all roles
async function viewRoles() {
    var roles = await db.findAllRoles();

    console.table(roles);

    initialPrompts();
}

//update role
async function updateRole() {
    var employees = await db.findAllEmp();

    var employeeNames = employees.map(({ id, first_name, last_name}) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));

    var { employeeId } = await prompt([
        {
            name: "employeeId",
            type: "list",
            message: "Which employee's role do you want to update?",
            choices: employeeNames
        }
    ]);

    var roles = await db.findAllRoles();

    var roleOptions = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    var { roleId } = await prompt([
        {
            name: "roleId",
            type: "list",
            message: "Which role to you want to assign to the employee?",
            choices: roleOptions
        }
    ]);

    await db.updateEmpRole(employeeId, roleId);

    console.log("Employee's role has been updated");
    
    initialPrompts();
}