import FCC from "../components/tutor/factorComunCompuesto/FactorComunCompuesto";
import data from "../components/tutor/factorComunCompuesto/ejerciciosFCC.json";
import { Stack } from "@chakra-ui/react";
import { LoadContentAction } from "../components/actions/LoadContentAction";

function IndexPage({ exercise }) {
  return (
    <Stack width="100%" padding="1em">
      <FCC exercise={exercise}></FCC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: { exercise: data[0] }, // will be passed to the page component as props
  };
}

export default IndexPage;
