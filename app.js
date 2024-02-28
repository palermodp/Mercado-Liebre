const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.post("/register", (req, res) => {
  res.send("Se ha registrado de manera exitosa.");
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.use(express.static("public"));
