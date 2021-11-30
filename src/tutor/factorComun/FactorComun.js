import React, { useState } from "react";
import FCpaso1 from "./steps/FCpaso1";
import { MathComponent } from "../../components/MathJax";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { Loading } from "../tools/Spinner";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  Box,
  Wrap, Spacer
} from "@chakra-ui/react";

import { FCsummary } from "../tools/Summary";
import { SelectStep } from "../tools/SelectStep";
import { VideoScreen } from "../tools/VideoScreen";
import { useAction } from "../../utils/action";

const FC = ({ ejercicio }) => {

  const action=useAction();
    
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [index, setIndex] = useState([0]);
  const [loading, setLoading] = useState(true);

  const change = () => setLoading(false);
//selectStep
  const [select, setSelect] = useState(true);
  const steps = ejercicio.steps.map((i)=>i.stepTitle);

  return (
    <div>
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
        <AccordionItem isDisabled = {select}>
          <Alert colorScheme={paso1Valido == null ? "blue" : "green"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 0) && !select) {//cerrarTab
                  setIndex(index.filter((e) => e !== 0)); 
                  action({
                    verbName: "closeStep",
                    stepID: ""+ejercicio.steps[0].stepId,
                    contentID:"4",//cambiar para leer del json
                  });
                }                
                else { //no select= false (abrirTab)
                  setIndex(index.concat(0));
                  action({
                    verbName: "openStep",
                    stepID: ""+ejercicio.steps[0].stepId,
                    contentID:"4", //leer del json (cambiar)
                  });
                  console.log(ejercicio.itemId);
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {!select && ejercicio.steps[0].stepTitle
                }
                {paso1Valido != null && !select && "    ✔ "
                }
                {select&&<Wrap>Paso 1:<SelectStep correct={0} steps={steps} setSelect={setSelect} contentID="4"></SelectStep>
                </Wrap>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            <>
              {!select &&<FCpaso1
                ejercicio={ejercicio.steps[0]}
                setPaso1Valido={setPaso1Valido}
                paso1Valido={paso1Valido}
                loading={loading}
                contentID="4" //cambiar a futuro
              ></FCpaso1>}
            </>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {paso1Valido != null && (
                <FCsummary ejercicio={ejercicio.steps[0]} />
              )}
    </div>
  );
};

export default FC;
