import { createPropsRowsLabel } from "./label";
import { createPropsRowsHaptic } from './haptic';
import { getHaptic } from '../../data/haptic_v3';

interface interfaceProps {
    parent: FrameNode;
    hapticType: string; 
}

export function hapticPropsRows({ parent, hapticType }: interfaceProps) {
    const hapticPropsRows = figma.createFrame();
    hapticPropsRows.layoutMode = "HORIZONTAL";
    hapticPropsRows.layoutAlign = "MIN";
    hapticPropsRows.primaryAxisAlignItems = 'MIN'
    hapticPropsRows.primaryAxisSizingMode = "AUTO";
    hapticPropsRows.counterAxisSizingMode = "AUTO";
    hapticPropsRows.counterAxisAlignItems = "MIN";
    hapticPropsRows.itemSpacing = 20;
    hapticPropsRows.paddingLeft = 20;
    hapticPropsRows.paddingRight = 20;
    hapticPropsRows.name = "curve_props_rows";
    hapticPropsRows.clipsContent = false;
    hapticPropsRows.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
       
    ];
    parent.appendChild(hapticPropsRows);
    console.log(getHaptic(hapticType), hapticType)

    createPropsRowsLabel({ parent: hapticPropsRows, hapticType: hapticType });
    createPropsRowsHaptic({ parent: hapticPropsRows, hapticType: hapticType , data: getHaptic(hapticType)});
}