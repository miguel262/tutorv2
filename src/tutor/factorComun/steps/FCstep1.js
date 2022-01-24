import React, { useRef, useState,useEffect } from "react";
import { MathComponent } from "../../../components/MathJax";
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
const FCCstep1 = ({
  step1,
  setStep1Valid,
  step1Valid,
  contentID,
}) => {
  const response = useRef(null);   // answer entered by the student
  const [feedbackMsg, setFeedbackMsg] = useState(null); //feedback message
  const [error, setError] = useState(false); //true when the student enters an incorrect answers
  const correctAlternatives = step1.answers.map((element) => element.answer); //list of answers valid
  const action=useAction(); //send action to central system

  const compare = () => {
    //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
    const responseStudent = response.current.value.replace(/[*]| /g, "").toLowerCase();
    //valida que la entrada es correctas
    const validate = (element) => element === responseStudent;
    //El método some() comprueba si al menos un elemento del array
    //cumple con la condición implementada por la función proporcionada.
    

    if (correctAlternatives.some(validate)) {
      setFeedbackMsg(
        <>
          <Alert status="success">
            <AlertIcon />
            {step1.correctMsg}
          </Alert>
        </>
      );
      setStep1Valid((step1Valid = "Terminado"));
      action({
        verbName: "completeContent",
        contentID: contentID,
      });
    } else {
      /**/
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
          <MathComponent
            tex={String.raw`${step1.expression}`}
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
              isReadOnly={step1Valid != null}
            />
            <label>)</label>

            {step1Valid === null ? (
              <label>&nbsp;(?)</label>
            ) : (
              <>
                <MathComponent
                  tex={String.raw`${step1.displayResult}`}
                  display={false}
                />
              </>
            )}
          </Center>
        </WrapItem>

        <Spacer />

        <WrapItem>
          {step1Valid === null && (
            <>
              <Button
                colorScheme="cyan"
                size="sm"
                variant="outline"
                onClick={()=>{
                    compare();
                    action({
                      verbName: "tryStep",
                      stepID: ""+step1.stepId,
                      contentID:contentID,
                      result: step1Valid===null?0:1,
                      kcsIDs:[1],
                      //extra:{
                       // resp: response
                     // }
                    });
                    
                  }
                }
              >
                Aceptar
              </Button>
              &nbsp;&nbsp;
              <Hint
                hints={step1.hints}
                contentId={contentID}
                stepId={step1.stepId}
                itemTitle="Factor Común"
                error={error}
                setError={setError}
                
              ></Hint>
            </>
          )}
        </WrapItem>
      </Wrap>

      {feedbackMsg}
    </>
  );
};
export default FCCstep1;
