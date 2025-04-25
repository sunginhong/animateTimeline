 import { fontStyleBold, fontStyleRegular } from "../../../plugin/utils/getFonts";

export function templatesListTitle({ parents, label, cases }) {
    (async () => {
        const listLabel = figma.createText();
        listLabel.name = "listLabel " + cases ;
        cases === "Title" ? listLabel.setBoundVariable("fontStyle", fontStyleBold) : listLabel.setBoundVariable("fontStyle", fontStyleRegular);
        await figma.loadFontAsync({ family: "Inter", style: cases === "Title" ? "Bold" : "Regular" });
        listLabel.characters = label;
        listLabel.textAlignHorizontal = "CENTER";
        listLabel.textAlignVertical = "CENTER";
        listLabel.layoutAlign = "MIN";
        listLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        listLabel.fontSize = cases === "Title" ? 70 : 30;
        listLabel.lineHeight = { unit: "AUTO" };
        listLabel.fills = [
            { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
        ];
        parents.appendChild(listLabel);
    })();
}