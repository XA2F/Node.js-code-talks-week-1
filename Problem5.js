//Here we will be just importing the MySQL module.
var mysql = require("mysql");
//Here we create a variable connection, and it will have our method create a connection that will take in these objects as their argument and the properties they contain.
var connection = mysql.createConnection({
  host: "localhost",
  user: "your username",
  password: "your password",
  database: "your database name",
});
// This will connect to the MySQL server and use error as its parameter, in which case if an error occurs, it'll just print out that error. The argument inside the if statement just makes it more strict. If everything goes well, the console will be printed. log("connected!:")
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});
//Here, we would just be exporting the connection.
module.exports = connection;
