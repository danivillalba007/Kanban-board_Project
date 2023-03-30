const ProyectoController = require("../controllers/proyectos.controllers");

module.exports = (app) => {
    app.post("/api/proyecto/crear", ProyectoController.crearNuevoProyecto);
    app.get("/api/proyectos/", ProyectoController.traerTodoProyectos);
    app.put("/api/proyecto/update/:_id", ProyectoController.actualizarProyecto);
    app.delete("/api/proyecto/delete/:_id", ProyectoController.deleteProyecto);
};