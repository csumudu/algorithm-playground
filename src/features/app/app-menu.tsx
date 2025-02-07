import { Menu } from "antd";
import { APP_ROUTES, MainMenuItems, MenuKeys } from "../../shared/constants";
import { useLocation, useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { selectedMainMenuAtom } from "../../state/app/app.atoms";
import { useEffect } from "react";
import { GithubOutlined } from "@ant-design/icons";

const AppMenu = () => {
  const [selected, setSelected] = useRecoilState(selectedMainMenuAtom);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    const route = APP_ROUTES.find((r) => r.path == path);
    if (route) {
      setSelected(route.key);
    }
  }, [location]);

  const handleNavigation = ({ selectedKeys }) => {
    const [selected] = selectedKeys;
    const route = APP_ROUTES.find((r) => r.key == selected);
    setSelected(route.key);
    navigate(route.path);
  };

  return (
    <div className="flex flex-1 justify-between">
      <div className="hidden md:block">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[MenuKeys.SORT]}
          items={MainMenuItems}
          selectedKeys={[selected]}
          onSelect={handleNavigation}
        />
      </div>
      <div className="flex items-center self-end">
        <a
          href="https://github.com/csumudu/algorithm-playground"
          target="_blank"
        >
          <GithubOutlined
            className={`text-xl cursor-pointer`}
            style={{ color: "var(--color-gray-500)" }}
          />
        </a>
      </div>
    </div>
  );
};

export default AppMenu;
