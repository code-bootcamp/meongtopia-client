import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
