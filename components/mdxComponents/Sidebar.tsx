import {
  chakra,
  List,
  ListItem,
  Heading,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link"
// interface ILeft {
//   variant: "left";
//   resources: IResources[]
// }
// interface IRight {
//   variant: "right";
//   sections: IFrontmatter[]
// }

type SidebarProps =
  | {
      variant: "left";
      resources: IResources[];
    }
  | {
      variant: "right";
      sections: IFrontmatter[];
    };

export const Sidebar: React.FC<SidebarProps> = (
  props
) => {
  console.log(props);
  switch (props.variant) {
    case "right":
      return (
        <chakra.div
          w={["0", "40", "56"]}
          py="8"
          paddingLeft="6"
          borderLeftWidth="thin"
          borderLeftColor="inherit"
        >
          <Heading fontSize="lg">
            Contents
          </Heading>
          <List>
            {props.sections.map((sec: any) => {
              return (
                <ListItem key={sec.link} mt="2" fontSize="sm">
                  <ChakraLink href={sec.link}>
                    {sec.name}
                  </ChakraLink>
                </ListItem>
              );
            })}
          </List>
        </chakra.div>
      );
    case "left":
      return (
        <chakra.div w={["0", "40", "50"]} py="6">
          <Heading fontSize="lg">
            Resources
          </Heading>
          <List>
            {props.resources.map(
              ({ data: { name, slug } }: any) => {
                return (
                  <ListItem key={slug} mt="2">
                    <ChakraLink
                      as={Link}
                      href={slug}
                    >
                      {name}
                    </ChakraLink>
                  </ListItem>
                );
              }
            )}
          </List>
        </chakra.div>
      );
    default:
      return null;
  }
};
