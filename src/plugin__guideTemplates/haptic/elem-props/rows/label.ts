import { fontStyleBold } from "../../../../plugin/utils/getFonts";

interface interfaceProps {
    msg: any
    parent: FrameNode;
    hapticType: string; 
}

export function createPropsRowsLabel({ msg, parent, hapticType }: interfaceProps) {
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
    parent.appendChild(container);

    (async () => {
        const textLabel = figma.createText();
        textLabel.name = "CurvePropsRowsLabel";
        textLabel.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        textLabel.characters = hapticType;
        textLabel.textAlignHorizontal = "CENTER";
        textLabel.textAlignVertical = "CENTER";
        textLabel.layoutAlign = "CENTER";
        textLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        textLabel.fontSize = 30;
        textLabel.lineHeight = { unit: "AUTO" };
        textLabel.fills = [
            hapticType === "Selection" ? { type: "SOLID", color: { r: 255 / 255, g: 153 / 255, b: 0 / 255 } } :
            hapticType === "Selection-0.5" ? { type: "SOLID", color: { r: 255 / 255, g: 153 / 255, b: 0 / 255 } } :
            hapticType === "Error" ? { type: "SOLID", color: { r: 255 / 255, g: 75 / 255, b: 75 / 255 } } :
            hapticType === "Success" ? { type: "SOLID", color: { r: 255 / 255, g: 75 / 255, b: 75 / 255 } } :
            { type: "SOLID", color: { r: 255 / 255, g: 75 / 255, b: 75 / 255 } },
        ];
        container.appendChild(textLabel);
    })();
}
