import type { AppProps } from "next/app";
//import { ThemeProvider } from "@mui/material/styles";
//import theme from "../components/theme/themes";
import Layout from "../components/Layout/Layout";
//
////import { wrapper } from "../components/store/index";
import "../styles/LoginStyle.css";
import "../styles/singleproduct.css";
import "../styles/ProductsStyle.css";
import "../styles/cartStyle.css";
import "../styles/categorystyle.css";
//function MyApp({ Component, pageProps }: AppProps) {
//  return (
//    <ThemeProvider theme={theme}>
//      <Layout>
//        <Component {...pageProps} />
//      </Layout>
//    </ThemeProvider>
//  );
//}

//export default wrapper.withRedux(MyApp);
//export default MyApp;

import { useEffect } from "react";
//import "public/styles/global.scss";

import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";

import { get } from "../pages/api/index";
//import GetMe from "features/user/GetMe";
//import { AppPropsWithLayout } from "interfaces/next";
import { store } from "../components/store/index";
//import { theme } from "theme";


import "react-toastify/dist/ReactToastify.min.css";
import theme from "../components/theme/themes";

function MyApp({ Component, pageProps }: AppProps) {
  //const getLayout = Component.getLayout ?? ((page) => <>{page}</>);

  return (
    <Box >
      <Provider store={store}>
       
          <ThemeProvider theme={theme}>
            <SWRConfig value={{ fetcher: get, errorRetryCount: 2 }}>
              <CssBaseline />
              <ToastContainer />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SWRConfig>
          </ThemeProvider>
      </Provider>
    </Box>
  );
}

export default MyApp;
