const theme = {
  colors: {
    primary: "#0070f3",
  },
} as const;

export type Theme = typeof theme;

export default theme;
