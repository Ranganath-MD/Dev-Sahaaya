export const Button = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "base",
    _focus: { boxShadow: "none" },
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  // This style will applied to all the button component in the application
  variants: {
    solid: {
      bg: "linear-gradient( to right,#753a88,#cc2b5e )",
      color: "white",
      _hover: {
        bg: "linear-gradient( to left,#753a88,#cc2b5e )",
      },
      _active: {
        transform: "scale(0.98)",
        background:
          "linear-gradient( to left,#753a88,#cc2b5e )",
      },
    },
  },
  defaultProps: {
    size: "md",
    variants: "solid",
  },
};

export const Heading = {
  baseStyle: {
    fontFamily: "'IBM Plex Sans Thai Looped', sans-serif",
  },
};
