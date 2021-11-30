import React from "react";
import { Alert, Wrap, Heading, Spacer, Text,Box } from "@chakra-ui/react";
import { MathComponent } from "../../components/MathJax";

export const FCsummary = ({ ejercicio }) => {
  return (
    <Box>
      <Alert status="info">
        <Wrap>
          <Heading w="100%" fontSize="xl" align="center">
            Resumen
          </Heading>
          <Text w="100%"/>
          &nbsp;Expresión: &nbsp;&nbsp;&nbsp;
            <MathComponent
              tex={String.raw`${ejercicio.expression}`}
              display={false}
            /><Text w="100%"/>
            <Text w="100%">{ejercicio.summary}</Text>
              <MathComponent
                tex={String.raw`(${ejercicio.answers[0].answer})${ejercicio.displayResult}`}
                display={false}
              />
        </Wrap>
      </Alert>
    </Box>
  );
};

export const FCCsummary = ({ ejercicio }) => {
  return (
    <Box>
    <Alert status="info" >
      <Wrap>
      <Heading w="100%" fontSize="xl" align="center"> Resumen</Heading>
      <Text w="100%"/>
      &nbsp;Expresión: &nbsp;&nbsp;&nbsp;
      <MathComponent
            tex={String.raw`${ejercicio.steps[0].expression}`}
            display={false}
      /><Text w="100%"/>
      <Text w="100%">{ejercicio.steps[0].summary}</Text>
      
      {ejercicio.steps.length>3 ? 
      <>
        <Text> Forma 1: <MathComponent
            tex={String.raw`${ejercicio.steps[1].expression}`}
            display={false}
      /></Text>
      <Spacer/>
        <Text> Forma 2: 
        <MathComponent
            tex={String.raw`${ejercicio.steps[2].expression}`}
            display={false}
      /></Text><Spacer/>  
      </>: //si no 
      <MathComponent
      tex={String.raw`${ejercicio.steps[1].expression}`}
      display={false}
      />}
      <Text w="100%"/>
      
      <Text w="100%">{ejercicio.steps[1].summary}</Text>
      {ejercicio.steps.length>3 ? 
      <>
        <Text> Forma 1: <MathComponent
            tex={String.raw`${ejercicio.steps[3].expression}`}
            display={false}
      /></Text>
      <Spacer/>
        <Text> Forma 2: 
        <MathComponent
            tex={String.raw`${ejercicio.steps[4].expression}`}
            display={false}
      /></Text><Spacer/>  
      </>: //si no 
      <MathComponent
      tex={String.raw`${ejercicio.steps[2].expression}`}
      display={false}
      />}
<Text w="100%"/>

      {ejercicio.steps.length>3 ? 
      <>
      <Text w="100%">{ejercicio.steps[4].summary}</Text>
        <Text> Forma 1: <MathComponent
            tex={String.raw`(${ejercicio.steps[3].answers[0].answer})${ejercicio.steps[3].displayResult}`}
            display={false}
      /></Text>
      <Spacer/>
        <Text> Forma 2: 
        <MathComponent
            tex={String.raw`(${ejercicio.steps[4].answers[0].answer})${ejercicio.steps[4].displayResult}`}
            display={false}
      /></Text><Spacer/>  
      </>: //si no 
      <>
      <Text w="100%">{ejercicio.steps[2].summary}</Text>
      <MathComponent
      tex={String.raw`(${ejercicio.steps[2].answers[0].answer})${ejercicio.steps[2].displayResult}`}
      display={false}
      /></>}

      </Wrap>
    </Alert>
    </Box>
  );
};

export const DCsummary = ({ step1, step2 }) => {
  return (
    <Box>
      <Alert status="info">
        <Wrap>
          <Heading w="100%" fontSize="xl" align="center">
            Resumen
          </Heading>
          <Text w="100%"/>
          &nbsp;Expresión: &nbsp;&nbsp;&nbsp;
            <MathComponent
              tex={String.raw`${step1.expression}`}
              display={false}
            /><Text w="100%"/>
            <Text w="100%">{step1.summary}</Text>
            <MathComponent
                tex={String.raw`${step1.displayResult}`}
                display={false}
              /><Text w="100%"/>
              <Text w="100%">{step2.summary}</Text>
            <MathComponent
                tex={String.raw`${step2.displayResult}`}
                display={false}
              />
        </Wrap>
      </Alert>
    </Box>
  );
};

export const DSCsummary = ({ step1, step2}) => {
  return (
    <Box>
      <Alert status="info">
      <Wrap>
          <Heading w="100%" fontSize="xl" align="center">
            Resumen
          </Heading>
          <Text w="100%"/>
          &nbsp;Expresión: &nbsp;&nbsp;&nbsp;
            <MathComponent
              tex={String.raw`${step1.expression}`}
              display={false}
            /><Text w="100%"/>
            <Text w="100%">{step1.summary}</Text>
            <MathComponent
                tex={String.raw`${step1.displayResult}`}
                display={false}
              /><Text w="100%"/>
              <Text w="100%">{step2.summary}</Text>
            <MathComponent
                tex={String.raw`${step2.displayResult}`}
                display={false}
              />
        </Wrap>
      </Alert>
    </Box>
  );
};

export const TCsummary = ({ step1, step2, step3, step4, step5, step6 }) => {
  return (
    <Box>
      <Alert status="info">
        <Wrap>
        <Heading w="100%" fontSize="xl" align="center">
            Resumen
          </Heading>
          <Text w="100%"/>
          &nbsp;Expresión: &nbsp;&nbsp;&nbsp;
            <MathComponent
              tex={String.raw`${step1.expression}`}
              display={false}
            />
            <Text w="100%"/>
            <Text w="100%">{step1.summary}</Text>
            <MathComponent
                tex={String.raw`${step1.displayResult}`}
                display={false}
              /><Text w="100%"/>
              <Text w="100%">{step2.summary}</Text>
            <MathComponent
                tex={String.raw`${step2.displayResult}`}
                display={false}
              /><Text w="100%"/>
              <Text w="100%">{step3.summary}</Text>
            <MathComponent
                tex={String.raw`${step3.displayResult}`}
                display={false}
              /><Text w="100%"/>
              <Text w="100%">{step4.summary}</Text>
            <Text w="100%">{step4.displayResult}</Text>
              <Text w="100%">{step5.summary}</Text>
            <MathComponent
                tex={String.raw`${step5.displayResult}`}
                display={false}
              /><Text w="100%"/>
              <Text w="100%">{step6.summary}</Text>
            <MathComponent
                tex={String.raw`${step6.displayResult}`}
                display={false}
              />
        </Wrap>
      </Alert>
    </Box>
  );
};
