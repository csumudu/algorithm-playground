import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router";

const items1: MenuProps["items"] = [
  {
    key: 1,
    label: "Home",
  },
];

const AppHeader = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Link
        to={"/"}
        className="bg-slate-950 leading-4 p-2 px-6 rounded text-slate-500 font-sm border font-bold text-xl  border-slate-600 mr-10"
      >
        ALGORITHMS
        <span className="pl-1 text-sm font-light text-slate-400">
          playground
        </span>
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default AppHeader;
