import { fontStyleBold } from "../../../../../plugin/utils/getFonts";
import { hapticLabelFrameContain } from "./frame-props";

interface interfaceProps {
    parent: FrameNode;
    hapticType: string; 
    data: any;
}

export function createHapticLabelFrame({ parent, hapticType, data }: interfaceProps) {
    const hapticLabelFrameParent = figma.createFrame();
    hapticLabelFrameParent.layoutMode = "VERTICAL";
    hapticLabelFrameParent.layoutAlign = "MIN";
    hapticLabelFrameParent.primaryAxisAlignItems = 'MIN';
    hapticLabelFrameParent.primaryAxisSizingMode = "AUTO";
    hapticLabelFrameParent.counterAxisSizingMode = "AUTO";
    hapticLabelFrameParent.counterAxisAlignItems = "MIN";
    hapticLabelFrameParent.itemSpacing = 50;
    hapticLabelFrameParent.name = "hapticLabelFrameParent";
    hapticLabelFrameParent.clipsContent = false;
    hapticLabelFrameParent.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(hapticLabelFrameParent);
    hapticLabelFrameContain({ parent: hapticLabelFrameParent, osType: "AOS", hapticType: hapticType, data: data  });
    hapticLabelFrameContain({ parent: hapticLabelFrameParent, osType: "iOS", hapticType: hapticType, data: data  });

}