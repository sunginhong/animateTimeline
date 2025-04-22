("use strict");

import { createTimelineAction } from "./create-figma-timelines-props-actions";

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineActionsGroup = ({parent, msg, index, delayBool}) => {
    const timeline_actions_group = figma.createFrame();
    timeline_actions_group.name = "timeline_actions_group";
    timeline_actions_group.layoutMode = "HORIZONTAL";
    timeline_actions_group.layoutAlign = "STRETCH";
    timeline_actions_group.primaryAxisSizingMode = "AUTO";
    timeline_actions_group.counterAxisSizingMode = "AUTO";
    timeline_actions_group.primaryAxisAlignItems = "CENTER";
    timeline_actions_group.counterAxisAlignItems = "CENTER";
    timeline_actions_group.itemSpacing = 4;
    timeline_actions_group.paddingRight = 48;
    timeline_actions_group.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timeline_actions_group.fills = [
    {
        type: "SOLID",
        color: { r: 240 / 255, g: 240/ 255, b: 240 / 255 },
        visible: false,
    },
    ];
    parent.appendChild(timeline_actions_group);
    createTimelineAction({parent: timeline_actions_group, msg: msg, index: index});
}
