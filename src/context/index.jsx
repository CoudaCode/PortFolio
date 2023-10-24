import { createContext, useState, useContext } from "react";

const storeContext = createContext({});
export const useStoreCtx = () => useContext(storeContext);

const StoreProvider = ({ children }) => {
  const [ok, set] = useState(3);
  return (
    <storeContext.Provider value={{ n: 3, ok, set }}>
      {children}
    </storeContext.Provider>
  );
};
export default StoreProvider;
