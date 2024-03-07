let express = require("express");
let path = require("path");
let router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

module.exports = router;
