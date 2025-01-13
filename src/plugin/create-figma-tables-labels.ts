("use strict");

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTableLabels= ({parent, msg, index}) => {
    let msgData = msg[1].split(",");
    msgData.forEach((value, i) => {
        const label_gr = figma.createFrame();
        label_gr.name = "Label_gr " + index;
        label_gr.cornerRadius = 100;
        label_gr.layoutMode = "VERTICAL";
        label_gr.primaryAxisSizingMode = "AUTO";
        label_gr.counterAxisSizingMode = "AUTO";
        label_gr.primaryAxisAlignItems = "CENTER";
        label_gr.counterAxisAlignItems = "CENTER";
        label_gr.paddingLeft = 16;
        label_gr.paddingRight = 16;
        label_gr.paddingTop = 6;
        label_gr.paddingBottom = 6;
        label_gr.itemSpacing = 10;
        label_gr.layoutAlign = "CENTER";
        label_gr.fills = [
            {
            type: "SOLID",
            color: { r: 217 / 255, g: 247 / 255, b: 230 / 255 },
            visible: true,
            }
        ];
        parent.appendChild(label_gr);

        (async () => {
            const label_badge = figma.createText();
            label_badge.name = "Badge" + index;
            label_badge.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({family: "Inter", style: "Bold" });
            label_badge.characters = "" + value + "";
            label_badge.textAlignHorizontal = "CENTER";
            label_badge.textAlignVertical = "CENTER";
            label_badge.layoutAlign = "CENTER";
            label_badge.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            label_badge.fontSize = 14;
            label_badge.lineHeight = { value: 16, unit: "PIXELS" };
            label_badge.fills = [
            { type: "SOLID", color: { r: 3 / 255, g: 169 / 255, b: 77 / 255 } },
            ];
            label_gr.appendChild(label_badge);
        })();
    });
}


