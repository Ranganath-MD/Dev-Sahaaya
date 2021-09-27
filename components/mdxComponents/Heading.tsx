import React from "react";
import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";

export const H1: React.FC<HeadingProps> = ({ ...props }) => {
  return <ChakraHeading {...props} mb="6" fontSize={["2xl", "3xl", "4xl"]} />;
};

export const H2: React.FC<HeadingProps> = ({ ...props }) => {
  const id = (props.children as string).split(" ").join("-").toLowerCase()
  return (
    <ChakraHeading
      {...props}
      id={id}
      my="6"
      pb="2"
      fontSize={["md", "lg", "xl"]}
      borderBottomColor="inherit"
      borderBottomWidth="thin"
      style={{
        scrollMarginTop: "5rem"
      }}
    />
  );
};
