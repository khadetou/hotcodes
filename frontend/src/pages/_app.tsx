import "@/styles/globals.css";
import "rc-drawer/assets/index.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { wrapper } from "@/redux/index";
import Layout from "@/components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);

  return (
    <Layout setIsOpen={setOpen} isOpen={open}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
