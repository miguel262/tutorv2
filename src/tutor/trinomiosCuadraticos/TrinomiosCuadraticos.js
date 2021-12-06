import React, { useState, useEffect } from "react";
//import { Ejercicio2 } from "./EjerciciosTC";
import { MathComponent } from "../../components/MathJax";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { TCpaso1 } from "./steps/TCpaso1";
import { TCpaso2 } from "./steps/TCpaso2";
import { TCpaso3 } from "./steps/TCpaso3";
import { TCpaso4 } from "./steps/TCpaso4";
import { TCpaso5 } from "./steps/TCpaso5";
import { TCsummary } from "../tools/Summary";
import { Loading } from "../tools/Spinner";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Alert,
  Wrap, Spacer
} from "@chakra-ui/react";

import { VideoScreen } from "../tools/VideoScreen";
import { SelectStep } from "../tools/SelectStep";
import { useAction } from "../../utils/action";

//react functional component
const TC = ({ejercicio}) => {
  //const ejemplo = Ejercicio1;
  //const ejercicio = Ejercicio2;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [paso2Valido, setPaso2Valido] = useState(null);
  const [paso3Valido, setPaso3Valido] = useState(null);
  const [paso4Valido, setPaso4Valido] = useState(null);
  const [paso5Valido, setPaso5Valido] = useState(null);
  //const [paso6Valido, setPaso6Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [hintsTerminado2, setHintsTerminado2] = useState(null);
  const [hintsTerminado3, setHintsTerminado3] = useState(null);
  const [hintsTerminado4, setHintsTerminado4] = useState(null);
  const [hintsTerminado5, setHintsTerminado5] = useState(null);
  const [index, setIndex] = useState([0]);

   //selectStep
   const [select, setSelect] = useState(true);
   const [select2, setSelect2] = useState(true);
   const [select3, setSelect3] = useState(true);
   const [select4, setSelect4] = useState(true);
   const [select5, setSelect5] = useState(true);
   //const [select6, setSelect6] = useState(true);
   const steps = ejercicio.steps.map((i)=>i.stepTitle);

  useEffect(() => {
    //cierra paso 1 al completarlo
    if (paso1Valido != null) {
      setIndex([1]);
    }
  }, [paso1Valido]);

  useEffect(() => {
    //cierra paso 2 al completarlo
    if (paso2Valido != null) {
      setIndex([2]);
    }
  }, [paso2Valido]);

  useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso3Valido != null) {
      setIndex([3]);
    }
  }, [paso3Valido]);

  useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso4Valido != null) {
      setIndex([4]);
    }
  }, [paso4Valido]);

  /*useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso5Valido != null) {
      setIndex([5]);
    }
  }, [paso5Valido]);*/

  const [loading, setLoading] = useState(true);
  const change = () => setLoading(false);
  const action=useAction();

  return (
    <>
      {/*Ejemplo diferencia de cubos 
            <TCejemplo ejemplo={ejemplo}></TCejemplo>
            */}
      <BreadcrumbTutor
        root="Factorización"
        item={ejercicio.itemTitle}
      ></BreadcrumbTutor>

      <Wrap>{ejercicio.text}
        <Spacer/>
        {//<VideoScreen></VideoScreen>
        }
      </Wrap>

      <Wrap justify="center">
        {loading && <Loading />}
        <MathComponent
          tex={ejercicio.steps[0].expression}
          display={true}
          onSuccess={change}
        />
      </Wrap>

      <Accordion allowToggle allowMultiple index={index} style={{ padding: 0 }}>
        <AccordionItem isFocusable={false} isDisabled = {select}>
          <Alert colorScheme={paso1Valido == null ? "blue" : "green"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 0)) {
                  setIndex(index.filter((e) => e !== 0));
                  action({
                    verbName: "closeStep",
                    stepID: ""+ejercicio.steps[0].stepId,
                    contentID:"8",//cambiar para leer del json
                  });
                } else {
                  setIndex(index.concat(0));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[0].stepId,
                    contentID:"8", //leer del json
                  });
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {!select&&ejercicio.steps[0].stepTitle}
                {paso1Valido != null && !select&& "    ✔ "}
                {select&&<Wrap>Paso 1:<SelectStep correct={0} steps={steps} setSelect={setSelect} contentID="8"></SelectStep></Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
          {!select&&
            <TCpaso1
                ejercicio={ejercicio.steps[0]}
                setPaso2Valido={setPaso1Valido}
                paso2Valido={paso1Valido}
                hintsTerminado={hintsTerminado}
                setHintsTerminado={setHintsTerminado}
              ></TCpaso1>
            }
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isDisabled = {select2}>
          <Alert
            colorScheme={
              paso2Valido == null
                ? paso1Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 1)) {
                  setIndex(index.filter((e) => e !== 1));
                  action({
                    verbName: "closeStep",
                    stepID: ""+ejercicio.steps[1].stepId,
                    contentID:"8",//cambiar para leer del json
                  });
                } else {
                  setIndex(index.concat(1));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[1].stepId,
                    contentID:"8", //leer del json
                  });
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {!select2&& ejercicio.steps[1].stepTitle}
                {paso2Valido != null && !select2&& "    ✔ "}
                {select2&&paso1Valido != null&&<Wrap>Paso 2:<SelectStep correct={1} steps={steps} setSelect={setSelect2} contentID="8"></SelectStep></Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso1Valido != null && !select2&& (
              <TCpaso2
                ejercicio={ejercicio.steps[1]}
                setPaso3Valido={setPaso2Valido}
                paso3Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></TCpaso2>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isDisabled = {select3}>
          <Alert
            colorScheme={
              paso3Valido == null
                ? paso2Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 2)) {
                  setIndex(index.filter((e) => e !== 2));
                  action({
                    verbName: "closeStep",
                    stepID: ""+ejercicio.steps[2].stepId,
                    contentID:"8",//cambiar para leer del json
                  });
                } else {
                  setIndex(index.concat(2));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[2].stepId,
                    contentID:"8", //leer del json
                  });
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {!select3 && ejercicio.steps[2].stepTitle}
                {paso3Valido != null && !select3 && "    ✔ "}
                {select3&&paso2Valido != null&&<Wrap>Paso 3:<SelectStep correct={2} steps={steps} setSelect={setSelect3} contentID="8"></SelectStep></Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso2Valido != null && !select3&& (
              <TCpaso3
                ejercicio={ejercicio.steps[2]}
                setPaso4Valido={setPaso3Valido}
                paso4Valido={paso3Valido}
                hintsTerminado={hintsTerminado3}
                setHintsTerminado={setHintsTerminado3}
              ></TCpaso3>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isDisabled = {select4}>
          <Alert
            colorScheme={
              paso4Valido == null
                ? paso3Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 3)) {
                  setIndex(index.filter((e) => e !== 3));
                  action({
                    verbName: "closeStep",
                    stepID: ""+ejercicio.steps[3].stepId,
                    contentID:"8",//cambiar para leer del json
                  });
                } else {
                  setIndex(index.concat(3));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[3].stepId,
                    contentID:"8", //leer del json
                  });
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {!select4 && ejercicio.steps[3].stepTitle}
                {paso4Valido != null && !select4&& "    ✔ "}
                {select4&&paso3Valido != null&&<Wrap>Paso 4:<SelectStep correct={3} steps={steps} setSelect={setSelect4} contentID="8"></SelectStep></Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso3Valido != null && !select4&&  (
              <TCpaso4
                ejercicio={ejercicio.steps[3]}
                setPaso5Valido={setPaso4Valido}
                paso5Valido={paso4Valido}
                hintsTerminado={hintsTerminado4}
                setHintsTerminado={setHintsTerminado4}
              ></TCpaso4>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isDisabled = {select5}>
          <Alert
            colorScheme={
              paso5Valido == null
                ? paso4Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 4)) {
                  setIndex(index.filter((e) => e !== 4));
                  action({
                    verbName: "closeStep",
                    stepID: ""+ejercicio.steps[4].stepId,
                    contentID:"8",//cambiar para leer del json
                  });
                } else {
                  setIndex(index.concat(4));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[4].stepId,
                    contentID:"8", //leer del json
                  });
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {!select5&& ejercicio.steps[4].stepTitle}
                {paso5Valido != null && !select5&& "    ✔ "}
                {select5&&paso4Valido != null&&<Wrap>Paso 5:<SelectStep correct={4} steps={steps} setSelect={setSelect5} contentID="8"></SelectStep></Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso4Valido != null && !select5&& (
              <TCpaso5
                ejercicio={ejercicio.steps[4]}
                setPaso6Valido={setPaso5Valido}
                paso6Valido={paso5Valido}
                hintsTerminado={hintsTerminado5}
                setHintsTerminado={setHintsTerminado5}
                a={ejercicio.steps[0].answers[0].answer[0]}
              ></TCpaso5>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {paso5Valido != null && (
              <TCsummary
                step1={ejercicio.steps[0]}
                step2={ejercicio.steps[1]}
                step3={ejercicio.steps[2]}
                step4={ejercicio.steps[3]}
                step5={ejercicio.steps[4]}
              />
      )}
    </>
  );
};

export default TC;
