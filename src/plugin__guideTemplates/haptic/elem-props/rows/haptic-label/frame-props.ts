import { fontStyleBold } from "../../../../../plugin/utils/getFonts";

import { createHapticLabelContainer } from "./frame-label";
import { createHapticLabel } from "./frame-haptic";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    osType: string;
    hapticType: string; 
    data?: any;
}

export function hapticLabelFrameContain({ msg, parent, osType, hapticType, data }: interfaceProps) {
    const hapticLabelFrameContain = figma.createFrame();
    hapticLabelFrameContain.layoutMode = "VERTICAL";
    hapticLabelFrameContain.layoutAlign = "MIN";
    hapticLabelFrameContain.primaryAxisAlignItems = 'MIN'
    hapticLabelFrameContain.primaryAxisSizingMode = "AUTO";
    hapticLabelFrameContain.counterAxisSizingMode = "AUTO";
    hapticLabelFrameContain.counterAxisAlignItems = "MIN";
    hapticLabelFrameContain.itemSpacing = 15;
    hapticLabelFrameContain.name = "hapticLabelFrameContain";
    hapticLabelFrameContain.clipsContent = false;
    hapticLabelFrameContain.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
       
    ];
    parent.appendChild(hapticLabelFrameContain);
    createHapticLabelContainer({ parent: hapticLabelFrameContain, osType: osType });
    (osType === "AOS") && createHapticLabel({ msg: msg, parent: hapticLabelFrameContain, osType: osType, hapticType: hapticType, data: data });
    (osType === "iOS") && createHapticLabel({ msg: msg, parent: hapticLabelFrameContain, osType: osType, hapticType: hapticType, data: data });
}