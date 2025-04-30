import { createPropsRowsLabel } from "./label";
import { createPropsRowsEasing } from './easing';

interface interfaceProps {
    parent: FrameNode;
    easingType: string; 
}

export function curvePropsRows({ parent, easingType }: interfaceProps) {
    const curvePropsRows = figma.createFrame();
    curvePropsRows.layoutMode = "HORIZONTAL";
    curvePropsRows.layoutAlign = "MIN";
    curvePropsRows.primaryAxisAlignItems = 'MIN'
    curvePropsRows.primaryAxisSizingMode = "AUTO";
    curvePropsRows.counterAxisSizingMode = "AUTO";
    curvePropsRows.counterAxisAlignItems = "MIN";
    curvePropsRows.itemSpacing = 20;
    curvePropsRows.paddingLeft = 20;
    curvePropsRows.paddingRight = 20;
    curvePropsRows.name = "curve_props_rows";
    curvePropsRows.clipsContent = false;
    curvePropsRows.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
       
    ];
    parent.appendChild(curvePropsRows);

    createPropsRowsLabel({ parent: curvePropsRows, easingType: easingType });
    createPropsRowsEasing({ parent: curvePropsRows, easingType: easingType });
}