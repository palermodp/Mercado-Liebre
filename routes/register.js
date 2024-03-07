const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.get("/", registerController.mostrarRegister);

router.post("/", (req, res) => {
  res.send("Se ha registrado de manera exitosa.");
});

module.exports = router;
