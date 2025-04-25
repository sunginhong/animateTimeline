import { curveTitleFrame } from "./elem-title/curve-title-frame";
import { lineFrame } from "./elem-line/elem-line";
import { curvePropsFrame } from "./elem-props/curve-props-frame";

interface LineFrameProps {
    parents: FrameNode;
    parentsWidth: number; 
}

export function templatesCurveFrame({ parents, parentsWidth }: LineFrameProps) {
    const curveFrame = figma.createFrame();
    curveFrame.layoutMode = "VERTICAL";
    curveFrame.layoutAlign = "MIN";
    curveFrame.primaryAxisAlignItems = 'MIN'
    curveFrame.primaryAxisSizingMode = "AUTO";
    curveFrame.counterAxisSizingMode = "AUTO";
    curveFrame.counterAxisAlignItems = "MIN";
    curveFrame.itemSpacing = 50;
    curveFrame.name = "curve_frame";
    curveFrame.clipsContent = false;
    curveFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
       
    ];
    parents.appendChild(curveFrame);

    curveTitleFrame({ parents: curveFrame });
    lineFrame({ parents: curveFrame, parentsWidth: parentsWidth });
    curvePropsFrame({ parents: curveFrame, parentsWidth: parentsWidth });
}