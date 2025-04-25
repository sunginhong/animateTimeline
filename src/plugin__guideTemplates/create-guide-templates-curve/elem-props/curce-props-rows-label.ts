import { fontStyleBold } from "../../../plugin/utils/getFonts";

interface CurvePropsRowsLabelProps {
    parents: FrameNode;
    easingType: string; 
}

export function createCurvePropsRowsLabel({ parents, easingType }: CurvePropsRowsLabelProps) {
    const container = figma.createFrame();
    container.layoutMode = "VERTICAL";
    container.layoutAlign = "MIN";
    container.primaryAxisAlignItems = 'MIN';
    container.primaryAxisSizingMode = "AUTO";
    container.counterAxisSizingMode = "AUTO";
    container.counterAxisAlignItems = "MIN";
    container.resize(356, container.height);
    container.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parents.appendChild(container);

    (async () => {
        const textLabel = figma.createText();
        textLabel.name = "CurvePropsRowsLabel";
        textLabel.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        textLabel.characters = easingType;
        textLabel.textAlignHorizontal = "CENTER";
        textLabel.textAlignVertical = "CENTER";
        textLabel.layoutAlign = "CENTER";
        textLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        textLabel.fontSize = 30;
        textLabel.lineHeight = { unit: "AUTO" };
        textLabel.fills = [
            easingType === "Ease-Standard" ? { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } } :
            easingType === "Ease-Out" ? { type: "SOLID", color: { r: 255 / 255, g: 153 / 255, b: 0 / 255 } } :
            easingType === "Ease-Out-Level1" ? { type: "SOLID", color: { r: 255 / 255, g: 153 / 255, b: 0 / 255 } } :
            easingType === "Ease-InOut" ? { type: "SOLID", color: { r: 219 / 255, g: 0 / 255, b: 255 / 255 } } :
            easingType === "Spring" ? { type: "SOLID", color: { r: 255 / 255, g: 75 / 255, b: 0 / 255 } } :
            easingType === "Spring-Level1" ? { type: "SOLID", color: { r: 255 / 255, g: 75 / 255, b: 0 / 255 } } :
            easingType === "Spring-Level2" ? { type: "SOLID", color: { r: 255 / 255, g: 75 / 255, b: 0 / 255 } } :
            { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
        ];
        container.appendChild(textLabel);
    })();
}
