import {  getElemHeight } from "./create-figma-timelines-props/guide-elemHeight";
import { createTimelineRightProps } from "./create-figma-timelines-right-props";

("use strict");

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineGraphCellShape = ({ parent, msg, index }) => {
    const timelineGraphParent = figma.createFrame();
    timelineGraphParent.name = "timelineGraphParent";
    timelineGraphParent.layoutAlign = "STRETCH";
    timelineGraphParent.layoutMode = "HORIZONTAL";
    timelineGraphParent.primaryAxisSizingMode = "AUTO";
    timelineGraphParent.counterAxisSizingMode = "AUTO";
    timelineGraphParent.primaryAxisAlignItems = "MIN";
    timelineGraphParent.counterAxisAlignItems = "MIN";
    timelineGraphParent.layoutSizingHorizontal = "HUG";
    timelineGraphParent.minHeight = getElemHeight();
    timelineGraphParent.paddingTop = 10;
    timelineGraphParent.paddingBottom = 10;
    timelineGraphParent.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timelineGraphParent.layoutGrow = 0;
    timelineGraphParent.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(timelineGraphParent);

    createTimelineRightProps({ parent: timelineGraphParent, msg: msg, index: index, delayBool: false });
}