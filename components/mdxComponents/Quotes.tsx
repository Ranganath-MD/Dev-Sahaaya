import { Alert } from "@chakra-ui/react";
import React from "react";

export const Quotes = ({ ...props }) => {
  return (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  );
};
