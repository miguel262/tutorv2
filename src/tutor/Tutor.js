import React from "react";
import FC from "./factorComun/FactorComun";
import FCC from "./factorComunCompuesto/FactorComunCompuesto";
import DC from "./diferenciaCuadrados/DiferenciaCuadrados";
import DSC from "./diferenciaSumaCubos/DiferenciaSumaCubos";
import TC from "./trinomiosCuadraticos/TrinomiosCuadraticos";
import { Ejercicio1 } from "./factorComun/EjerciciosFC";
export const Tutor = () => {
  return (
    <>
      {
        //<FC ejercicio={Ejercicio1}></FC>
        //<FCC></FCC>
      }
      <FC ejercicio={Ejercicio1}></FC>
    </>
  );
};
