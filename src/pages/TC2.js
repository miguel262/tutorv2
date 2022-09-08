import TC from "../components/tutor/trinomiosCuadraticos/TrinomiosCuadraticos";
import data from "../components/tutor/trinomiosCuadraticos/ejerciciosTC.json";
import { Stack } from "@chakra-ui/react";

function IndexPage({ exercise }) {
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
