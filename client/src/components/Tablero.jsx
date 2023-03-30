import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Tablero.css";

const Tablero = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [proyectos, setProyectos] = useState([]);

  const apiListarProyectos = () => {
    axios
      .get("http://localhost:8000/api/proyectos/")
      .then((res) => {
        setProyectos(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiListarProyectos();
  }, []);

  const handleClickMoverCompleto = (index, data) => {
    axios
      .put("http://localhost:8000/api/proyecto/update/" + data._id, {
        _id: data._id,
        proyecto: data.proyecto,
        estado: "completed",
        vencimiento: data.vencimiento,
      })
      .then((res) => {
        navigate("/");
        apiListarProyectos();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleClickMoverProgreso = (index, data) => {
    axios
      .put("http://localhost:8000/api/proyecto/update/" + data._id, {
        _id: data._id,
        proyecto: data.proyecto,
        estado: "progress",
        vencimiento: data.vencimiento,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
        apiListarProyectos();
      })
      .catch((err) => console.log(err));
  };

  const handleClickBorrar = (_id) => {
    axios
      .delete("http://localhost:8000/api/proyecto/delete/" + _id)
      .then((res) => {
        console.log(res.data);
        apiListarProyectos();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Project Manager</h1>
      <table className="tabla">
        <tbody>
          <tr>
            <td className="Backlog">Backlog</td>
            <td className="Progress">In Progress</td>
            <td className="Completed">Completed</td>
          </tr>
          <tr className="contenedor_proyectos">
            <td className="BacklogCont">
              {proyectos
                .filter((data) => data.estado === "backlog")
                .map((data, index) => (
                  <div className="tarjeta" key={"back" + index}>
                    {data.proyecto} <br />
                    Vence: {moment(data.vencimiento).format("DD-MM-YYYY")}
                    <br />
                    <button
                      className="empezar"
                      onClick={() => handleClickMoverProgreso(index, data)}
                    >
                      Empezar Proyecto
                    </button>
                  </div>
                ))}
            </td>

            <td className="ProgressCont">
              {proyectos
                .filter((data) => data.estado === "progress")
                .map((data, index) => (
                  <div className="tarjeta" key={"prog" + index}>
                    {data.proyecto} <br />
                    Vence: {moment(data.vencimiento).format("DD-MM-YYYY")}
                    <br />
                    <button
                      className="mover"
                      onClick={() => handleClickMoverCompleto(index, data)}
                    >
                      Mover a Completado
                    </button>
                  </div>
                ))}
            </td>

            <td className="CompletedCont">
              {proyectos
                .filter((data) => data.estado === "completed")
                .map((data, index) => (
                  <div className="tarjeta" key={"comp" + index}>
                    {data.proyecto} <br />
                    Vence: {moment(data.vencimiento).format("DD-MM-YYYY")}
                    <br />
                    <button
                      className="borrar"
                      onClick={() => handleClickBorrar(data._id)}
                    >
                      Borrar Proyecto
                    </button>
                  </div>
                ))}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button">
        <button onClick={() => navigate("/nuevoProyecto")}>
          Add new Proyect
        </button>
      </div>
    </div>
  );
};

export default Tablero;
