import { chakra, Button, Heading, Container } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxW="container.md">
      <chakra.div pt="32">
        <Heading size="4xl" my={4}>
          Dev Sahaaya
        </Heading>
        <chakra.p color="gray.500" pb="4">
          Resources for Javascript Developers
        </chakra.p>
        <Button rightIcon={<ArrowForwardIcon />}>Resources</Button>
      </chakra.div>
    </Container>
  );
};

export default Home;
