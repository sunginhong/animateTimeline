import { createEasingLabelFrame } from "./easing-label/frame";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    easingType: string; 
}

export function createPropsRowsEasing({ msg, parent, easingType }: interfaceProps) {
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
    createEasingLabelFrame({ msg: msg, parent: curvePropsRowsEasingFrame, easingType: easingType });
}
