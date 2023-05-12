const mysql = require("mysql2");

// ***************** Mysql Database Connection ***************** //

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SHA#07husen7",
    database: "crud_mysql",
  });

  conn.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Databae Connected");
    }
  })

module.exports = conn;