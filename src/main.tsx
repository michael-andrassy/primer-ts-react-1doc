import React from "react";
import ReactDOM from "react-dom/client";
import "reflect-metadata";
import { WrappedApp } from "@/App.tsx";
import "./styles/global.scss"; //don't use @ to import styles for now
import { DIContainerProvider } from "@utils/DIContainerProvider.tsx";
import { DIContainerFactoryForProd } from "@utils/DIContainerFactory4Prod.ts";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DIContainerProvider factory={new DIContainerFactoryForProd()}>
      <WrappedApp />
    </DIContainerProvider>
  </React.StrictMode>
);
