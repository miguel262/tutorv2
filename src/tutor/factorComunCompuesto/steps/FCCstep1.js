import React, { useRef, useState } from "react";
import { MathComponent } from "../../../components/MathJax";
import Hint from "../../tools/Hint";
import { useAction } from "../../../utils/action";
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

const FCCstep1 = ({
  step1,
  setStep1Valid,
  step1Valid,
  loading,
  contentID,
}) => {
  const response1 = useRef(null); //first input response
  const response2 = useRef(null); //second input response
  const [feedbackMsg, setFeedbackMsg] = useState(null); //feedback message
  const [error, setError] = useState(false); //true when the student enters an incorrect answers
  const correctAlternatives = step1.answers.map((elemento) => elemento.answer); //list of answers valid
  const action=useAction();//send action to central system

  const compare = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const responseStudent = [
      response1.current.value.replace(/[*]| /g, "").toLowerCase(),
      response2.current.value.replace(/[*]| /g, "").toLowerCase(),
    ];
    //valida que la entrada es correctas
    const validate = (element) =>
      (element[0] === responseStudent[0] && element[1] === responseStudent[1]) ||
      (element[0] === responseStudent[1] && element[1] === responseStudent[0]);
    //El método some() comprueba si al menos un elemento del array
    //cumple con la condición implementada por la función proporcionada.
    if (correctAlternatives.some(validate)) {
      setStep1Valid(
        (step1Valid = step1.answers[correctAlternatives.findIndex(validate)].nextStep)
      );
    } else {
      setError(true);

      setFeedbackMsg(
        //error cuando la entrada es incorrecta
        <Alert status="error">
          <AlertIcon />
          {step1.incorrectMsg}
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
              tex={String.raw`${step1.expression}`}
              display={false}
            />
          </Center>
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
              w={125}
              focusBorderColor="#9DECF9"
              placeholder="Ingrese grupo 1"
              ref={response1}
              isReadOnly={step1Valid != null}
            />
            <label>)&nbsp;+&nbsp;( </label>
            <Input
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
              size="sm"
              w={125}
              focusBorderColor="#9DECF9"
              placeholder="Ingrese grupo 2"
              ref={response2}
              isReadOnly={step1Valid != null}
            />
            <label> ) </label>
          </Center>
        </WrapItem>

        <Spacer />

        <WrapItem>
          {step1Valid === null && (
            <>
              <Button
                colorScheme="cyan"
                variant="outline"
                onClick={()=>{
                  compare();
                  action({
                    verbName: "tryStep",
                    stepID: ""+step1.stepId,
                    contentID:contentID,
                    result: step1Valid===null?0:1,
                    kcsIDs:[2],
                  // topicID: ""+ejercicio.itemId,
                  })
                }
                }
                size="sm"
              >
                Aceptar
              </Button>
              &nbsp;&nbsp;
              <Hint
                hints={step1.hints}
                //stepId={ejercicio.stepId}
                contentId={contentID}
                stepId={step1.stepId}
                itemTitle="Factor Común compuesto "
                error={error}
                setError={setError}
              ></Hint>
            </>
          )}
        </WrapItem>
      </Wrap>

      {step1Valid == null && feedbackMsg}
    </>
  );
};
export default FCCstep1;
