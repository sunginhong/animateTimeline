("use strict");

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

const collectionRegular  = figma.variables.createVariableCollection("new-collection2");
const modeIdRegular  = collectionRegular.modes[0].modeId;
const fontStyleRegular = figma.variables.createVariable("fontFamily", collectionRegular, "STRING");
fontStyleRegular.setValueForMode(modeIdRegular, "regular");

export const createFigmaTables = ({parent, msg}) => {

    const tableLabels = ["Label", "Action", "Property"];

    const frame_tables = figma.createFrame();
    frame_tables.name = "frame_tables";
    frame_tables.layoutMode = "VERTICAL";
    frame_tables.primaryAxisSizingMode = "FIXED";
    frame_tables.counterAxisSizingMode = "AUTO";
    frame_tables.itemSpacing = 1;
    frame_tables.layoutAlign = "MIN";
    frame_tables.resize(726, frame_tables.height);
    frame_tables.cornerRadius = 8;
    frame_tables.strokes = [{ type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 } }];
    frame_tables.fills = [{ type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 } }];
    parent.appendChild(frame_tables)

    createTableTitles(frame_tables, tableLabels);
    
    msg.forEach((values, i) => {
        const table_cell = figma.createFrame();
        table_cell.name = "Cell " + i;
        table_cell.layoutMode = "VERTICAL";
        table_cell.primaryAxisSizingMode = "AUTO";
        table_cell.counterAxisSizingMode = "AUTO";
        table_cell.paddingLeft = 12;
        table_cell.paddingRight = 12;
        table_cell.paddingTop = 12;
        table_cell.paddingBottom = 12;
        table_cell.itemSpacing = 4;
        table_cell.layoutAlign = "CENTER";
        table_cell.fills = [
        {
            type: "SOLID",
            color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
            visible: true,
        },
        ];
        frame_tables.appendChild(table_cell);
        
        createTableGroup(table_cell, msg, i);
        
    });
 
}

function numberToString(n) {
    return (n + "").split("");
}

function createTableTitles(parent, tableLabels){
    const frame_titles = figma.createFrame();
    frame_titles.name = "frame_titles";
    frame_titles.layoutMode = "HORIZONTAL";
    frame_titles.primaryAxisSizingMode = "AUTO";
    frame_titles.counterAxisSizingMode = "AUTO";
    frame_titles.itemSpacing = 1;
    frame_titles.layoutAlign = "STRETCH";
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
        title_contents.layoutMode = "VERTICAL";
        title_contents.primaryAxisSizingMode = "AUTO";
        title_contents.counterAxisSizingMode = "AUTO";
        title_contents.paddingLeft = 12;
        title_contents.paddingRight = 12;
        title_contents.paddingTop = 12;
        title_contents.paddingBottom = 12;
        title_contents.itemSpacing = 4;
        title_contents.layoutAlign = "CENTER";
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
            label_title.fontName = { family: "Inter", style: "Bold" };
            label_title.fontSize = 14;
            label_title.lineHeight = { value: 18.2, unit: "PIXELS" };
            label_title.fills = [
            { type: "SOLID", color: { r: 0 / 255, g: 0 / 255, b: 0 / 255 } },
            ];
            title_contents.appendChild(label_title);
        })();
    });
}

function createTableGroup(parent, msg, index){

    const label_gr = figma.createFrame();
    label_gr.name = "Label_gr " + index;
    label_gr.cornerRadius = 100;
    label_gr.layoutMode = "VERTICAL";
    label_gr.primaryAxisSizingMode = "AUTO";
    label_gr.counterAxisSizingMode = "AUTO";
    label_gr.paddingLeft = 16;
    label_gr.paddingRight = 16;
    label_gr.paddingTop = 8;
    label_gr.paddingBottom = 8;
    label_gr.itemSpacing = 8;
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
        label_badge.characters = "" + msg[index][1] + "";
        label_badge.textAlignHorizontal = "CENTER";
        label_badge.textAlignVertical = "CENTER";
        label_badge.layoutAlign = "CENTER";
        label_badge.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        label_badge.fontSize = 10;
        label_badge.lineHeight = { value: 10, unit: "PIXELS" };
        label_badge.fills = [
        { type: "SOLID", color: { r: 3 / 255, g: 169 / 255, b: 77 / 255 } },
        ];
        label_gr.appendChild(label_badge);
    })();
}