import DSC from "../components/tutor/diferenciaSumaCubos/DiferenciaSumaCubos";
import data from "../components/tutor/diferenciaSumaCubos/ejerciciosDSC.json";
import { Stack } from "@chakra-ui/react";

function IndexPage({ exercise }) {
  return (
    <Stack width="100%" padding="1em">
      <DSC exercise={exercise} nextRouter="/TC1"></DSC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: { exercise: data[1] }, // will be passed to the page component as props
  };
}

export default IndexPage;
