import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "./components/layout";
import { StoreProvider } from "../util/store";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
