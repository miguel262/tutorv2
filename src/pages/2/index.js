import FCC from "../../tutor/factorComunCompuesto/FactorComunCompuesto";
import data from "../../tutor/factorComunCompuesto/ejerciciosFCC.json";
import { Stack } from "@chakra-ui/react";
import { useAction } from "../../utils/action";
import {useEffect} from "react";

function IndexPage({ejercicio}) {
  const action=useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID:"5",
    //  stepID: ""+ejercicio.steps[0].stepId,
     // topicID: ""+ejercicio.itemId,
    })}, [])
  return (
    <Stack width="100%" padding="1em">
      <FCC ejercicio={ejercicio}></FCC>
    </Stack>
  );
}
export async function getServerSideProps() {
  //const fs = require('fs');
  //const exercise = data[0]
  return {
    props: {ejercicio:data[0]}, // will be passed to the page component as props
  }
}

export default IndexPage;