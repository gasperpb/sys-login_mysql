const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const e = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.post("/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios WHERE nome=? AND password=?";

  db.query(sql, [req.body.nome, req.body.password], (err, data) => {
    if (err) return res.json("login failed");
    if (data.length > 0) {
      return res.json("login success");
    } else {
      return res.json("login failed");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
