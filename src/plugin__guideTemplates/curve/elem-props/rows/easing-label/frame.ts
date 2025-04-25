import { fontStyleBold } from "../../../../../plugin/utils/getFonts";
import { easingLabelFrame } from "./frame-props";

interface curvePropsRowsEasingLabelFrameProps {
    parent: FrameNode;
    easingType: string; 
}

export function createCurvePropsEasingLabelFrame({ parent, easingType }: curvePropsRowsEasingLabelFrameProps) {
    const easingLabelFrameContainer = figma.createFrame();
    easingLabelFrameContainer.layoutMode = "VERTICAL";
    easingLabelFrameContainer.layoutAlign = "MIN";
    easingLabelFrameContainer.primaryAxisAlignItems = 'MIN';
    easingLabelFrameContainer.primaryAxisSizingMode = "AUTO";
    easingLabelFrameContainer.counterAxisSizingMode = "AUTO";
    easingLabelFrameContainer.counterAxisAlignItems = "MIN";
    easingLabelFrameContainer.itemSpacing = 15;
    easingLabelFrameContainer.name = "easingLabelFrameContainer";
    easingLabelFrameContainer.clipsContent = false;
    easingLabelFrameContainer.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(easingLabelFrameContainer);
    easingLabelFrame({ parent: easingLabelFrameContainer, osType: "Web", easingType: easingType });
    easingLabelFrame({ parent: easingLabelFrameContainer, osType: "AOS", easingType: easingType });
    easingLabelFrame({ parent: easingLabelFrameContainer, osType: "iOS", easingType: easingType });
}
