const express = require("express");
const router = new express.Router();
const conn = require("../database/db");

// ***************** Getdata Api ***************** //

router.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM crud_1";
  conn.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

// ***************** Getdata Api for Particular User ***************** //

router.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM crud_1 WHERE id = ?";
  conn.query(sqlGet, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// ***************** Postdata Api ***************** //

router.post("/api/post", (req, res) => {
  const { name, email, contact } = req.body;
  const sqlInsert =
    "INSERT INTO crud_1 (name, email, contact) VALUES (?, ?, ?) ";
  conn.query(sqlInsert, [name, email, contact], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// ***************** Removedata Api ***************** //

router.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM crud_1 WHERE id = ? ";
  conn.query(sqlRemove, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// ***************** Updatedata Api ***************** //

router.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  const sqlUpdate =
    "UPDATE crud_1 SET name = ?, email = ?, contact = ? WHERE id = ? ";
  conn.query(sqlUpdate, [name, email, contact, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// ***************** Direct All Operation Are Worked With Database Using This Code ***************** //

// router.get("/api/gets", (req, res) => {
//     const sql = "DELETE FROM crud_1 WHERE id = 3";
//     conn.query(sql, (err, result) => {
//         console.log(result);
//     })
// })

module.exports = routes;
