import { Route, Routes } from "react-router";
import App from "./App";
import DashboardMain from "./features/dashboard/dashboard.main";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" index element={<DashboardMain />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
