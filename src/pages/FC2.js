import FC from "../tutor/factorComun/FactorComun";
//import { Ejercicio1 } from "../../tutor/factorComun/EjerciciosFC";
import data from "../tutor/factorComun/ejercicioFC.json";
import { Stack } from "@chakra-ui/react";
import { useAction } from "../utils/action";
import {useEffect} from "react";

function IndexPage({ejercicio}) {
  const action=useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID:ejercicio.itemId,// leer contentId del JSON
    })}, [])
  
  return (
      <Stack width="100%" padding="1em">
        <FC ejercicio={ejercicio} nextRouter="/FCC1"></FC>
      </Stack>
  );
}
export async function getServerSideProps() {
  //const fs = require('fs');
  //const exercise = data[0]
  return {
    props: {ejercicio:data[1]}, // will be passed to the page component as props
  }
}

export default IndexPage;
