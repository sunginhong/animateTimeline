("use strict");

import { createFigmaTables } from "./create-figma-tables";
import { createFigmaTimeLines } from "./create-figma-timelines";

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

const collectionRegular  = figma.variables.createVariableCollection("new-collection2");
const modeIdRegular  = collectionRegular.modes[0].modeId;
const fontStyleRegular = figma.variables.createVariable("fontFamily", collectionRegular, "STRING");
fontStyleRegular.setValueForMode(modeIdRegular, "regular");

export let tableCellArr_label = new Array;
export let tableCellArr_specs = new Array;
export let tableCellArr_props = new Array;
export let tableSpecsTitleArr = new Array;
export let tableSpecPropssArr = new Array;

export const animate_timeline_v2 = (msg) => {
    // console.log(msg.newChecked, msg.adWidth, msg.delayChecked, msg.styleChecked)

    const frame_parents = figma.createComponent();
    frame_parents.name = "frame_parents";
    frame_parents.clipsContent = false;
    // frame_parents.layoutSizingVertical = 'HUG';
    // frame_parents.primaryAxisAlignItems = 'CENTER';
    // frame_parents.counterAxisAlignItems = 'CENTER';
    frame_parents.fills = [
    {
        type: "SOLID",
        color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
        visible: false,
    },
    ];

    createFigmaTimeLines({parent: frame_parents, msg: msg.newChecked});
    createFigmaTables({parent: frame_parents, msg: msg.newChecked});
}