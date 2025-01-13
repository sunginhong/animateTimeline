("use strict");

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTableCategory= ({parent, tableLabels, rowHeight}) => {
    const frame_titles = figma.createFrame();
    frame_titles.name = "frame_titles";
    frame_titles.layoutMode = "HORIZONTAL";
    frame_titles.layoutAlign = "STRETCH";
    frame_titles.primaryAxisSizingMode = "FIXED";
    frame_titles.counterAxisSizingMode = "AUTO";
    frame_titles.resize(128*2 + 468, rowHeight);
    frame_titles.itemSpacing = 1;
    frame_titles.fills = [
        {
        type: "SOLID",
        color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
        visible: false,
        },
    ];
    parent.appendChild(frame_titles)

    tableLabels.forEach((values, i) => {
        const title_contents = figma.createFrame();
        title_contents.name = "title_contents " + i;
        title_contents.layoutAlign = "STRETCH";
        title_contents.layoutMode = "VERTICAL";
        title_contents.primaryAxisSizingMode = "AUTO";
        title_contents.counterAxisSizingMode = "AUTO";
        title_contents.primaryAxisAlignItems = "CENTER";
        title_contents.counterAxisAlignItems = "CENTER";
        title_contents.itemSpacing = 1;
        if(i < 2){
            title_contents.minWidth = 128;
            title_contents.resize(128, rowHeight);
        } else {
            title_contents.minWidth = 468;
            title_contents.resize(parent.width - 128*2, rowHeight);
        }
        title_contents.fills = [
        {
            type: "SOLID",
            color: { r: 229 / 255, g: 229 / 255, b: 229 / 255 },
            visible: true,
        },
        ];
        frame_titles.appendChild(title_contents);

        (async () => {
            const label_title = figma.createText();
            label_title.name = "label_title" + i;
            label_title.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({family: "Inter", style: "Bold" });
            label_title.characters = "" + tableLabels[i] + "";
            label_title.textAlignHorizontal = "CENTER";
            label_title.textAlignVertical = "CENTER";
            label_title.layoutAlign = "CENTER";
            label_title.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            label_title.fontSize = 14;
            label_title.lineHeight = { value: 18.2, unit: "PIXELS" };
            label_title.fills = [
            { type: "SOLID", color: { r: 0 / 255, g: 0 / 255, b: 0 / 255 } },
            ];
            title_contents.appendChild(label_title);
        })();
    });
}
