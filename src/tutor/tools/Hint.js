import React, { useState } from "react";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Center,
  Badge,
} from "@chakra-ui/react";
import { useAction } from "../../utils/action";

const Hint = ({
  ejercicio,
  stepId,
  contentId,
  itemTitle,
  error,
  setError,
}) => {
  const [i, setI] = useState(0); //para los hints
  const [lista] = useState([ejercicio[0]]);
  const [j, setJ] = useState(0); //para los botones
  const [firstStep, setFirstStep] = useState(false);

  const action=useAction();

  const ayuda = () => {
    
    if ((ejercicio.length > lista.length) & error & firstStep) {
      

      lista.push(ejercicio[i + 1]);

      setI(i + 1);
      setJ(i + 1);
    }
    setFirstStep(true);
    setError(false);
  };
  const siguiente = () => {

    if (lista[j + 1] != null) {
      setJ(j + 1);
      action({
        verbName: "requestHint",
        stepID: ""+stepId,
        contentID: contentId,
        hintID: ""+(j+1),
        extra:{
          source:"next"
        }
      });
    } 
  };
  const atras = () => {

    if (lista[j - 1] != null) {
      setJ(j - 1);
      action({
        verbName: "requestHint",
        stepID: ""+stepId,
        contentID: contentId,
        hintID: ""+(j-1),
        extra:{
          source:"prev"
        }
      });
    }
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button
            onClick={()=>{
              ayuda();
              action({
                verbName: "requestHint",
                stepID: ""+stepId,
                contentID: contentId,
                hintID: ""+lista.length-1,
                extra:{
                  source:"Open"
                }
              });
            }}
            colorScheme="cyan"
            variant="outline"
            size="sm"
          >
            Ayuda &nbsp;
            {error && i < ejercicio.length - 1 ? ( //en esta parte va la notificación de un nuevo hint
              <Badge
                boxSize="1.25em"
                color="white"
                bg="tomato"
                borderRadius="lg"
              >
                1
              </Badge>
            ) : (
              <Badge boxSize="1.25em" color="white" bg="gray" borderRadius="lg">
                0
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <br />
            {lista[j].hint} <br />
            <br />
            <Center>
              {lista[j - 1] && (
                <Button
                  onClick={atras}
                  colorScheme="cyan"
                  variant="outline"
                  size="sm"
                >
                  atras
                </Button>
              )}
              &nbsp;&nbsp;&nbsp;
              {lista[j + 1] && (
                <Button
                  onClick={siguiente}
                  colorScheme="cyan"
                  variant="outline"
                  size="sm"
                >
                  siguiente
                </Button>
              )}
            </Center>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Hint;
