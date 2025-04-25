import { fontStyleBold } from "../../../../../plugin/utils/getFonts";

interface EasingLabelFrameLabelProps {
    parent: FrameNode;
    osType: string; 
}

export function createEasingLabelFrameChild({ parent, osType }: EasingLabelFrameLabelProps) {
    (async () => {
        const easingLabelText = figma.createText();
        easingLabelText.name = "easingLabelText";
        easingLabelText.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        easingLabelText.characters = "[" + osType + "]";
        easingLabelText.textAlignHorizontal = "CENTER";
        easingLabelText.textAlignVertical = "CENTER";
        easingLabelText.layoutAlign = "CENTER";
        easingLabelText.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        easingLabelText.fontSize = 24;
        easingLabelText.lineHeight = { unit: "AUTO" };
        easingLabelText.fills = [
            osType === "Web" ? { type: "SOLID", color: { r: 255 / 255, g: 32 / 255, b: 166 / 255 } } :
            osType === "AOS" ? { type: "SOLID", color: { r: 0 / 255, g: 255 / 255, b: 148 / 255 } } :
            osType === "iOS" ? { type: "SOLID", color: { r: 32 / 255, g: 148 / 255, b: 255 / 255 } } :
            { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
        ];
        parent.appendChild(easingLabelText);
    })();
}