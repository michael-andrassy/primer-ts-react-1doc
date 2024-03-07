import React, { ReactNode } from "react";
import { Container } from "inversify";

import { DIContainerFactory } from "./DIContainerFactory";

interface DIContainerProviderProps {
  factory: DIContainerFactory;
  children?: ReactNode; // Marking children as optional
}

interface DIContainerContextType {
  container: Container | null;
}

export const DIContainerContext = React.createContext<DIContainerContextType>({
  container: null,
});

export const DIContainerProvider: React.FC<DIContainerProviderProps> = ({
  factory,
  children,
}) => {
  const container = factory.createContainer();

  return (
    <DIContainerContext.Provider value={{ container }}>
      {children}
    </DIContainerContext.Provider>
  );
};
