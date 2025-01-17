("use strict");

import { createTimelineLabelsGroup } from "./create-figma-timelines-labels-group";
import { createTimelineActionsGroup } from "./create-figma-timelines-actions-group";

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");


export const createTimelineLeftProps = ({parent, msg, index, delayBool}) => {
    createTimelineLabelsGroup({parent: parent, msg: msg, index: index, delayBool: delayBool})
    createTimelineActionsGroup({parent: parent, msg: msg, index: index, delayBool: delayBool})
}
