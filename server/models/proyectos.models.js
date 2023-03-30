const mongoose = require("mongoose");

const SchemaProyecto = mongoose.Schema({
    proyecto: String,
    estado: String,
    vencimiento: Date,
});

const Proyecto = mongoose.model("Proyecto", SchemaProyecto);

module.exports = Proyecto;