import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario"

function App() {

  // Arreglo de cirtas guardadas
  const [ citas, saveCitas ] = useState([]);

  // Funcion para actualizar citas guardadas
  const crearCita = cita => {
    saveCitas([ ...citas, cita ]);
  }

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
