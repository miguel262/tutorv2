import DSC from "../components/tutor/diferenciaSumaCubos/DiferenciaSumaCubos";
import data from "../components/tutor/diferenciaSumaCubos/ejerciciosDSC.json";
import { Stack } from "@chakra-ui/react";
import { LoadContentAction } from "../components/actions/LoadContentAction";

function IndexPage({ exercise }) {
  return (
    <Stack width="100%" padding="1em">
      <DSC exercise={exercise} nextRouter="/DSC2"></DSC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: { exercise: data[0] }, // will be passed to the page component as props
  };
}

export default IndexPage;
