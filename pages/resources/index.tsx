import { GetStaticProps, NextPage, NextPageContext } from "next";
import React from "react";
import Link from "next/link";
import {
  Container,
  Link as ResourceLink,
  Heading,
  SimpleGrid,
  Box,
  chakra,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async () => {
  const response: IResources[] = await (
    await fetch(`${process.env.BASE_URL}/api/resources`)
  ).json();
  return {
    props: {
      data: response,
    },
  };
};

const ResourcesTags: NextPage<{ data: IResources[] }> = ({ data }) => {
  return (
    <Container maxW="container.lg" my="10">
      <Heading textAlign="center" mb="10" fontSize={["2xl", "3xl", "4xl"]}>
        Resource Categories
      </Heading>
      <SimpleGrid minChildWidth="120px" spacingY="20" spacingX="10">
        {data?.map((tag: any) => {
          return (
            <ResourceLink
              as={Link}
              href={`/resources/${tag.value}`}
              key={tag.value}
              passHref>
              <Box _hover={{ transform: "scale(0.96)", cursor: "pointer" }}>
                <Center flexDirection="column">
                  <Image
                    src={`${process.env.CLOUDINARY_URL}/${tag.image}`}
                    alt={tag.name}
                    width={75}
                    height={75}
                    placeholder="blur"
                    blurDataURL={`${process.env.CLOUDINARY_URL}/${tag.image}`}
                  />
                  <chakra.p fontSize="medium" mt="2.5" textAlign="center">
                    {tag.name}
                  </chakra.p>
                </Center>
              </Box>
            </ResourceLink>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default ResourcesTags;
