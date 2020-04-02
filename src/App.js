import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  // Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = []
  }

  // Arreglo de cirtas guardadas
  const [citas, saveCitas] = useState(citasIniciales);

  // Uso de useEffect
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas] );

  // Funcion para actualizar citas guardadas
  const crearCita = cita => {
    saveCitas([...citas, cita]);
  };

  // Funcion para eliminar cita
  const eliminarCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id);
    saveCitas(newCitas);
  };

  // titulo
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
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
