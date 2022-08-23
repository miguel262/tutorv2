import TC from "../tutor/trinomiosCuadraticos/TrinomiosCuadraticos";
import data from "../tutor/trinomiosCuadraticos/ejerciciosTC.json";
import { Stack } from "@chakra-ui/react";
import { useAction } from "../utils/action";
import { useEffect } from "react";

function IndexPage({ exercise }) {
  const action = useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID: exercise.code,
    });
  }, []);
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
