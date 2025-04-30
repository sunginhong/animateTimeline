import { fontStyleBold } from "../../../../../plugin/utils/getFonts";
import { easingLabelFrameContain } from "./frame-props";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    easingType: string; 
}

export function createEasingLabelFrame({ msg, parent, easingType }: interfaceProps) {
    const easingLabelFrameParent = figma.createFrame();
    easingLabelFrameParent.layoutMode = "VERTICAL";
    easingLabelFrameParent.layoutAlign = "MIN";
    easingLabelFrameParent.primaryAxisAlignItems = 'MIN';
    easingLabelFrameParent.primaryAxisSizingMode = "AUTO";
    easingLabelFrameParent.counterAxisSizingMode = "AUTO";
    easingLabelFrameParent.counterAxisAlignItems = "MIN";
    easingLabelFrameParent.itemSpacing = 15;
    easingLabelFrameParent.name = "easingLabelFrameParent";
    easingLabelFrameParent.clipsContent = false;
    easingLabelFrameParent.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(easingLabelFrameParent);
    easingLabelFrameContain({ msg: msg, parent: easingLabelFrameParent, osType: "Web", easingType: easingType });
    easingLabelFrameContain({ msg: msg, parent: easingLabelFrameParent, osType: "AOS", easingType: easingType });
    easingLabelFrameContain({ msg: msg, parent: easingLabelFrameParent, osType: "iOS", easingType: easingType });
}
