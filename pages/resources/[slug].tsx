import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import {
  getAllResources,
  getResourcesBySlug,
} from "utils/mdx";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/react";
import {
  Alert,
  Button,
  chakra,
  Flex,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import Head from "next/head";
import {
  ExternalLink,
  H1,
  H2,
  Sidebar,
  MDXListItem,
  Quotes,
  Credit,
} from "components/mdxComponents";
import { Seo } from "components/seo/Seo";

const components = {
  a: ExternalLink,
  h1: H1,
  h2: H2,
  li: MDXListItem,
  Head,
  blockquote: Quotes,
  span: Credit,
};


const HamburgerMenu = (props: { resources: any[]; }) => {
  const color = useColorModeValue("#fbfbfb", "#0e0e0e");
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="solid"
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex={1}
        padding="0"
        display={["block", "block", "none"]}
      />
      <MenuList bgColor={color}>
        {props.resources.map(
          ({ data: { name, slug } }: any) => {
            return (
              <MenuItem
                key={slug}
                _hover={{ bg: "#ebedf0" }}
              >
                <NextLink
                  href={`/resources/${slug}`}
                  passHref
                >
                  <Link _hover={{ textDecor: "none" }}>
                    {name}
                  </Link>
                </NextLink>
              </MenuItem>
            );
          }
        )}
      </MenuList>
    </Menu>
  );
};

const ContentDisplay = ({
  source,
  frontMatter,
  resources,
}: any) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Seo title={`${frontMatter.name} resources`} />
      <Flex>
        <chakra.div
          pos="sticky"
          top="4rem"
          h="90vh"
          paddingRight="6"
          borderRightWidth="thin"
          borderRightColor="inherit"
          width={["0", "0", "20%"]}
          display={["none", "none", "block"]}
        >
          <Sidebar variant="left" resources={resources} />
        </chakra.div>
        <chakra.div
          px={[0, 0, 6]}
          py={6}
          fontSize={["sm", "md"]}
          width={["100%"]}
        >
          <MDXRemote {...source} components={components} />
        </chakra.div>
        <chakra.div
          pos="sticky"
          top="4rem"
          h="85vh"
          width={["0", "0", "30%"]}
          display={["none", "none", "block"]}
        >
          <Sidebar
            variant="right"
            sections={frontMatter.sections}
          />
        </chakra.div>
      </Flex>
      <HamburgerMenu resources={resources} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: any) => {
  const resource = getResourcesBySlug(params.slug);
  const resources = getAllResources();
  const { content, data } = resource;
  const mdxSource = await serialize(content, {
    // No plugins are added yet
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
      resources,
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
