import { fontStyleBold } from "../../plugin/utils/getFonts";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    label: string;
}

export function templatesTitle({ msg, parent, label }: interfaceProps) {
    (async () => {
        const titleLabel = figma.createText();
        titleLabel.name = "titleLabel";
        titleLabel.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        titleLabel.characters = label;
        titleLabel.textAlignHorizontal = "CENTER";
        titleLabel.textAlignVertical = "CENTER";
        titleLabel.layoutAlign = "CENTER";
        titleLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        titleLabel.fontSize = 128;
        titleLabel.lineHeight = { unit: "AUTO" };
        titleLabel.fills = [
            { type: "SOLID", color: msg.isDarkMode ? { r: 255 / 255, g: 255 / 255, b: 255 / 255 } : { r: 0 / 255, g: 0 / 255, b: 0 / 255 } },
        ];
        parent.appendChild(titleLabel);
    })();
}