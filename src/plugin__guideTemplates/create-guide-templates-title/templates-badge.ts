
const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export function templatesBadge({parents, label }) {
    const badgeFrame = figma.createFrame();
    badgeFrame.cornerRadius = 100;
    badgeFrame.layoutMode = "VERTICAL";
    badgeFrame.primaryAxisSizingMode = "AUTO";
    badgeFrame.counterAxisSizingMode = "AUTO";
    badgeFrame.primaryAxisAlignItems = "CENTER";
    badgeFrame.counterAxisAlignItems = "CENTER";
    badgeFrame.paddingLeft = 16;
    badgeFrame.paddingRight = 16;
    badgeFrame.paddingTop = 6;
    badgeFrame.paddingBottom = 6;
    badgeFrame.itemSpacing = 10;
    badgeFrame.layoutAlign = "CENTER";
    badgeFrame.horizontalPadding = 20*2;
    badgeFrame.verticalPadding = 12*2;
    badgeFrame.name = "badgeFrame";
    badgeFrame.clipsContent = false;
    badgeFrame.fills = [
        { type: "SOLID", color: { r: 0 / 255, g: 148 / 255, b: 255 / 255 }, visible: true },
       
    ];
    parents.appendChild(badgeFrame);

    (async () => {
        const badgeLabel = figma.createText();
        badgeLabel.name = "badgeLabel" ;
        badgeLabel.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        badgeLabel.characters = label;
        badgeLabel.textAlignHorizontal = "CENTER";
        badgeLabel.textAlignVertical = "CENTER";
        badgeLabel.layoutAlign = "CENTER";
        badgeLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        badgeLabel.fontSize = 26*2;
        badgeLabel.fills = [
            { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
        ];
        badgeFrame.appendChild(badgeLabel);
    })();
}