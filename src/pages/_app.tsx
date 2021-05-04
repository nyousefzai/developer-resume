import dynamic from "next/dynamic";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "site-settings/site-theme/default";
import { AppProvider } from "contexts/app/app.provider";
import { AuthProvider } from "contexts/auth/auth.provider";
import { LanguageProvider } from "contexts/language/language.provider";
import { useApollo } from "utils/apollo";
import { CartProvider } from "contexts/cart/use-cart";
// Language translation messages
import { GlobalStyle } from "assets/styles/global.style";
import { messages } from "site-settings/site-translation/messages";

const AppLayout = dynamic(() => import("layouts"));

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CartProvider>
          <AppProvider>
            <LanguageProvider messages={messages}>
              <AuthProvider>
                <AppLayout>
                  <Component {...pageProps} />
                </AppLayout>
              </AuthProvider>
            </LanguageProvider>
          </AppProvider>
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
