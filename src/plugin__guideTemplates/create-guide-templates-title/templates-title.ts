const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export function templatesTitle({ parents, label }) {
    (async () => {
        const titleLabel = figma.createText();
        titleLabel.name = "titleLabel" ;
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
            { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
        ];
        parents.appendChild(titleLabel);
    })();
}