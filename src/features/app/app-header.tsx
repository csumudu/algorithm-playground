import { Header } from "antd/es/layout/layout";
import { Link } from "react-router";
import AppMenu from "./app-menu";

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
      <AppMenu />
    </Header>
  );
};

export default AppHeader;
