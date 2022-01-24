import DC from "../tutor/diferenciaCuadrados/DiferenciaCuadrados";
import data from "../tutor/diferenciaCuadrados/ejerciciosDC.json";
import { Stack } from "@chakra-ui/react";
import { useAction } from "../utils/action";
import {useEffect} from "react";

function IndexPage({exercise}) {
  const action=useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID: exercise.itemId,
    })}, [])
  return (
    <Stack width="100%" padding="1em">
      <DC exercise={exercise}></DC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: {exercise:data[0]}, // will be passed to the page component as props 
  }
}

export default IndexPage; 