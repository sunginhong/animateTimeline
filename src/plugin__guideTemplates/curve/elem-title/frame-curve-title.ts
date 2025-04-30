 import { fontStyleBold, fontStyleRegular } from "../../../plugin/utils/getFonts";

interface interfaceProps {
    msg: any;
    parent: FrameNode | GroupNode;
    label: string;
    cases: string;
}

export function curveTitle({ msg, parent, label, cases }: interfaceProps) {
    (async () => {
        const curveTitle = figma.createText();
        curveTitle.name = "curveTitle " + cases;
        cases === "Title" ? curveTitle.setBoundVariable("fontStyle", fontStyleBold) : curveTitle.setBoundVariable("fontStyle", fontStyleRegular);
        await figma.loadFontAsync({ family: "Inter", style: cases === "Title" ? "Bold" : "Regular" });
        curveTitle.characters = label;
        curveTitle.textAlignHorizontal = "CENTER";
        curveTitle.textAlignVertical = "CENTER";
        curveTitle.layoutAlign = "MIN";
        curveTitle.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        curveTitle.fontSize = cases === "Title" ? 50 : 30;
        curveTitle.lineHeight = { unit: "AUTO" };
        curveTitle.fills = [
            { type: "SOLID", color: cases === "Title" ? msg.isDarkMode ? { r: 32 / 255, g: 255 / 255, b: 148 / 255 } : { r: 0 / 255, g: 0 / 255, b: 0 / 255 } : msg.isDarkMode ? { r: 159 / 255, g: 159 / 255, b: 159 / 255 } : { r: 0 / 255, g: 0 / 255, b: 0 / 255 } },
        ];
        parent.appendChild(curveTitle);
    })();
}