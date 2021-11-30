import React, { useRef, useState } from "react";
import Hint from "../../tools/Hint";
import { MathComponent } from "../../../components/MathJax";
import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Spacer,
  Input,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const TCpaso3 = ({
  ejercicio,
  setPaso3Valido,
  paso3Valido,
  hintsTerminado,
  setHintsTerminado,
}) => {
  //hook para obtener un input
  const respuesta = useRef(null);
  //hook para volver a renderizar cuando el estudiante ingrese una respuesta
  const [estado, setEstado] = useState(null);

  const [error, setError] = useState(false);

  //resultado correcto (hay que validar para todas las entradas posibles)
  const correcta = ejercicio.answers[0].answer;
  let idPasoSiguiente = null;
  //esta función se ejecuta cuando se oprime el boton aceptar
  const comparar = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const entrada = respuesta.current.value.replace(/[*]| /g, "").toLowerCase();

    if (correcta === entrada) {
      //valida que la entrada es correcta
      setPaso3Valido((paso3Valido = ejercicio.answers[0].nextStep));
      /*setEstado(
                <div className="alert alert-success"> 
                    <p>{ejercicio.validacion}:&nbsp;
                    <MathComponent tex={ejercicio.soluciones[0].entrada}  display={false}/>
                    </p>
                    <p>
                    Entonces el discriminante es:
                    &nbsp;
                    <MathComponent tex={ejercicio.result_final}  display={false}/>
                    </p>
                </div>
            );*/
    } else {
      setError(true);
      setEstado(
        //error cuando la entrada es incorrecta
        <Alert status="error">
          <AlertIcon />
          {ejercicio.incorrectMsg}
        </Alert>
      );
    }
  };

  return (
    <>
      <Wrap padding="15px 10px 10px 10px">
        <WrapItem padding="5px 0px 10px 0px">
          <Center>
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            />
          </Center>
        </WrapItem>

        <Spacer />

        <WrapItem>
          <Center>
            <label>Δ = &nbsp;</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w={165}
              focusBorderColor="#9DECF9"
              placeholder="Ingrese discriminante"
              ref={respuesta}
              isReadOnly={paso3Valido != null}
            />
          </Center>
        </WrapItem>

        <Spacer />

        <WrapItem>
          {paso3Valido == null && (
            <>
              <Button
                colorScheme="cyan"
                variant="outline"
                onClick={comparar}
                size="sm"
              >
                Aceptar
              </Button>
              &nbsp;&nbsp;
              <Hint
                ejercicio={ejercicio.hints}
                setHintsTerminado={setHintsTerminado}
                stepId={ejercicio.stepId}
                itemTitle="Trinomios cuadráticos"
                error={error}
                setError={setError}
              ></Hint>
            </>
          )}
        </WrapItem>
      </Wrap>
      {paso3Valido == null && estado}
    </>
  );
};
