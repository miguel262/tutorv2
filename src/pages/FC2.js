import FC from "../tutor/factorComun/FactorComun";
import { Spinner, Stack } from "@chakra-ui/react";
import { useGQLQuery } from "rq-gql";
import { gql } from "../graphql";
import { Loading } from "../tutor/tools/Spinner";
//import { useAction } from "../utils/action";
//import { useEffect } from "react";

function IndexPage({ exercise }) {
  const { data, isLoading } = useGQLQuery(
    gql(/* GraphQL */ `
      query ProjectData {
        project(code: "NivPreAlg") {
          content(pagination: { first: 25 }, filters: { topics: 3 }) {
            nodes {
              json
            }
          }
        }
      }
    `)
  );

  /* const action=useAction();
  useEffect(() => {
    action({
      verbName: "loadContent",
      contentID:exercise.code,// leer contentId del JSON
    })}, [])*/

  return (
    <Stack width="100%" padding="1em">
      {!isLoading ? (
        <FC
          exercise={data.project.content.nodes[1].json}
          nextRouter="/FCC1"
        ></FC>
      ) : (
        <Loading></Loading>
      )}
    </Stack>
  );
}

export default IndexPage;
