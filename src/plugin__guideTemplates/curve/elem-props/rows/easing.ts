import { createCurvePropsEasingLabelFrame } from "./easing-label/frame";

interface curvePropsRowsEasingProps {
    parent: FrameNode;
    easingType: string; 
}

export function createCurvePropsRowsEasing({ parent, easingType }: curvePropsRowsEasingProps) {
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
    parent.appendChild(curvePropsRowsEasingFrame);
    createCurvePropsEasingLabelFrame({ parent: curvePropsRowsEasingFrame, easingType: easingType });
}
