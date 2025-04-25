import { fontStyleBold } from "../../../plugin/utils/getFonts";

import { createEasingLabelFrameLabel } from "./curce-props-rows-easing-label-frame-props-label";
import { createEasingPropsFrame } from "./curce-props-rows-easing-label-frame-props-ease";

interface easingLabelFrameProps {
    parents: FrameNode;
    osType: string;
    easingType: string; 
}

export function easingLabelFrame({ parents, osType, easingType }: easingLabelFrameProps) {
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
    parents.appendChild(easingLabelFrame);
    createEasingLabelFrameLabel({ parents: easingLabelFrame, osType: osType });
    (osType === "Web" || osType === "AOS") && createEasingPropsFrame({ parents: easingLabelFrame, osType: osType, easingType: easingType });
    (osType === "iOS") && createEasingPropsFrame({ parents: easingLabelFrame, osType: osType, easingType: easingType });
}