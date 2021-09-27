import {
  GetStaticProps,
  NextPage,
  NextPageContext,
} from "next";
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
import { getAllResources } from "utils/mdx";
import { Seo } from "components/seo/Seo";

export const getStaticProps: GetStaticProps =
  async () => {
    const resources = getAllResources();
    return {
      props: {
        data: resources,
      },
    };
  };

const ResourcesTags: NextPage<{
  data: IResources[];
}> = ({ data }) => {
  return (
    <>
      <Seo title={"Resource categories"} />
      <Container maxW="container.lg" my="10">
        <Heading
          textAlign="center"
          mb="10"
          fontSize={["2xl", "3xl", "4xl"]}
        >
          Resource Categories
        </Heading>
        <SimpleGrid
          minChildWidth="120px"
          spacingY="20"
          spacingX="10"
        >
          {data?.map((tag: any) => {
            return (
              <ResourceLink
                as={Link}
                href={`/resources/${tag.data.slug}`}
                key={tag.data.slug}
                passHref
              >
                <Box
                  _hover={{
                    transform: "scale(0.96)",
                    cursor: "pointer",
                  }}
                >
                  <Center flexDirection="column">
                    <Image
                      src={`${process.env.CLOUDINARY_URL}/${tag.data.image}`}
                      alt={tag.name}
                      width={75}
                      height={75}
                      placeholder="blur"
                      blurDataURL={`${process.env.CLOUDINARY_URL}/${tag.data.image}`}
                    />
                    <chakra.p
                      fontSize="medium"
                      mt="2.5"
                      textAlign="center"
                    >
                      {tag.data.name}
                    </chakra.p>
                  </Center>
                </Box>
              </ResourceLink>
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ResourcesTags;
