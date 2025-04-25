 import { fontStyleBold, fontStyleRegular } from "../../../plugin/utils/getFonts";

export function curveTitle({ parent, label, cases }) {
    (async () => {
        const curveTitle = figma.createText();
        curveTitle.name = "curveTitle " + cases ;
        cases === "Title" ? curveTitle.setBoundVariable("fontStyle", fontStyleBold) : curveTitle.setBoundVariable("fontStyle", fontStyleRegular);
        await figma.loadFontAsync({ family: "Inter", style: cases === "Title" ? "Bold" : "Regular" });
        curveTitle.characters = label;
        curveTitle.textAlignHorizontal = "CENTER";
        curveTitle.textAlignVertical = "CENTER";
        curveTitle.layoutAlign = "MIN";
        curveTitle.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        curveTitle.fontSize = cases === "Title" ? 50 : 30;
        curveTitle.lineHeight = { unit: "AUTO" };
        cases === "Title" ?
        curveTitle.fills = [
            { type: "SOLID", color: { r: 32 / 255, g: 255 / 255, b: 148 / 255 } },
        ] : curveTitle.fills = [
            { type: "SOLID", color: { r: 159 / 255, g: 159 / 255, b: 159 / 255 } },
        ];
        parent.appendChild(curveTitle);
    })();
}