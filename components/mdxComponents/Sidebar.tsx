import { chakra, List, ListItem, Heading } from "@chakra-ui/react";
import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <chakra.div
      w={["0", "40", "56"]}
      py="6"
    >
      <Heading fontSize="2xl">Contents</Heading>
      <List>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
        <ListItem>
          <h1>React</h1>
        </ListItem>
      </List>
    </chakra.div>
  );
};
