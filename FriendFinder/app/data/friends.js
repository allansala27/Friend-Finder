var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "squanch0",
  database: "friends_db"
});

connection.query("INSERT INTO friends VALUES")