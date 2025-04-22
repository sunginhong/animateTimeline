"use strict";

import { createFigmaTables } from "./create-figma-tables/create-figma-tables";
import { createFigmaTimelines } from "./create-figma-timelines/create-figma-timelines";

const boldCollection = figma.variables.createVariableCollection("boldCollection");
const boldModeId = boldCollection.modes[0].modeId;
const boldFontStyle = figma.variables.createVariable("fontFamily", boldCollection, "STRING");
boldFontStyle.setValueForMode(boldModeId, "Bold");

const regularCollection = figma.variables.createVariableCollection("regularCollection");
const regularModeId = regularCollection.modes[0].modeId;
const regularFontStyle = figma.variables.createVariable("fontFamily", regularCollection, "STRING");
regularFontStyle.setValueForMode(regularModeId, "Regular");

export let labelTableCells = [];
export let specsTableCells = [];
export let propsTableCells = [];
export let specsTableTitles = [];
export let specPropsTable = [];

export const createAnimateTimelineV2 = (msg) => {
    const parentFrame = figma.createComponent();
    parentFrame.name = "parentFrame";
    parentFrame.clipsContent = false;
    parentFrame.layoutMode = "VERTICAL";
    parentFrame.primaryAxisSizingMode = "AUTO";
    parentFrame.counterAxisSizingMode = "AUTO";
    parentFrame.itemSpacing = 25;
    parentFrame.layoutAlign = "STRETCH";
    parentFrame.fills = [
    {
        type: "SOLID",
        color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
        visible: false,
    },
    ];

    figma.currentPage.selection
    .filter(node => 'appendChild' in node)
    .forEach(node => (node as FrameNode | GroupNode).appendChild(parentFrame));

    createFigmaTables({ parent: parentFrame, msg: msg.newChecked });
    createFigmaTimelines({ parent: parentFrame, msg: msg });
}