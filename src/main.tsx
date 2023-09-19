import React from "react";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import ReactDOM from "react-dom/client";
import { RootProvider } from "./hooks/RootContext.tsx";
import { ThemeModeProvider } from "./hooks/ThemeModeContext.tsx";
import App from "./App.tsx";
import "@/styles/index.css";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <WagmiConfig config={config}>
        <RootProvider>
          <App />
        </RootProvider>
      </WagmiConfig>
    </ThemeModeProvider>
  </React.StrictMode>
);
