const theme = {
  colors: {
    primary: "#20599c",
    secondary: "#9a3a05",
    white: "#FFF",
    background: {
      light: "#f4efe3",
      dark: "#122032",
    },
  },
} as const;

export type Theme = typeof theme;

export default theme;
