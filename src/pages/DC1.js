import DC from "../tutor/diferenciaCuadrados/DiferenciaCuadrados";
import data from "../tutor/diferenciaCuadrados/ejerciciosDC.json";
import { Stack } from "@chakra-ui/react";
import { LoadContentAction } from "../components/actions/LoadContentAction";

function IndexPage({ exercise }) {
  return (
    <Stack width="100%" padding="1em">
      <DC exercise={exercise}></DC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: { exercise: data[0] }, // will be passed to the page component as props
  };
}

export default IndexPage;
