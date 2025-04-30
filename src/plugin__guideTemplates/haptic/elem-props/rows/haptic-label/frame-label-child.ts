import { fontStyleBold } from "../../../../../plugin/utils/getFonts";

interface interfaceProps {
    parent: FrameNode;
    osType: string; 
}

export function createHapticLabel({ parent, osType }: interfaceProps) {
    (async () => {
        const labelText = figma.createText();
        labelText.name = "easingLabel";
        labelText.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        labelText.characters = "[" + osType + "]";
        labelText.textAlignHorizontal = "CENTER";
        labelText.textAlignVertical = "CENTER";
        labelText.layoutAlign = "CENTER";
        labelText.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        labelText.fontSize = 24;
        labelText.lineHeight = { unit: "AUTO" };
        labelText.fills = [
            osType === "AOS" ? { type: "SOLID", color: { r: 0 / 255, g: 255 / 255, b: 148 / 255 } } :
            osType === "iOS" ? { type: "SOLID", color: { r: 32 / 255, g: 148 / 255, b: 255 / 255 } } :
            { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
        ];
        parent.appendChild(labelText);
    })();
}