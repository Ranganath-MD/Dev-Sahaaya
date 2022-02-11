import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
import { Button, Heading } from "./componentStyles";

export const Theme = extendTheme({
  styles: {
    global: (props: Dict<any>) => ({
      body: {
        color: mode("gray.800", "white")(props),
        bg: mode("#fbfbfb", "#0e0e0e")(props),
        lineHeight: "base",
        fontFamily:
          "'IBM Plex Sans Thai Looped', sans-serif",
      },
      li: {
        listStyle: "none",
      },
    }),
  },
  components: {
    Button,
    Heading,
  },
});
