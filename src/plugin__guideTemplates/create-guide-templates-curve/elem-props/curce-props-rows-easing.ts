import { fontStyleBold } from "../../../plugin/utils/getFonts";
import { createCurvePropsEasingLabelFrame } from "./curce-props-rows-easing-label-frame";

interface curvePropsRowsEasingProps {
    parents: FrameNode;
    easingType: string; 
}

export function createCurvePropsRowsEasing({ parents, easingType }: curvePropsRowsEasingProps) {
    const curvePropsRowsEasingFrame = figma.createFrame();
    curvePropsRowsEasingFrame.layoutMode = "VERTICAL";
    curvePropsRowsEasingFrame.layoutAlign = "MIN";
    curvePropsRowsEasingFrame.primaryAxisAlignItems = 'MIN';
    curvePropsRowsEasingFrame.primaryAxisSizingMode = "AUTO";
    curvePropsRowsEasingFrame.counterAxisSizingMode = "AUTO";
    curvePropsRowsEasingFrame.counterAxisAlignItems = "MIN";
    curvePropsRowsEasingFrame.itemSpacing = 15;
    curvePropsRowsEasingFrame.name = "curvePropsRowsEasingFrame";
    curvePropsRowsEasingFrame.clipsContent = false;
    curvePropsRowsEasingFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parents.appendChild(curvePropsRowsEasingFrame);
    createCurvePropsEasingLabelFrame({ parents: curvePropsRowsEasingFrame, easingType: easingType });
}
