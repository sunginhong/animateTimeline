import { createEasingLabel } from "./frame-label-child";

interface interfaceProps {
    parent: FrameNode;
    osType: string; 
}

export function createEasingLabelContainer({ parent, osType }: interfaceProps) {
    const easingLabelFrame = figma.createFrame();
    easingLabelFrame.layoutMode = "HORIZONTAL";
    easingLabelFrame.layoutAlign = "MIN";
    easingLabelFrame.primaryAxisAlignItems = 'MIN';
    easingLabelFrame.primaryAxisSizingMode = "AUTO";
    easingLabelFrame.counterAxisSizingMode = "AUTO";
    easingLabelFrame.counterAxisAlignItems = "MIN";
    easingLabelFrame.clipsContent = false;
    easingLabelFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(easingLabelFrame);

    createEasingLabel({ parent: easingLabelFrame, osType: osType });
}
