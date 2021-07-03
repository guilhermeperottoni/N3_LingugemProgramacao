var express = require("express");
var router = express.Router();
var Person = require("../models/Person");

/* GET página do formulário de adição 
  http://localhost:4000/form
*/

router.get("/form", function (req, res, next) {
  res.render("add", { title: "Fórmulário" });
});

/**
  http://localhost:4000/add
 */

router.post("/add", function (req, res, next) {
  Person.create({
    age: req.body.age,
    sex: req.body.sex,
    cp: req.body.cp,
    chol: req.body.chol,
  })
    .then(function () {
      console.log("Pessoa cadastrada com sucesso!");
      res.redirect("/list");
    })
    .catch(function (error) {
      res.send("Erro ao cadastrar a pessoa. Erro: " + error);
    });
});

module.exports = router;
