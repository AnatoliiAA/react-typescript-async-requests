import { Global } from "@emotion/react";
import * as React from "react";
import { BasketPage } from "./components/basket-page/basket-page/BasketPage";
import { reset, global } from "./theme";

const AppStateContext = React.createContext({ products: [] });

export const App = (): JSX.Element => (
  <AppStateContext.Provider value={{ products: [] }}>
    <Global styles={[global, reset]}></Global>
    <BasketPage />
  </AppStateContext.Provider>
);
