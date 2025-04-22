import { templatesBadge } from "./templates-badge";
import { templatesTitle } from "./templates-title";

const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export function templatesTitleFrame({ parents }) {
    const titleFrame = figma.createFrame();
    titleFrame.layoutMode = "VERTICAL";
    titleFrame.layoutAlign = "MIN";
    titleFrame.primaryAxisAlignItems = 'MIN'
    titleFrame.primaryAxisSizingMode = "AUTO";
    titleFrame.counterAxisSizingMode = "AUTO";
    titleFrame.counterAxisAlignItems = "MIN";
    titleFrame.x = 80*2;
    titleFrame.y = 187 * 2;
    titleFrame.itemSpacing = 32;
    titleFrame.name = "title_frame";
    titleFrame.clipsContent = false;
    titleFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
       
    ];
    parents.appendChild(titleFrame);

    templatesBadge({parents: titleFrame, label: "INTERACTION"});
    templatesTitle({ parents: titleFrame, label: "가이드 타이틀" });
   
}