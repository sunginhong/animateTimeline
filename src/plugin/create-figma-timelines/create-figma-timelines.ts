("use strict");

import { createTimelineLabelsCell } from "./create-figma-timelines-labels-cell";
import { createTimelineGraphsCell } from "./create-figma-timelines-graph-cell";

const boldCollection = figma.variables.createVariableCollection("BoldCollection");
const boldModeId = boldCollection.modes[0].modeId;
const boldFontStyle = figma.variables.createVariable("fontFamily", boldCollection, "STRING");
boldFontStyle.setValueForMode(boldModeId, "Bold");

const regularCollection = figma.variables.createVariableCollection("RegularCollection");
const regularModeId = regularCollection.modes[0].modeId;
const regularFontStyle = figma.variables.createVariable("fontFamily", regularCollection, "STRING");
regularFontStyle.setValueForMode(regularModeId, "Regular");

const ROW_HEIGHT = 42;

export const createFigmaTimelines = ({ parent, msg }) => {
    const timelinesFrame = figma.createFrame();
    timelinesFrame.name = "TimelinesFrame";
    timelinesFrame.layoutMode = "HORIZONTAL";
    timelinesFrame.clipsContent = false;
    timelinesFrame.primaryAxisSizingMode = "AUTO";
    timelinesFrame.counterAxisSizingMode = "AUTO";
    timelinesFrame.itemSpacing = 1;
    timelinesFrame.layoutAlign = "STRETCH";
    timelinesFrame.minWidth = 726;
    timelinesFrame.cornerRadius = 0;
    timelinesFrame.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, visible: false }];
    timelinesFrame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, visible: false }];
    parent.appendChild(timelinesFrame);

    createTimelineLabelsCell({ parent: timelinesFrame, msg: msg });
    createTimelineGraphsCell({ parent: timelinesFrame, msg: msg });
};
