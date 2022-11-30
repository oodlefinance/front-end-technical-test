import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${(p) => p.theme.colors.background.light};
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
