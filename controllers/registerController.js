const express = require("express");
const path = require("path");

let registerController = {
  mostrarRegister: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/register.html"));
  },
};

module.exports = registerController;
