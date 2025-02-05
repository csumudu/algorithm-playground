import { Navigate, Route, Routes } from "react-router";
import App from "./App";
import { APP_ROUTES } from "./shared/constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/sort" replace />} />
        {APP_ROUTES.map((r) => {
          const Comp = r.component;
          return (
            <Route
              key={r.key}
              path={r.path}
              index={r.isIndex}
              element={<Comp />}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
