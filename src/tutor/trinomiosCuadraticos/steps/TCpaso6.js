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

export const TCpaso6 = ({
  ejercicio,
  setPaso6Valido,
  paso6Valido,
  hintsTerminado,
  setHintsTerminado,
  a,
}) => {
  const respuesta1 = useRef(null);
  const respuesta2 = useRef(null);
  const [estado, setEstado] = useState(null);
  const [error, setError] = useState(false);

  const correctas = ejercicio.answers[0].answer;
  const comparar = () => {
    const entrada = [
      respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),
      respuesta2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    const valida = (element) =>
      (element[0] === entrada[0] && element[1] === entrada[1]) ||
      (element[0] === entrada[1] && element[1] === entrada[0]);
    if (correctas.some(valida)) {
      setEstado(
        <Alert status="success">
          <AlertIcon />
          {ejercicio.correctMsg}
          &nbsp;
          <MathComponent tex={ejercicio.displayResult} display={false} />
        </Alert>
      );
      setPaso6Valido((paso6Valido = "Terminado"));
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
        <WrapItem padding="8px 0px 10px 0px">
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
            <label>{a !== 1 ? a : ""}(</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w={120}
              focusBorderColor="#9DECF9"
              placeholder="Primer factor"
              ref={respuesta1}
              isReadOnly={paso6Valido != null}
            />
            <label>)(</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w={120}
              focusBorderColor="#9DECF9"
              placeholder="Segundo factor"
              ref={respuesta2}
              isReadOnly={paso6Valido != null}
            />
            <label>)</label>
          </Center>
        </WrapItem>

        <Spacer />

        <WrapItem>
          {paso6Valido == null && (
            <>
              <Button
                colorScheme="cyan"
                variant="outline"
                onClick={comparar}
                size="sm"
              >
                Aceptar
              </Button>{" "}
              &nbsp; &nbsp;
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
      {estado}
    </>
  );
};
