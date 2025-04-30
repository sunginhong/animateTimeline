import { createHapticLabel } from "./frame-label-child";

interface interfaceProps {
    parent: FrameNode;
    osType: string; 
}

export function createHapticLabelContainer({ parent, osType }: interfaceProps) {
    const hapticLabelFrame = figma.createFrame();
    hapticLabelFrame.layoutMode = "HORIZONTAL";
    hapticLabelFrame.layoutAlign = "MIN";
    hapticLabelFrame.primaryAxisAlignItems = 'MIN';
    hapticLabelFrame.primaryAxisSizingMode = "AUTO";
    hapticLabelFrame.counterAxisSizingMode = "AUTO";
    hapticLabelFrame.counterAxisAlignItems = "MIN";
    hapticLabelFrame.clipsContent = false;
    hapticLabelFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(hapticLabelFrame);

    createHapticLabel({ parent: hapticLabelFrame, osType: osType });
}
