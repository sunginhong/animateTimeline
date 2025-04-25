import { createCurvePropsRowsLabel } from "./curce-props-rows-label";
import { createCurvePropsRowsEasing } from './curce-props-rows-easing';

interface curvePropsRowsProps {
    parents: FrameNode;
    easingType: string; 
}

export function curvePropsRows({ parents, easingType }: curvePropsRowsProps) {
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
    parents.appendChild(curvePropsRows);

    createCurvePropsRowsLabel({ parents: curvePropsRows, easingType: easingType });
    createCurvePropsRowsEasing({ parents: curvePropsRows, easingType: easingType });
}