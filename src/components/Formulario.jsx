import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // Crear state para citas
  const [cita, updateCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [error, updateError] = useState(false);

  // Manejar input en formas
  const handleChange = e => {
    updateCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const handleSubmit = e => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      updateError(true);
      return;
    }
    updateError(false);

    // Asignar un ID
    cita.id = uuidv4();

    // Crear Cita
    crearCita(cita);

    // Resetear formulario
    updateCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  // Extraer Valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Favor llenar todos los campos</p>
      ) : null}

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
