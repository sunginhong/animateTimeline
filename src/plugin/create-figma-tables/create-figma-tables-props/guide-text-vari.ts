("use strict");

import { createTextFieldTitle } from "./guide-text-field-title";

const boldCollection = figma.variables.createVariableCollection("new-boldCollection");
const boldModeId = boldCollection.modes[0].modeId;
const boldFontStyle = figma.variables.createVariable("fontFamily", boldCollection, "STRING");
boldFontStyle.setValueForMode(boldModeId, "Bold");

export const createGuideTextVariant = ({ parent, index, value, i, msg, delay }) => {
    const guideTextVariant = figma.createFrame();
    guideTextVariant.name = "Guide_Text_Variant " + index;
    guideTextVariant.layoutMode = "HORIZONTAL";
    guideTextVariant.primaryAxisSizingMode = "FIXED";
    guideTextVariant.counterAxisSizingMode = "AUTO";
    guideTextVariant.itemSpacing = 4;
    guideTextVariant.paddingLeft = 20;
    guideTextVariant.paddingRight = 0;
    guideTextVariant.paddingTop = 0;
    guideTextVariant.paddingBottom = 0;
    guideTextVariant.layoutAlign = "STRETCH";
    guideTextVariant.layoutGrow = 0;

    guideTextVariant.fills = [
        {
            type: "SOLID",
            color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
            visible: false,
        }
    ];
    parent.appendChild(guideTextVariant);
    createTextFieldTitle({ parents: guideTextVariant, index: index, value: value, i: i, msg: msg, delayBool: delay });
}
