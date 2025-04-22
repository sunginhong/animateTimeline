("use strict");

import { createTimelineGraphGroup } from "./create-figma-timelines-graph-group";

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineRightProps = ({parent, msg, index, delayBool}) => {
    createTimelineGraphGroup({parent: parent, msg: msg, index: index, delayBool: delayBool})
}
