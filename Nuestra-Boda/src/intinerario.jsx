import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import CuentaRegresiva from "./componentes-encabezado/Contador";
import FraseEspecial from "./componentes-encabezado/Frase";
import Encuesta from "./componentes-encabezado/Encuenta";

export default function Itinerario() {

  return (
    <div>


      <CuentaRegresiva/>
      
      <FraseEspecial/>
  

        <Celebracion/>



      <Vestimenta />




      <Encuesta/>
      <ConfirmacionAsistencia/>
    </div>
  );
}