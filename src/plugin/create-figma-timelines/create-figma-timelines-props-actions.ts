("use strict");

const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineAction = ({ parent, msg, index }) => {
    let msgData = msg[2].split(",");
    msgData.forEach((value, i) => {
        const labelGroup = figma.createFrame();
        labelGroup.name = "LabelGroup " + index;
        labelGroup.cornerRadius = 100;
        labelGroup.layoutMode = "VERTICAL";
        labelGroup.primaryAxisSizingMode = "AUTO";
        labelGroup.counterAxisSizingMode = "AUTO";
        labelGroup.primaryAxisAlignItems = "CENTER";
        labelGroup.counterAxisAlignItems = "CENTER";
        labelGroup.paddingLeft = 8;
        labelGroup.paddingRight = 8;
        labelGroup.paddingTop = 4;
        labelGroup.paddingBottom = 4;
        labelGroup.itemSpacing = 10;
        labelGroup.layoutAlign = "CENTER";
        labelGroup.fills = [
            {
                type: "SOLID",
                color: { r: 217 / 255, g: 247 / 255, b: 230 / 255 },
                visible: true,
            }
        ];
        parent.appendChild(labelGroup);

        (async () => {
            const labelBadge = figma.createText();
            labelBadge.name = "Badge" + index;
            labelBadge.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
            labelBadge.characters = "" + value + "";
            labelBadge.textAlignHorizontal = "CENTER";
            labelBadge.textAlignVertical = "CENTER";
            labelBadge.layoutAlign = "CENTER";
            labelBadge.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            labelBadge.fontSize = 14;
            labelBadge.lineHeight = { value: 16, unit: "PIXELS" };
            labelBadge.fills = [
                { type: "SOLID", color: { r: 3 / 255, g: 169 / 255, b: 77 / 255 } },
            ];
            labelGroup.appendChild(labelBadge);
        })();
    });
}