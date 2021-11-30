import React, { useState } from "react";
import Hint from "../../tools/Hint";
import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Stack,
  Radio,
  RadioGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const TCpaso4 = ({ ejercicio, setPaso4Valido, paso4Valido }) => {
  let idPasoSiguiente = null;
  const [estado, setEstado] = useState(null);
  const [value, setValue] = React.useState(); //checked radio
  const [error, setError] = useState(false);

  const comparar = () => {
    if (ejercicio.answers[0].answer === value) {
      setPaso4Valido((paso4Valido = ejercicio.answers[0].nextStep));
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
        <WrapItem>
          <Center>
            <RadioGroup onChange={setValue} value={value}>
              <Stack>
                <Radio value="1" isReadOnly={paso4Valido != null}>
                  Factorizable con diferentes raices
                </Radio>
                <Radio value="2" isReadOnly={paso4Valido != null}>
                  Factorizable con raices iguales
                </Radio>
                <Radio value="3" isReadOnly={paso4Valido != null}>
                  No es factorizable (raíces complejas)
                </Radio>
              </Stack>
            </RadioGroup>
          </Center>
        </WrapItem>

        <WrapItem padding="25px 0px 0px 70px">
          {paso4Valido == null && (
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
                //setHintsTerminado={setHintsTerminado}
                stepId={ejercicio.stepId}
                itemTitle="Trinomios cuadráticos"
                error={error}
                setError={setError}
              ></Hint>
            </>
          )}
        </WrapItem>
      </Wrap>
      {paso4Valido == null && estado}
    </>
  );
};
