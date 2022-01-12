import * as React from "react";
import { useState } from "react";

type State = {
  products: Array<object>;
};
const initialState: State = {
  products: [],
};

export const Store = React.createContext<State | any>(initialState);

export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [appState, setAppState] = useState(initialState);
  return (
    <Store.Provider value={{ appState, setAppState }}>
      {children}
    </Store.Provider>
  );
};
