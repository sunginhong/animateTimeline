import {createEasingLabelFrameChild} from "./frame-props-label-child";

interface EasingLabelFrameLabelProps {
    parent: FrameNode;
    osType: string; 
}

export function createEasingLabelFrameLabel({ parent, osType }: EasingLabelFrameLabelProps) {
    const easingLabelContainer = figma.createFrame();
    easingLabelContainer.layoutMode = "HORIZONTAL";
    easingLabelContainer.layoutAlign = "MIN";
    easingLabelContainer.primaryAxisAlignItems = 'MIN';
    easingLabelContainer.primaryAxisSizingMode = "AUTO";
    easingLabelContainer.counterAxisSizingMode = "AUTO";
    easingLabelContainer.counterAxisAlignItems = "MIN";
    easingLabelContainer.clipsContent = false;
    easingLabelContainer.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(easingLabelContainer);

    createEasingLabelFrameChild({ parent: easingLabelContainer, osType: osType });
}
