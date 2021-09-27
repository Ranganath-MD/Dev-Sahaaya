import { Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export const ExternalLink = ({
  as,
  href,
  ...otherProps
}) => {
  const color = useColorModeValue(
    "#4433ff",
    "#76E4F7"
  );

  return (
    <>
      <Link
        as={as}
        href={href}
        isExternal
        {...otherProps}
        color={color}
        _focus={{ boxShadow: "none" }}
      />
    </>
  );
};
