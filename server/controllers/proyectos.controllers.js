const Proyecto = require("../models/proyectos.models");

module.exports.crearNuevoProyecto = (req, res) => {
    Proyecto.create(req.body, { runValidators: true })
        .then((nuevoProyecto) => res.status(200).json(nuevoProyecto))
        .catch((err) =>
            res.status(400).json({ message: "Algo salió mal", error: err })
        );
};

module.exports.traerTodoProyectos = (req, res) => {
    Proyecto.find(req.body)
        .then((data) => res.status(200).json([...data]))
        .catch((err) =>
            res.status(400).json({ message: "Algo salió mal", error: err })
        );
};

module.exports.actualizarProyecto = (req, res) => {
    const _id = req.params._id;
    console.log(req.body);
    Proyecto.updateOne({ _id: _id }, req.body, { runValidators: true })
        .then((resultado) => res.status(200).json(resultado))
        .catch((error) => res.status(400).json(error));
};

module.exports.deleteProyecto = (req, res) => {
    const _id = req.params._id;
    console.log(req.body);
    Proyecto.deleteOne({ _id: _id })
        .then((resultado) => res.status(200).json(resultado))
        .catch((error) => res.status(400).json(error));
};