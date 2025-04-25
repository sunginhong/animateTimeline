("use strict");
import { createAnimateTimelineV2 } from '../plugin__animateTimeline/create-animate-timeline-v2'
import { createTemplatesForm } from '../plugin__guideTemplates/create-templates-form';
import { createTemplatesTitle } from '../plugin__guideTemplates/create-templates-title';
import { createTemplatesList } from '../plugin__guideTemplates/create-templates-list';
import { createTemplatesCurve } from '../plugin__guideTemplates/create-templates-curve';
import { createTemplatesHaptic } from '../plugin__guideTemplates/create-templates-haptic';

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
    if( msg.type === "create-templates-form") {
        createTemplatesForm(msg);
    }
    if (msg.type === "create-templates-title") {
        createTemplatesTitle(msg);
    };
    if( msg.type === "create-templates-list") {
        createTemplatesList(msg);
    }
    if (msg.type === "create-templates-curve") {
        createTemplatesCurve(msg);
    }
    if (msg.type === "create-templates-haptic") {
        createTemplatesHaptic(msg);
    }
};