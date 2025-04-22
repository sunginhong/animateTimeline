import {createTimelineGraphCellShape} from "./create-figma-timelines-graph-cell-shape";

("use strict");

export const createTimelineGraphsCellShapeParents = ({ parent, msg }) => {
    const timelinesGraphsCell = figma.createFrame();
    timelinesGraphsCell.name = "timelines_graphs_cell";
    timelinesGraphsCell.layoutAlign = "STRETCH";
    timelinesGraphsCell.layoutMode = "VERTICAL";
    timelinesGraphsCell.primaryAxisSizingMode = "AUTO";
    timelinesGraphsCell.counterAxisSizingMode = "AUTO";
    timelinesGraphsCell.primaryAxisAlignItems = "MIN";
    timelinesGraphsCell.counterAxisAlignItems = "MIN";
    timelinesGraphsCell.layoutSizingHorizontal = "HUG";
    timelinesGraphsCell.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timelinesGraphsCell.clipsContent = false;
    timelinesGraphsCell.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(timelinesGraphsCell);

    msg.newChecked.forEach((values, i) => {
        createTimelineGraphCellShape({ parent: timelinesGraphsCell, msg: msg, index: i });
    });
};