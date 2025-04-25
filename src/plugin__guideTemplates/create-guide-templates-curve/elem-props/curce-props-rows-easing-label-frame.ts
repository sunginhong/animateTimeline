import { fontStyleBold } from "../../../plugin/utils/getFonts";
import { easingLabelFrame } from "./curce-props-rows-easing-label-frame-props";

interface curvePropsRowsEasingLabelFrameProps {
    parents: FrameNode;
    easingType: string; 
}

export function createCurvePropsEasingLabelFrame({ parents, easingType }: curvePropsRowsEasingLabelFrameProps) {
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
    parents.appendChild(easingLabelFrameContainer);
    easingLabelFrame({ parents: easingLabelFrameContainer, osType: "Web", easingType: easingType });
    easingLabelFrame({ parents: easingLabelFrameContainer, osType: "AOS", easingType: easingType });
    easingLabelFrame({ parents: easingLabelFrameContainer, osType: "iOS", easingType: easingType });
}
