const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
    .connect("mongodb://127.0.0.1:27017/ProyectManager", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Base de datos conectada"))
    .catch((error) => console.log(error));