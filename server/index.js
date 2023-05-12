// const mysql = require("mysql2");
require('./database/db');
const router = require('./routes/router');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();

// ***************** Middle Ware ***************** //

app.use(express.json());
app.use(cors());

app.use(router);

// app.use(bodyParser, urlencoded({extended: true}));

// ***************** Mysql Database Connection ***************** //

// const conn = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "SHA#07husen7",
//   database: "crud_mysql",
// });

// ***************** Getdata Api ***************** //

// app.get("/api/get", (req, res) => {
//   const sqlGet = "SELECT * FROM crud_1";
//   conn.query(sqlGet, (err, result) => {
//     res.send(result);
//   });
// });

// ***************** Getdata Api for Particular User ***************** //

// app.get("/api/get/:id", (req, res) => {
//   const { id } = req.params;
//   const sqlGet = "SELECT * FROM crud_1 WHERE id = ?";
//   conn.query(sqlGet, id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// ***************** Postdata Api ***************** //

// app.post("/api/post", (req, res) => {
//   const { name, email, contact } = req.body;
//   const sqlInsert =
//     "INSERT INTO crud_1 (name, email, contact) VALUES (?, ?, ?) ";
//   conn.query(sqlInsert, [name, email, contact], (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// ***************** Removedata Api ***************** //

// app.delete("/api/remove/:id", (req, res) => {
//   const { id } = req.params;
//   const sqlRemove = "DELETE FROM crud_1 WHERE id = ? ";
//   conn.query(sqlRemove, id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// ***************** Updatedata Api ***************** //

// app.put("/api/update/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, email, contact } = req.body;
//   const sqlUpdate =
//     "UPDATE crud_1 SET name = ?, email = ?, contact = ? WHERE id = ? ";
//   conn.query(sqlUpdate, [name, email, contact, id], (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// ***************** Direct All Operation Are Worked With Database Using This Code ***************** //

// app.get("/api/gets", (req, res) => {
//     const sql = "DELETE FROM crud_1 WHERE id = 3";
//     conn.query(sql, (err, result) => {
//         console.log(result);
//     })
// })

// ***************** Server Start Code ***************** //

app.listen(5000, () => {
  console.log("Server is Running on Port 5000");
});
