import {
  chakra,
  Button,
  Heading,
  Container,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { Seo } from "components/seo/Seo";
import { siteConfig } from "utils/siteconfig";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Seo
        title={siteConfig.sitename}
        description={siteConfig.description}
      />
      <Container maxW="container.md">
        <chakra.div pt="32">
          <Heading size="4xl" my={4}>
            {siteConfig.sitename}
          </Heading>
          <chakra.p color="gray.500" pb="4">
            {siteConfig.description}
          </chakra.p>
          <Button
            rightIcon={<ArrowForwardIcon />}
            onClick={() =>
              router.push("/resources/javascript")
            }
          >
            Resources
          </Button>
        </chakra.div>
      </Container>
    </>
  );
};

export default Home;
