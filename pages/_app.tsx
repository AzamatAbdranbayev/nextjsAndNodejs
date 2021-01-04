import { Provider } from "mobx-react";
import { state, actions } from "../store/store";
import Header from "../components/Layout/Header";
import "../styles/styles.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Provider state={state} actions={actions}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </Provider>
  );
}
