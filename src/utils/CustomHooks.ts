import { useContext } from "react";
import { Container } from "inversify";
import { DIContainerContext } from "./DIContainerProvider";

export function useServiceContainer(): Container {
  const context = useContext(DIContainerContext);

  if (!context.container) {
    // Throw an error if the context or container is null
    throw new Error(
      "Check if you have you <DIContainerProvider> in place the DIContainer is missing in the context."
    );
  }

  // Asserting that context.container is not null since we checked it above
  return context.container;
}
