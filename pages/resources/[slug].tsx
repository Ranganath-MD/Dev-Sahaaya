import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getAllResources, getResourcesBySlug } from "utils/mdx";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { chakra, Flex, Divider, Text, Box, Square } from "@chakra-ui/react";
import Head from "next/head";
import { ExternalLink, H1, H2, Sidebar, MDXListItem } from "components/mdxComponents";

const components = {
  a: ExternalLink,
  h1: H1,
  h2: H2,
  li: MDXListItem,
  Head,
};

const ContentDisplay = ({ source, frontMatter }: any) => {
  return (
    <Flex>
      <chakra.div
        pos="sticky"
        top="4rem"
        h="85vh"
        borderRightWidth="thin"
        borderRightColor="inherit"
        display={["none", "none", "block"]}
      >
        <Sidebar />
      </chakra.div>
      <chakra.div p="6" fontFamily="serif">
        <MDXRemote {...source} components={components} />
      </chakra.div>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const resource = getResourcesBySlug(params.slug);
  const { content, data } = resource;
  console.log(resource);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const resources = getAllResources();

  return {
    paths: resources.map((resource) => {
      return {
        params: {
          slug: resource.data.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default ContentDisplay;
