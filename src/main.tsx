import { ConfigProvider, theme } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import AppRoutes from "./Routes.tsx";
import { RecoilRoot } from "recoil";
import { DebugObserver } from "./shared/components/debug-observer.tsx";
import TransactionObserver from "./shared/components/transaction-observer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      {/* <DebugObserver/> */}
      <TransactionObserver/>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </RecoilRoot>
  </StrictMode>
);
