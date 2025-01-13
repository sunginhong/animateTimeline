("use strict");

import { getTableCurveColor } from "./guide-text-curves-color"

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const text_field_title = async ({parents, index, value, i, msg, delayBool}) => {
    const text_field_title = figma.createText();
    text_field_title.name = "Text_Field_Title" + index;
    text_field_title.setBoundVariable("fontStyle", fontStyleBold);
    await figma.loadFontAsync({family: "Inter", style: "Bold" });
    text_field_title.characters = "" + value + ":";
    text_field_title.textAlignHorizontal = "CENTER";
    text_field_title.textAlignVertical = "CENTER";
    text_field_title.layoutAlign = "CENTER";
    text_field_title.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    text_field_title.fontSize = 14;
    text_field_title.lineHeight = { value: 25.2, unit: "PIXELS" };
    text_field_title.fills = [
    { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
    ];
    parents.appendChild(text_field_title);

    try {
        await figma.loadFontAsync({
        family: 'Inter',
        style: 'Regular'
        });

    } catch(err) {
        console.error(`Error: ${err}`);

    }
    const text_field_props = figma.createText();
    text_field_props.fontName = {
    family: 'Inter',
    style: 'Regular'
    };
    text_field_props.name = "Text_Field_Props" + index;
    text_field_props.textAlignHorizontal = "CENTER";
    text_field_props.textAlignVertical = "CENTER";
    text_field_props.layoutAlign = "CENTER";
    text_field_props.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    text_field_props.fontSize = 14;
    text_field_props.lineHeight = { value: 25.2, unit: "PIXELS" };
    text_field_props.fills = [
    { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
    ];
    parents.appendChild(text_field_props);
    
    if( i === 0){
        text_field_props.characters = "가나다라가나다라가나다라가나다라가나다라가나다라";
    }
    if( i === 1){
        text_field_props.characters = "0." + msg[4] + "(" + msg[4] + "ms)";
    }
    if(!delayBool){
        if( i === 2){
            text_field_props.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({family: "Inter", style: "Bold" });
            text_field_props.characters = "" + msg[3] + "";
            text_field_props.fills = [
            { type: "SOLID", color: { r: getTableCurveColor(msg[3]).r, g: getTableCurveColor(msg[3]).g, b: getTableCurveColor(msg[3]).b } },
            ];
        }
    } else {
        if( i === 2){
            text_field_props.characters = "0." + msg[5] + "(" + msg[5] + "ms)";
        }
        if( i === 3){
            text_field_props.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({family: "Inter", style: "Bold" });
            text_field_props.characters = "" + msg[3] + "";
            text_field_props.fills = [
                { type: "SOLID", color: { r: getTableCurveColor(msg[3]).r, g: getTableCurveColor(msg[3]).g, b: getTableCurveColor(msg[3]).b } },
            ];
        }
    }
}