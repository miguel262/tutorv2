import { Stack ,Heading, Button,Text,UnorderedList,ListItem} from "@chakra-ui/react";
import Link from 'next/link'
import { useAuth } from "./../components/Auth";

export default function IndexPage() {
  const { user } = useAuth();
  return <Stack width="100%" padding="3em">
    {user&&(<><Stack alignItems="center">
      <Heading>Tópico de factorización</Heading>
    </Stack>
    <Stack padding="2em">
    <Text>Los ejercicios de factorización a resolver corresponden a los siguientes subtópicos: </Text>
    <UnorderedList>
      <ListItem>Factor Común</ListItem>
      <ListItem>Factor Común Compuesto</ListItem>
      <ListItem>Diferencia de Cuadrados</ListItem>
      <ListItem>Diferencia de Cubos</ListItem>
      <ListItem>Suma de Cubos</ListItem>
      <ListItem>Trinomios Cuadráticos</ListItem>
    </UnorderedList>
    </Stack>
    <Stack padding="1em"  alignItems="center">
      <Link href="/ejemplo">
      <Button 
        colorScheme="cyan" 
        variant="outline"
        size="lg">
          Comenzar
      </Button>
      </Link>
    </Stack></>)}
    
  </Stack>;
}
