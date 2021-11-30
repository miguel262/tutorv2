import FC from "../../tutor/factorComun/FactorComun";
//import { Ejercicio1 } from "../../tutor/factorComun/EjerciciosFC";
import data from "../../tutor/factorComun/ejercicioFC.json";
import { Stack } from "@chakra-ui/react";
import { useAction } from "../../utils/action";
import {useEffect} from "react";

function IndexPage({ejercicio}) {
  const action=useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID:"4",
    //  stepID: ""+ejercicio.steps[0].stepId,
     // topicID: ""+ejercicio.itemId,
    })}, [])

  return (
    <Stack width="100%" padding="1em">
      <FC ejercicio={ejercicio}></FC>
    </Stack>
  );
}
export async function getServerSideProps() {
  //const fs = require('fs');
  //const exercise = data[0]
  return {
    props: {ejercicio:data[2]}, // will be passed to the page component as props
  }
}

export default IndexPage;
