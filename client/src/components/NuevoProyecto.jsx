import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NuevoProyecto = () => {
  const [proyecto, setProyecto] = useState({
    proyecto: "",
    vencimiento: "",
    estado: "",
  });

  const handleChange = (e) => {
    setProyecto((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/proyecto/crear", {
        proyecto: proyecto.proyecto,
        estado: "backlog",
        vencimiento: proyecto.vencimiento,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        // setErrores(err.response.data.errors);
        console.log(err);
      });
  };

  return (
    <div>
      <h1> Project Manager </h1>
      <p>Planear nuevo proyecto</p>
      <form onSubmit={handleSubmit}>
        <label>Proyecto</label>
        <input type="text" name="proyecto" onChange={handleChange} />
        <br></br>
        <br></br>
        <br></br>
        <label>Fecha de Vencimiento</label>
        <input type="date" name="vencimiento" onChange={handleChange} />
        <br></br>
        <br></br>
        <button>Planear Proyecto</button>
      </form>
    </div>
  );
};

export default NuevoProyecto;
