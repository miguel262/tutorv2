import React, { useState, useEffect } from "react";
import { MathComponent } from "../../components/MathJax";
import FCCpaso1 from "./steps/FCCpaso1";
import FCCpaso2 from "./steps/FCCpaso2";
import FCpaso1 from "../factorComun/steps/FCpaso1";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { FCCsummary } from "../tools/Summary";
import { Loading } from "../tools/Spinner";
import { SelectStep } from "../tools/SelectStep";
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
import { useAction } from "../../utils/action";

const FCC = ({ejercicio}) => {//info usuario, ---
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [paso2Valido, setPaso2Valido] = useState(null);
  const [paso3Valido, setPaso3Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [hintsTerminado2, setHintsTerminado2] = useState(null);
  const [hintsTerminado3, setHintsTerminado3] = useState(null);
  const [index, setIndex] = useState([0,1,2]);
  //selectStep
  const [select, setSelect] = useState(true);
  const [select2, setSelect2] = useState(true);
  const [select3, setSelect3] = useState(true);
  const steps = ejercicio.steps.map((i)=>i.stepTitle);
  //useMutation
  const action=useAction();

  useEffect(() => {
    if (paso1Valido != null) {
      setIndex([1]);
    }
  }, [paso1Valido]);

  useEffect(() => {
    if (paso2Valido != null) {
      setIndex([2]);
    }
  }, [paso2Valido]);

  const [loading, setLoading] = useState(true);
  const change = () => setLoading(false);

  return (
    <>
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
                    contentID:"5",//cambiar para leer del json
                  });
                } else {
                  setIndex(index.concat(0));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[0].stepId,
                    contentID:"5", //leer del json
                  });
                }
              }}
              
            >
              <Box flex="1" textAlign="left">
                {!select&&ejercicio.steps[0].stepTitle
                }
                {paso1Valido != null && !select &&"    ✔ "
                }
                {select&&<Wrap>Paso 1:<SelectStep correct={0} steps={steps} setSelect={setSelect} contentID={ejercicio.itemId}></SelectStep>
                </Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {!select&&<FCCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              hintsTerminado={hintsTerminado}
              setHintsTerminado={setHintsTerminado}
              loading={loading}
              stepId={""+ejercicio.steps[0].stepId}
              contentId="5"
            ></FCCpaso1>}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isFocusable={true} isDisabled = {select2}>
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
                    contentID:"5",//cambiar para leer del json
                  });
                } else {
                  setIndex(index.concat(1));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[1].stepId,
                    contentID:"5", //leer del json
                  });
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {!select2&&ejercicio.steps[1].stepTitle}
                {paso2Valido != null && !select2 && "    ✔ "}
                {select2&&paso1Valido != null&&<Wrap>Paso 2:<SelectStep correct={1} steps={steps} setSelect={setSelect2} contentID={ejercicio.itemId}></SelectStep>
                </Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso1Valido != null && !select2&&(
              <FCCpaso2
                ejercicio={ejercicio.steps[paso1Valido]}
                setPaso2Valido={setPaso2Valido}
                paso2Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></FCCpaso2>
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
                    contentID:"5",//cambiar para leer del json
                  });
                } else {
                  setIndex(index.concat(2));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[2].stepId,
                    contentID:"5", //leer del json
                  });
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {!select3&&ejercicio.steps[ejercicio.steps[1].answers.nextStep].stepTitle}
                {paso3Valido != null && !select3 && "    ✔ "}
                {select3&&paso2Valido != null&&<Wrap>Paso 2:<SelectStep correct={2} steps={steps} setSelect={setSelect3} contentID={ejercicio.itemId}></SelectStep>
                </Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso2Valido != null && !select3&&(
              <FCpaso1
                ejercicio={ejercicio.steps[paso2Valido]}
                setPaso1Valido={setPaso3Valido}
                paso1Valido={paso3Valido}
                hintsTerminado={hintsTerminado3}
                setHintsTerminado={setHintsTerminado3}
              ></FCpaso1>
            )}
            
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
      {paso3Valido != null && (
        
          <FCCsummary 
            ejercicio={ejercicio}
          />
          )}
    </>
  );
};

export default FCC;
