import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  chakra,
  Flex,
  HStack,
  Icon,
  Img,
  IconButton,
  Link as ChakraLink,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { siteConfig } from "utils/siteconfig";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
    />
  </svg>
);

export const Header: React.FC = (props) => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const { pathname } = useRouter();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const bg = useColorModeValue("#fbfbfb", "gray.800");

  return (
    <chakra.header
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="sticky"
      top="2.5"
      zIndex="3"
      left="0"
      right="0"
      bg={bg}
      width="full"
      px={6}
      {...props}
    >
      <chakra.div height="4rem" mx="auto" maxW="8xl">
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
        >
          <Flex align="center">
            <ChakraLink href="/" as={Link} passHref>
              <React.Fragment>
                <Img
                  src={`/logo/logo.png`}
                  width={65}
                  height={50}
                  alt="Dev Sahaaya Logo"
                  cursor="pointer"
                  style={{
                    transform: "rotate(-25deg)",
                  }}
                />
                {pathname !== "/" && (
                  <chakra.h1
                    fontSize="lg"
                    fontWeight="bold"
                    cursor="pointer"
                  >
                    Dev Sahaaya
                  </chakra.h1>
                )}
              </React.Fragment>
            </ChakraLink>
          </Flex>
          <Flex>
            <HStack spacing="5">
              <ChakraLink
                isExternal
                aria-label="Link to Dev Sahaaya GitHub page"
                href={siteConfig.repo.url}
              >
                <Icon
                  as={GithubIcon}
                  display="block"
                  transition="color 0.2s"
                  w="5"
                  h="5"
                  _hover={{ color: "gray.600" }}
                />
              </ChakraLink>
              <IconButton
                size="md"
                fontSize="lg"
                isRound
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            </HStack>
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  );
};
