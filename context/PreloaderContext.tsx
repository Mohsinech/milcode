// context/PreloaderContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

const PreloaderContext = createContext({
  done: false,
  setDone: (_v: boolean) => {},
});

export const PreloaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [done, setDone] = useState(false);

  return (
    <PreloaderContext.Provider value={{ done, setDone }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
