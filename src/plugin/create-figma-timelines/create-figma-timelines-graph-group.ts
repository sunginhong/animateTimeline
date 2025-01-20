("use strict");

import { createTimelineGraphDuration } from "./create-figma-timelines-props-graph_duration";
import { createTimelineGraphDelay } from "./create-figma-timelines-props-graph_delay";

const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineGraphGroup = ({ parent, msg, index, delayBool }) => {
    const timelineGraphsGroup = figma.createFrame();
    timelineGraphsGroup.name = "rectBlock " + index;
    timelineGraphsGroup.layoutMode = "HORIZONTAL";
    timelineGraphsGroup.layoutAlign = "STRETCH";
    timelineGraphsGroup.primaryAxisSizingMode = "AUTO";
    timelineGraphsGroup.counterAxisSizingMode = "AUTO";
    timelineGraphsGroup.primaryAxisAlignItems = "MIN";
    timelineGraphsGroup.counterAxisAlignItems = "MIN";
    timelineGraphsGroup.clipsContent = false;
    timelineGraphsGroup.minWidth = 100;
    timelineGraphsGroup.itemSpacing = 0;
    timelineGraphsGroup.paddingRight = 55;
    timelineGraphsGroup.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timelineGraphsGroup.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(timelineGraphsGroup);

    if(0 < msg.newChecked[index][5]){
        createTimelineGraphDelay({ parent: timelineGraphsGroup, msg: msg, index: index, delayChecked: msg.delayChecked, styleChecked: msg.styleChecked });
    }

    createTimelineGraphDuration({ parent: timelineGraphsGroup, msg: msg, index: index, styleChecked: msg.styleChecked });
}
