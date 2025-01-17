import { getElemHeight } from "./create-figma-timelines-props/guide-elemHeight";
import { createTimelineGraphsCellShapeParents } from './create-figma-timelines-graph-cell-parents';
import { createTimelineGraphsCellDrawItemSec } from './create-figma-timelines-graph-cell-draw_item_sec';

("use strict");

const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineGraphsCell = ({ parent, msg }) => {
    const durationArray = [];
    const textLineHeight = 16;

    msg.newChecked.forEach((values, i) => {
        durationArray.push(msg.newChecked[i][4]);
    });

    const maxDuration = Math.max(...durationArray);
    const timelinesContainer = figma.createFrame();
    timelinesContainer.name = "timelinesContainer";
    timelinesContainer.layoutAlign = "STRETCH";
    timelinesContainer.layoutMode = "HORIZONTAL";
    timelinesContainer.primaryAxisSizingMode = "AUTO";
    timelinesContainer.counterAxisSizingMode = "AUTO";
    timelinesContainer.primaryAxisAlignItems = "MIN";
    timelinesContainer.counterAxisAlignItems = "MIN";
    timelinesContainer.layoutSizingHorizontal = "HUG";
    timelinesContainer.clipsContent = false;
    timelinesContainer.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timelinesContainer.resize(1, getElemHeight() * durationArray.length);
    timelinesContainer.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    timelinesContainer.layoutGrow = 0;
    timelinesContainer.itemSpacing = msg.adWidth - 1;
    timelinesContainer.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(timelinesContainer);

    createTimelineGraphsCellDrawItemSec({ parent: timelinesContainer, msg, maxDuration, durationArray, textLineHeight });
    createTimelineGraphsCellShapeParents({ parent: parent, msg: msg });
}

function numberToString(n) {
    return (n + "").split("");
}
