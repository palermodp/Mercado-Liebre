const express = require("express");
const path = require("path");

let loginController = {
  mostrarLogin: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/login.html"));
  },
};

module.exports = loginController;
