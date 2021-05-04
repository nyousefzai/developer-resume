import dynamic from "next/dynamic";
import { AppProps } from "next/app";

const AppLayout = dynamic(() => import("../layouts"));

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
