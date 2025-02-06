import { Card } from "antd";
import { FC } from "react";
import DataGrid from "../../../../shared/components/data-grid";
import PlayControls from "../../../../shared/components/play-controls";
import { useGetSortWidgetParams } from "../../../../shared/hooks/get-sort-widget-params";
import { SortAlgoTypes } from "../../../../shared/models";

const SortWidget: FC<{ type: SortAlgoTypes; title: string }> = ({
  type,
  title,
}) => {
  const { data, selectedControl, playControls, selectControlHandler } =
    useGetSortWidgetParams(type);

  return (
    <Card
      title={title}
      extra={
        <PlayControls
          selected={selectedControl}
          actions={playControls}
          onSelect={selectControlHandler}
        />
      }
    >
      <div className="h-min">
        <DataGrid data={data} type={type} />
      </div>
    </Card>
  );
};

export default SortWidget;
