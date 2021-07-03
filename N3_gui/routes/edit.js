var express = require("express");
var router = express.Router();
var Person = require("../models/Person");

/* GET página do formulário de edição com os dados que estão na tabela 
  http://localhost:4000/edit/:id
*/

router.get("/edit/:id", function (req, res, next) {
  Person.findById(req.params.id)
    .then((person) => {
      res.render("edit", {
        title: "Fórmulário de Edição",
        id: req.params.id,
        age: person.age,
        sex: person.sex,
        cp: person.cp,
        chol: person.chol,
      });
    })
    .catch((error) => {
      res.send("Erro ao localizar a pessoa. Erro: " + error);
    });
});

/**
Para realizar a edição do dado na tabela
  http://localhost:4000/edition/:id
 */

router.post("/edition/:id", function (req, res, next) {
  Person.update(
    {
      age: req.body.age,
      sex: req.body.sex,
      cp: req.body.cp,
      chol: req.body.chol,
    }
    //{ where: { id: req.params.id } }
  )
    .then(function () {
      console.log("Pessoa atualizada com sucesso!");
      res.redirect("/list");
    })
    .catch(function (error) {
      res.send("Erro ao atualizar a pessoa. Erro: " + error);
    });
});

module.exports = router;
