("use strict");

const boldCollection = figma.variables.createVariableCollection("BoldCollection");
const boldModeId = boldCollection.modes[0].modeId;
const boldFontStyle = figma.variables.createVariable("fontFamily", boldCollection, "STRING");
boldFontStyle.setValueForMode(boldModeId, "Bold");

export const createTableAction = ({ parent, msg, index }) => {
    let messageData = msg[2].split(",");
    messageData.forEach((value, i) => {
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
            const badgeLabel = figma.createText();
            badgeLabel.name = "Badge" + index;
            badgeLabel.setBoundVariable("fontStyle", boldFontStyle);
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
            badgeLabel.characters = "" + value + "";
            badgeLabel.textAlignHorizontal = "CENTER";
            badgeLabel.textAlignVertical = "CENTER";
            badgeLabel.layoutAlign = "CENTER";
            badgeLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            badgeLabel.fontSize = 14;
            badgeLabel.lineHeight = { value: 16, unit: "PIXELS" };
            badgeLabel.fills = [
                { type: "SOLID", color: { r: 3 / 255, g: 169 / 255, b: 77 / 255 } },
            ];
            labelGroup.appendChild(badgeLabel);
        })();
    });
}