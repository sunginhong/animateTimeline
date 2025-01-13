("use strict");

import { guide_text_vari } from "./animate-timeline/create-figma-tables-props/guide-text-vari";

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTableProps = ({parent, msg, index, delayBool}) => {
    let msgData_spec1 = ['Property','Duration', 'Curves']
    let msgData_spec2 = ['Property','Duration', 'Delay', 'Curves']
    
    if(!delayBool){
        msgData_spec1.forEach((value, i) => {
            guide_text_vari({parents: parent, index: index, value: value, i: i, msg: msg, delayBool: delayBool})
        });
    } else {
        msgData_spec2.forEach((value, i) => {
            guide_text_vari({parents: parent, index: index, value: value, i: i, msg: msg, delayBool: delayBool})
        });
    }
}
