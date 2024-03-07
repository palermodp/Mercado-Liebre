let express = require("express");
let path = require("path");
let router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/login.html"));
});

module.exports = router;
