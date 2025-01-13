("use strict");

import { createTableCategory } from "./create-figma-tables-category";
import { createTableLabels } from "./create-figma-tables-labels";
import { createTableAction } from "./create-figma-tables-actions";
import { createTableProps } from "./create-figma-tables-props";

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

const collectionRegular  = figma.variables.createVariableCollection("new-collection2");
const modeIdRegular  = collectionRegular.modes[0].modeId;
const fontStyleRegular = figma.variables.createVariable("fontFamily", collectionRegular, "STRING");
fontStyleRegular.setValueForMode(modeIdRegular, "regular");

const rowHeight = 42;
const tableLabels = ["Label", "Action", "Property"];

export const createFigmaTables = ({parent, msg}) => {
    const frame_tables = figma.createFrame();
    frame_tables.name = "frame_tables";
    frame_tables.layoutMode = "VERTICAL";
    frame_tables.clipsContent = true;
    frame_tables.primaryAxisSizingMode = "AUTO";
    frame_tables.counterAxisSizingMode = "AUTO";
    frame_tables.itemSpacing = 1;
    frame_tables.layoutAlign = "STRETCH";
    frame_tables.minWidth = 726;
    frame_tables.cornerRadius = 8;
    frame_tables.strokes = [{ type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 } }];
    frame_tables.fills = [{ type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 } }];
    parent.appendChild(frame_tables)

    createTableCategory({parent: frame_tables, tableLabels: tableLabels, rowHeight: rowHeight});

    msg.forEach((values, i) => {
        const table_cell = figma.createFrame();
        table_cell.layoutMode = "HORIZONTAL";
        table_cell.layoutAlign = "STRETCH";
        table_cell.primaryAxisSizingMode = "FIXED";
        table_cell.counterAxisSizingMode = "AUTO";
        table_cell.itemSpacing = 1;
        table_cell.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240/ 255, b: 240 / 255 },
            visible: true,
        },
        ];
        frame_tables.appendChild(table_cell);
        const data = values;

        tableLabels.forEach((values, i) => {
            const title_contents = figma.createFrame();
            title_contents.name = "title_contents " + i;
            title_contents.layoutAlign = "STRETCH";
            title_contents.layoutMode = "VERTICAL";
            title_contents.primaryAxisSizingMode = "AUTO";
            title_contents.counterAxisSizingMode = "AUTO";
            title_contents.primaryAxisAlignItems = "CENTER";
            title_contents.counterAxisAlignItems = "CENTER";
            title_contents.paddingTop = 12
            title_contents.paddingBottom = 12
            title_contents.itemSpacing = 4;
            if(i < 2){
                title_contents.minWidth = 128;
                title_contents.resize(128, rowHeight);
            } else {
                title_contents.minWidth = 468;
                title_contents.resize(table_cell.width - 128*2, rowHeight);
            }
            title_contents.fills = [
            {
                type: "SOLID",
                color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
                visible: true,
            },
            ];
            table_cell.appendChild(title_contents);

            if(i === 0){
                createTableLabels({parent: title_contents, msg: data, index: i});
            }
            if(i === 1){
                createTableAction({parent: title_contents, msg: data, index: i});
            }
            if(i === 2){
                if(parseInt(data[5]) === 0){
                    createTableProps({parent: title_contents, msg: data, index: i, delayBool: false});
                } else {
                    createTableProps({parent: title_contents, msg: data, index: i, delayBool: true});
                }
            }
        });

    });
 
}



