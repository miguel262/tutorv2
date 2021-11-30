import React, { useRef, useState,useEffect } from "react";
import { MathComponent } from "../../../components/MathJax";
import { Loading } from "../../tools/Spinner";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  Wrap,
  WrapItem,
  Center,
  Spacer,
} from "@chakra-ui/react";

import Hint from "../../tools/Hint";
import { useAction } from "../../../utils/action";
const FCCpaso1 = ({
  ejercicio,
  setPaso1Valido,
  paso1Valido,
  loading,
  contentID,
}) => {
  const response = useRef(null);
  const [estado, setEstado] = useState(null);
  const [error, setError] = useState(false);
  //let idPasoSiguiente = null;
  const correctAlternatives = ejercicio.answers.map((element) => element.answer);
  const action=useAction();

  const comparar = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const responseStudent = response.current.value.replace(/[*]| /g, "").toLowerCase();

    //valida que la entrada es correctas
    const valida = (element) => element === responseStudent;
    //El método some() comprueba si al menos un elemento del array
    //cumple con la condición implementada por la función proporcionada.
    

    if (correctAlternatives.some(valida)) {
      setEstado(
        <>
          <Alert status="success">
            <AlertIcon />
            {ejercicio.correctMsg}
          </Alert>
        </>
      );
      setPaso1Valido((paso1Valido = "Terminado"));
      action({
        verbName: "completeContent",
        stepID: ""+ejercicio.stepId,
        contentID:"4",
      });
    } else {
      /**/
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
          {loading && <Loading />}
          <MathComponent
            tex={String.raw`${ejercicio.expression}`}
            display={false}
          />
        </WrapItem>

        <Spacer />

        <WrapItem>
          <Center>
            <label>(</label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w={160}
              focusBorderColor="#9DECF9"
              placeholder="Ingrese factor común"
              ref={response}
              isReadOnly={paso1Valido != null}
            />
            <label>)</label>

            {paso1Valido === null ? (
              <label>&nbsp;(?)</label>
            ) : (
              <>
                <MathComponent
                  tex={String.raw`${ejercicio.displayResult}`}
                  display={false}
                />
              </>
            )}
          </Center>
        </WrapItem>

        <Spacer />

        <WrapItem>
          {paso1Valido === null && (
            <>
              <Button
                colorScheme="cyan"
                size="sm"
                variant="outline"
                onClick={()=>{
                    comparar();
                    action({
                      verbName: "tryStep",
                      stepID: ""+ejercicio.stepId,
                      contentID:"4",
                      result: paso1Valido===null?0:1,
                      kcsIDs:[1],
                    // topicID: ""+ejercicio.itemId,
                    });
                    
                  }
                }
              >
                Aceptar
              </Button>
              &nbsp;&nbsp;
              <Hint
                ejercicio={ejercicio.hints}
                contentId="4"
                stepId="0"
                itemTitle="Factor Común"
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
export default FCCpaso1;
