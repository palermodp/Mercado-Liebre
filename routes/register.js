let express = require("express");
let path = require("path");
let router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/register.html"));
});

router.post("/", (req, res) => {
  res.send("Se ha registrado de manera exitosa.");
});

module.exports = router;
