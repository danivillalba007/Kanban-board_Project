import Tablero from "./components/Tablero";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NuevoProyecto from "./components/NuevoProyecto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tablero />}></Route>
          <Route path="/nuevoProyecto" element={<NuevoProyecto />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
