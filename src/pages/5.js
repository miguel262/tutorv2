import TC from "../tutor/trinomiosCuadraticos/TrinomiosCuadraticos";
import data from "../tutor/trinomiosCuadraticos/ejerciciosTC.json";
import { Stack } from "@chakra-ui/react";
import { useAction } from "../utils/action";
import {useEffect} from "react";

function IndexPage({ejercicio}) {
  const action=useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID:"8",
    })}, [])
  return (
    <Stack width="100%" padding="1em">
      <TC ejercicio={ejercicio}></TC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: {ejercicio:data[0]}, // will be passed to the page component as props
  }
}

export default IndexPage;