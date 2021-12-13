import { Tag, useColorModeValue } from "@chakra-ui/react";

import React from "react";

export const Credit = (props: any) => {
  const bg = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue(
    "black",
    "gray.200"
  );

  return (
    <Tag
      {...props}
      size={"sm"}
      variant="solid"
      background={bg}
      color={textColor}
    />
  );
};
