import { Provider } from "mobx-react";
import { state, actions } from "../store/store";
import Header from "../components/Layout/Header";
import "../styles/styles.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider state={state} actions={actions}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </Provider>
  );
}
