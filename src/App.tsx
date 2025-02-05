import { Breadcrumb, Layout, theme } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Outlet } from "react-router";
import "./App.css";
import AppHeader from "./features/app/app-header";
import DashboardConfig from "./features/dashboard/dashboard-config";


function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-svh ">
      <AppHeader />
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "1.5rem 0 5rem",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "100%",
          }}
        >
          <Sider
            style={{ background: colorBgContainer, height: "95%" }}
            width={250}
          >
            <DashboardConfig />
          </Sider>
          <Content
            className="overflow-y-auto  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-900
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-blue-950
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            style={{ padding: "0 24px", minHeight: 280 }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Algorithms Playground ©{new Date().getFullYear()} callstacksurfer.com
      </Footer>
    </Layout>
  );
}

export default App;
