("use strict");

import { text_field_title } from "./guide-text-field-title";

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const guide_text_vari = ({parents, index, value, i , msg, delayBool}) => {
    const guide_text_vari = figma.createFrame();
    guide_text_vari.name = "Guide_Text_Vari " + index;
    guide_text_vari.layoutMode = "HORIZONTAL";
    guide_text_vari.primaryAxisSizingMode = "FIXED";
    guide_text_vari.counterAxisSizingMode = "AUTO";
    guide_text_vari.itemSpacing = 4;
    guide_text_vari.paddingLeft = 20;
    guide_text_vari.paddingRight = 0;
    guide_text_vari.paddingTop = 0;
    guide_text_vari.paddingBottom = 0;
    guide_text_vari.layoutMode = "HORIZONTAL";
    guide_text_vari.itemSpacing = 4;
    guide_text_vari.layoutAlign = "STRETCH";
    guide_text_vari.layoutGrow = 0;

    guide_text_vari.fills = [
        {
        type: "SOLID",
        color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
        visible: false,
        }
    ];
    parents.appendChild(guide_text_vari);
    text_field_title({parents: guide_text_vari, index: index, value: value, i: i, msg: msg, delayBool: delayBool})
}
