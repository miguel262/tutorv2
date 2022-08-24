import TC from "../tutor/trinomiosCuadraticos/TrinomiosCuadraticos";
import data from "../tutor/trinomiosCuadraticos/ejerciciosTC.json";
import { Stack } from "@chakra-ui/react";
import { LoadContentAction } from "../components/actions/LoadContentAction";

function IndexPage({ exercise }) {
  LoadContentAction(exercise); //action
  return (
    <Stack width="100%" padding="1em">
      <TC exercise={exercise} nextRouter="/"></TC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: { exercise: data[1] }, //1 will be passed to the page component as props
  };
}

export default IndexPage;
