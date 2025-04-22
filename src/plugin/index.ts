("use strict");
import { createAnimateTimelineV2 } from '../plugin__animateTimeline/create-animate-timeline-v2'
import { createGuideTemplatesTitle } from '../plugin__guideTemplates/create-guide-templates-title';

figma.showUI(__html__);
// figma.ui.resize(677, 500);
figma.ui.resize(779, 312);

figma.ui.onmessage = (msg) => {
    const collection = figma.variables.createVariableCollection("new-collection");
    const modeId = collection.modes[0].modeId;
    const fontStyleBold = figma.variables.createVariable("fontFamily", collection, "STRING");
    fontStyleBold.setValueForMode(modeId, "Bold");
    
    if (msg.type === "create-animate-timeline-v2") {
        createAnimateTimelineV2(msg);
    };
    if (msg.type === "create-guide-templates-title") {
        createGuideTemplatesTitle(msg);
    };
};