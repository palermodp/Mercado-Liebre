let express = require("express");
let port = process.env.PORT || 3000;
let app = express();

let rutasMain = require("./routes/index");
let rutasLogin = require("./routes/login");
let rutasRegister = require("./routes/register");

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.use("/", rutasMain);
app.use("/login", rutasLogin);
app.use("/register", rutasRegister);

app.use(express.static("public"));
