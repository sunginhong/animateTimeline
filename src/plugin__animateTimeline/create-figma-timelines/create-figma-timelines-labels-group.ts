("use strict");

import { createTimelineLabels } from "./create-figma-timelines-props-labels";

const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineLabelsGroup = ({ parent, msg, index, delayBool }) => {
    const timelineLabelsGroup = figma.createFrame();
    timelineLabelsGroup.name = "timelineLabelsGroup";
    timelineLabelsGroup.layoutMode = "HORIZONTAL";
    timelineLabelsGroup.layoutAlign = "STRETCH";
    timelineLabelsGroup.primaryAxisSizingMode = "AUTO";
    timelineLabelsGroup.counterAxisSizingMode = "AUTO";
    timelineLabelsGroup.primaryAxisAlignItems = "CENTER";
    timelineLabelsGroup.counterAxisAlignItems = "CENTER";
    timelineLabelsGroup.minWidth = 128;
    timelineLabelsGroup.itemSpacing = 1;
    timelineLabelsGroup.paddingRight = 55;
    timelineLabelsGroup.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timelineLabelsGroup.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(timelineLabelsGroup);
    createTimelineLabels({ parent: timelineLabelsGroup, msg: msg, index: index });
}
