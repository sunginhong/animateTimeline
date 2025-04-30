import { createHapticLabelFrame } from "./haptic-label/frame";

interface interfaceProps {
    parent: FrameNode;
    hapticType: string; 
    data: any;
}

export function createPropsRowsHaptic({ parent, hapticType, data }: interfaceProps) {
    const curvePropsRowsHapticFrame = figma.createFrame();
    curvePropsRowsHapticFrame.layoutMode = "VERTICAL";
    curvePropsRowsHapticFrame.layoutAlign = "MIN";
    curvePropsRowsHapticFrame.primaryAxisAlignItems = 'MIN';
    curvePropsRowsHapticFrame.primaryAxisSizingMode = "AUTO";
    curvePropsRowsHapticFrame.counterAxisSizingMode = "AUTO";
    curvePropsRowsHapticFrame.counterAxisAlignItems = "MIN";
    curvePropsRowsHapticFrame.itemSpacing = 15;
    curvePropsRowsHapticFrame.name = "curvePropsRowsHapticFrame";
    curvePropsRowsHapticFrame.clipsContent = false;
    curvePropsRowsHapticFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(curvePropsRowsHapticFrame);
    createHapticLabelFrame({ parent: curvePropsRowsHapticFrame, hapticType: hapticType, data: data });
}
