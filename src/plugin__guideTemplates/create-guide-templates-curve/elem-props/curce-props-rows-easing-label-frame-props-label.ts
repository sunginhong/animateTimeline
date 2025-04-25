import { fontStyleBold } from "../../../plugin/utils/getFonts";

interface EasingLabelFrameLabelProps {
    parents: FrameNode;
    osType: string; 
}

export function createEasingLabelFrameLabel({ parents, osType }: EasingLabelFrameLabelProps) {
    const easingLabelContain = figma.createFrame();
    easingLabelContain.layoutMode = "HORIZONTAL";
    easingLabelContain.layoutAlign = "MIN";
    easingLabelContain.primaryAxisAlignItems = 'MIN'
    easingLabelContain.primaryAxisSizingMode = "AUTO";
    easingLabelContain.counterAxisSizingMode = "AUTO";
    easingLabelContain.counterAxisAlignItems = "MIN";
    easingLabelContain.clipsContent = false;
    easingLabelContain.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    
    ];
    parents.appendChild(easingLabelContain);
    
    (async () => {
        const easingLabel = figma.createText();
        easingLabel.name = "easingLabel";
        easingLabel.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        easingLabel.characters = "[" + osType + "]";
        easingLabel.textAlignHorizontal = "CENTER";
        easingLabel.textAlignVertical = "CENTER";
        easingLabel.layoutAlign = "CENTER";
        easingLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        easingLabel.fontSize = 24;
        easingLabel.lineHeight = { unit: "AUTO" };
        easingLabel.fills = [
            osType === "Web" ? { type: "SOLID", color: { r: 255 / 255, g: 32 / 255, b: 166 / 255 } } :
            osType === "AOS" ? { type: "SOLID", color: { r: 0 / 255, g: 255 / 255, b: 148 / 255 } } :
            osType === "iOS" ? { type: "SOLID", color: { r: 32 / 255, g: 148 / 255, b: 255 / 255 } } :
            { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
        ];
        easingLabelContain.appendChild(easingLabel);
    })();
}