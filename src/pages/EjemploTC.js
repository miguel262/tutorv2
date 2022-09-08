import TC from "../components/tutor/trinomiosCuadraticos/TrinomiosCuadraticos";
import data from "../components/tutor/trinomiosCuadraticos/ejerciciosTC.json";
import { Stack } from "@chakra-ui/react";
import { LoadContentAction } from "../components/actions/LoadContentAction";

function IndexPage({ exercise }) {
  return (
    <Stack width="100%" padding="1em">
      <TC exercise={exercise} nextRouter="/"></TC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: { exercise: data[2] }, // will be passed to the page component as props
  };
}

export default IndexPage;
