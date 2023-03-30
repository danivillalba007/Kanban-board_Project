const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//base de datos
require("./config/mongoose.config");

//enrutamiento
const RutaProyectos = require("./routes/proyectos.routes");
RutaProyectos(app);

//levantar servidor node
app.listen(port, () => console.log("servidor corriendo en puerto:" + port));