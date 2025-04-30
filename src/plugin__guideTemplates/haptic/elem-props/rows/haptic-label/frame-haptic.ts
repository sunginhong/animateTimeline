import { createAosHapticLabel } from "./frame-haptic-aos";
import { createIosHapticLabel } from "./frame-haptic-ios";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    osType: string; 
    hapticType: string; 
    data?: any;
}

export function createHapticLabel({ msg, parent, osType, hapticType, data }: interfaceProps) {
    const hapticLabelFrame = figma.createFrame();
    hapticLabelFrame.layoutMode = "VERTICAL";
    hapticLabelFrame.layoutAlign = "MIN";
    hapticLabelFrame.itemSpacing = 30;
    hapticLabelFrame.primaryAxisAlignItems = 'MIN';
    hapticLabelFrame.primaryAxisSizingMode = "AUTO";
    hapticLabelFrame.counterAxisSizingMode = "AUTO";
    hapticLabelFrame.counterAxisAlignItems = "MIN";
    hapticLabelFrame.clipsContent = false;
    hapticLabelFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(hapticLabelFrame);

    if (osType === "AOS") {
        createAosHapticLabel({ msg: msg, parent: hapticLabelFrame, osType: osType, hapticType: hapticType, data: data });
    }
    if (osType === "iOS") {
        createIosHapticLabel({ msg: msg, parent: hapticLabelFrame, osType: osType, hapticType: hapticType, data: data });
    }
}
