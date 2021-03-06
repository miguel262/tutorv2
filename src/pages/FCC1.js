import FCC from "../tutor/factorComunCompuesto/FactorComunCompuesto";
import data from "../tutor/factorComunCompuesto/ejerciciosFCC.json";
import { Stack } from "@chakra-ui/react";
import { useAction } from "../utils/action";
import {useEffect} from "react";

function IndexPage({exercise}) {
  const action=useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID:exercise.itemId,
    })}, [])
  return (
    <Stack width="100%" padding="1em">
      <FCC exercise={exercise}></FCC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: {exercise:data[0]}, // will be passed to the page component as props
  }
}

export default IndexPage;