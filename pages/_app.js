import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "./components/layout";
import { StoreProvider } from "../util/store";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 1000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <AlertProvider template={AlertTemplate} {...options}>
          <Component {...pageProps} />
        </AlertProvider>
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
