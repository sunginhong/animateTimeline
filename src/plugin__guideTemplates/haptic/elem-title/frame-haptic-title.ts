import { fontStyleBold, fontStyleRegular } from "../../../plugin/utils/getFonts";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    label: string;
    cases: string;
}

export function hapticTitle({ msg, parent, label, cases }: interfaceProps) {
    (async () => {
        const hapticTitle = figma.createText();
        hapticTitle.name = "hapticTitle " + cases;
        cases === "Title" ? hapticTitle.setBoundVariable("fontStyle", fontStyleBold) : hapticTitle.setBoundVariable("fontStyle", fontStyleRegular);
        await figma.loadFontAsync({ family: "Inter", style: cases === "Title" ? "Bold" : "Regular" });
        hapticTitle.characters = label;
        hapticTitle.textAlignHorizontal = "CENTER";
        hapticTitle.textAlignVertical = "CENTER";
        hapticTitle.layoutAlign = "MIN";
        hapticTitle.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        hapticTitle.fontSize = cases === "Title" ? 50 : 30;
        hapticTitle.lineHeight = { unit: "AUTO" };
        hapticTitle.fills = [
            { type: "SOLID", color: cases === "Title" ? msg.isDarkMode ? { r: 32 / 255, g: 255 / 255, b: 148 / 255 } : { r: 0 / 255, g: 0 / 255, b: 0 / 255 } : msg.isDarkMode ? { r: 159 / 255, g: 159 / 255, b: 159 / 255 } : { r: 0 / 255, g: 0 / 255, b: 0 / 255 } },
        ];
        parent.appendChild(hapticTitle);
    })();
}