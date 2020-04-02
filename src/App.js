import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Arreglo de cirtas guardadas
  const [citas, saveCitas] = useState([]);

  // Funcion para actualizar citas guardadas
  const crearCita = cita => {
    saveCitas([...citas, cita]);
  };

  // Funcion para eliminar cita
  const eliminarCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id);
    saveCitas(newCitas);
  };

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id} 
                cita={cita} 
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
