import { ThemeProvider } from "styled-components";
import { Trasctions } from "./pages/Transctions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Trasctions />
    </ThemeProvider>

  )
}

