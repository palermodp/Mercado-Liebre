const express = require("express");
const path = require("path");

const indexController = {
  mostrarIndex: (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
  },
};

module.exports = indexController;
