import { fontStyleBold } from "../../../../../plugin/utils/getFonts";

import { createEasingLabelFrameLabel } from "./frame-props-label";
import { createEasingPropsFrame } from "./frame-props-ease";

interface easingLabelFrameProps {
    parent: FrameNode;
    osType: string;
    easingType: string; 
}

export function easingLabelFrame({ parent, osType, easingType }: easingLabelFrameProps) {
    const easingLabelFrame = figma.createFrame();
    easingLabelFrame.layoutMode = "HORIZONTAL";
    easingLabelFrame.layoutAlign = "MIN";
    easingLabelFrame.primaryAxisAlignItems = 'MIN'
    easingLabelFrame.primaryAxisSizingMode = "AUTO";
    easingLabelFrame.counterAxisSizingMode = "AUTO";
    easingLabelFrame.counterAxisAlignItems = "MIN";
    easingLabelFrame.itemSpacing = 15;
    easingLabelFrame.name = "easingLabelFrame";
    easingLabelFrame.clipsContent = false;
    easingLabelFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
       
    ];
    parent.appendChild(easingLabelFrame);
    createEasingLabelFrameLabel({ parent: easingLabelFrame, osType: osType });
    (osType === "Web" || osType === "AOS") && createEasingPropsFrame({ parent: easingLabelFrame, osType: osType, easingType: easingType });
    (osType === "iOS") && createEasingPropsFrame({ parent: easingLabelFrame, osType: osType, easingType: easingType });
}