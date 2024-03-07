const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

const rutasMain = require("./routes/index");
const rutasLogin = require("./routes/login");
const rutasRegister = require("./routes/register");

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.use("/", rutasMain);
app.use("/login", rutasLogin);
app.use("/register", rutasRegister);

app.use(express.static("public"));
