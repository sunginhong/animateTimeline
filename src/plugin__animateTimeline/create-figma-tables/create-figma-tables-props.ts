("use strict");

import { createGuideTextVariant } from "./create-figma-tables-props/guide-text-vari";

const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTableProps = ({ parent, msg, index, delayBool }) => {
    const msgDataWithoutDelay = ['Property', 'Duration', 'Curves'];
    const msgDataWithDelay = ['Property', 'Duration', 'Delay', 'Curves'];
    
    if (!delayBool) {
        msgDataWithoutDelay.forEach((value, i) => {
            createGuideTextVariant({ parent, index, value, i, msg, delay: delayBool });
        });
    } else {
        msgDataWithDelay.forEach((value, i) => {
            createGuideTextVariant({ parent, index, value, i, msg, delay: delayBool });
        });
    }
}
