import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ai from "./img/ai.png";
import App from "./App.tsx";
import { PrivyProvider } from "@privy-io/react-auth";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StrictMode>
      <PrivyProvider
        appId="import.meta.env.VITE_PRIVY_APP_ID"
        config={{
          appearance: {
            theme: "dark",
            accentColor: "#4F46E5",
            logo: ai,
          },
          loginMethods: [
            "email",
            "google",
            "github",
            "twitter",
            "linkedin",
            "tiktok",
          ],
          // Create embedded wallets for users who don't have a wallet
          embeddedWallets: {
            ethereum: {
              createOnLogin: "users-without-wallets",
            },
          },
        }}
      >
        <App />
      </PrivyProvider>
    </StrictMode>
  </StrictMode>
);
