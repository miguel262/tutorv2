import FC from "../tutor/factorComun/FactorComun";
import { Spinner, Stack } from "@chakra-ui/react";
import { useGQLQuery } from "rq-gql";
import { gql } from "../graphql";
import { Loading } from "../tutor/tools/Spinner";

function IndexPage() {
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

  return (
    <Stack width="100%" padding="1em">
      {!isLoading ? (
        <>
          <FC
            exercise={data?.project?.content?.nodes[0]?.json}
            nextRouter="/FC2"
          ></FC>
        </>
      ) : (
        <Loading></Loading>
      )}
    </Stack>
  );
}

export default IndexPage;
