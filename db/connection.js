var mysql = require("mysql");
var util = require("util");

var connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "Axlelee87!",
    database: "employee_trackerDB"
});

connection.connect();



//this allows us to use connection as a promise instead of a callback and allows async functions
connection.query = util.promisify(connection.query);

module.exports = connection;