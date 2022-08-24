import TC from "../tutor/trinomiosCuadraticos/TrinomiosCuadraticos";
import data from "../tutor/trinomiosCuadraticos/ejerciciosTC.json";
import { Stack } from "@chakra-ui/react";
import { LoadContentAction } from "../components/actions/LoadContentAction";

function IndexPage({ exercise }) {
  LoadContentAction(exercise); //action
  return (
    <Stack width="100%" padding="1em">
      <TC exercise={exercise} nextRouter="/TC2"></TC>
    </Stack>
  );
}
export async function getServerSideProps() {
  return {
    props: { exercise: data[0] }, // will be passed to the page component as props
  };
}

export default IndexPage;
