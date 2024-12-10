("use strict");
import { animate_timeline } from './create-animate-timeline';

figma.showUI(__html__);
// figma.ui.resize(677, 500);
figma.ui.resize(779, 312);

figma.ui.onmessage = (msg) => {
    const collection = figma.variables.createVariableCollection("new-collection");
    const modeId = collection.modes[0].modeId;
    const fontStyleBold = figma.variables.createVariable("fontFamily", collection, "STRING");
    fontStyleBold.setValueForMode(modeId, "Bold");
    
    if (msg.type === "create-animate-timeline") {
        animate_timeline(msg);
    };
};