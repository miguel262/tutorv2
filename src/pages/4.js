import DSC from "../tutor/diferenciaSumaCubos/DiferenciaSumaCubos";
import data from "../tutor/diferenciaSumaCubos/ejerciciosDSC.json";
import { Stack } from "@chakra-ui/react";
import { useAction } from "../utils/action";
import {useEffect} from "react";

function IndexPage({ejercicio}) {
  const action=useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID:"7",
    })}, [])
  return (
    <Stack width="100%" padding="1em">
      <DSC ejercicio={ejercicio}></DSC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: {ejercicio:data[0]}, // will be passed to the page component as props
  }
}

export default IndexPage;