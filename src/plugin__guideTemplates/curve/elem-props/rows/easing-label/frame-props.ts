import { fontStyleBold } from "../../../../../plugin/utils/getFonts";

import { createEasingLabelContainer } from "./frame-label";
import { createEasingLabel } from "./frame-ease";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    osType: string;
    easingType: string; 
}

export function easingLabelFrameContain({ msg, parent, osType, easingType }: interfaceProps) {
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
    createEasingLabelContainer({ msg: msg, parent: easingLabelFrame, osType: osType });
    (osType === "Web" || osType === "AOS") && createEasingLabel({ msg: msg, parent: easingLabelFrame, osType: osType, easingType: easingType });
    (osType === "iOS") && createEasingLabel({ msg: msg, parent: easingLabelFrame, osType: osType, easingType: easingType });
}