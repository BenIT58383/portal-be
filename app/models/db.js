const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
connection.connect(function (err) {
  if (err) throw err;
  console.log('Database connected!');
  console.log('Database connected 3!');
});
module.exports = connection;
