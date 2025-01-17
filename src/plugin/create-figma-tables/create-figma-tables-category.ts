("use strict");

const boldCollection = figma.variables.createVariableCollection("new-boldCollection");
const boldModeId = boldCollection.modes[0].modeId;
const boldFontStyle = figma.variables.createVariable("fontFamily", boldCollection, "STRING");
boldFontStyle.setValueForMode(boldModeId, "Bold");

export const createTableCategory = ({ parent, tableLabels, rowHeight }) => {
    const titleFrame = figma.createFrame();
    titleFrame.name = "titleFrame";
    titleFrame.layoutMode = "HORIZONTAL";
    titleFrame.layoutAlign = "STRETCH";
    titleFrame.primaryAxisSizingMode = "FIXED";
    titleFrame.counterAxisSizingMode = "AUTO";
    titleFrame.resize(128 * 2 + 468, rowHeight);
    titleFrame.itemSpacing = 1;
    titleFrame.fills = [
        {
            type: "SOLID",
            color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(titleFrame);

    tableLabels.forEach((label, index) => {
        const titleContentFrame = figma.createFrame();
        titleContentFrame.name = "titleContentFrame " + index;
        titleContentFrame.layoutAlign = "STRETCH";
        titleContentFrame.layoutMode = "VERTICAL";
        titleContentFrame.primaryAxisSizingMode = "AUTO";
        titleContentFrame.counterAxisSizingMode = "AUTO";
        titleContentFrame.primaryAxisAlignItems = "CENTER";
        titleContentFrame.counterAxisAlignItems = "CENTER";
        titleContentFrame.itemSpacing = 1;
        if (index < 2) {
            titleContentFrame.minWidth = 128;
            titleContentFrame.resize(128, rowHeight);
        } else {
            titleContentFrame.minWidth = 468;
            titleContentFrame.resize(parent.width - 128 * 2, rowHeight);
        }
        titleContentFrame.fills = [
            {
                type: "SOLID",
                color: { r: 229 / 255, g: 229 / 255, b: 229 / 255 },
                visible: true,
            },
        ];
        titleFrame.appendChild(titleContentFrame);

        (async () => {
            const titleLabel = figma.createText();
            titleLabel.name = "titleLabel" + index;
            titleLabel.setBoundVariable("fontStyle", boldFontStyle);
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
            titleLabel.characters = "" + label + "";
            titleLabel.textAlignHorizontal = "CENTER";
            titleLabel.textAlignVertical = "CENTER";
            titleLabel.layoutAlign = "CENTER";
            titleLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            titleLabel.fontSize = 14;
            titleLabel.lineHeight = { value: 18.2, unit: "PIXELS" };
            titleLabel.fills = [
                { type: "SOLID", color: { r: 0 / 255, g: 0 / 255, b: 0 / 255 } },
            ];
            titleContentFrame.appendChild(titleLabel);
        })();
    });
}
