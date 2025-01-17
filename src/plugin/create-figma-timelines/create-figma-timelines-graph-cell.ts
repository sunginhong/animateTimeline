import { getElemHeight } from "./create-figma-timelines-props/guide-elemHeight";
import { createTimelineGraphsCellShapeParents } from './create-figma-timelines-graph-cell-parents';

("use strict");

const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineGraphsCell = ({ parent, msg }) => {
    const durationArray = [];

    msg.newChecked.forEach((values, i) => {
        durationArray.push(msg.newChecked[i][4]);
    });

    const maxDuration = Math.max(...durationArray);
    const timelinesLineParents = figma.createFrame();
    timelinesLineParents.name = "timelinesLineParents";
    timelinesLineParents.layoutAlign = "STRETCH";
    timelinesLineParents.layoutMode = "HORIZONTAL";
    timelinesLineParents.primaryAxisSizingMode = "AUTO";
    timelinesLineParents.counterAxisSizingMode = "AUTO";
    timelinesLineParents.primaryAxisAlignItems = "MIN";
    timelinesLineParents.counterAxisAlignItems = "MIN";
    timelinesLineParents.layoutSizingHorizontal = "HUG";
    timelinesLineParents.clipsContent = false;
    timelinesLineParents.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timelinesLineParents.resize(1, getElemHeight() * durationArray.length);
    timelinesLineParents.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timelinesLineParents.layoutGrow = 0;
    timelinesLineParents.itemSpacing = 100 - 1;
    timelinesLineParents.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(timelinesLineParents);

    createTimelineGraphsCellShapeParents({ parent: parent, msg: msg });
}
