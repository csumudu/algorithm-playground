import { Breadcrumb } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { BreadcrumbConfig } from "../../shared/constants";
import { selectedMainMenuAtom } from "../../state/app/app.atoms";

const AppBreadcrumbs = () => {
  const selectedMenu = useRecoilValue(selectedMainMenuAtom);
  const [items, setItems] = useState<Array<Partial<BreadcrumbItemType>>>();

  useEffect(() => {
    setItems(BreadcrumbConfig[selectedMenu]);
  }, [selectedMenu]);

  return (
    <Breadcrumb
      style={{ margin: "16px 0" }}
      items={items}
      itemRender={(r) => <div className="text-xl font-bold text-blue-500">{r.title}<span className="pl-1 text-gray-500">algorithms</span></div>}
    ></Breadcrumb>
  );
};

export default AppBreadcrumbs;
