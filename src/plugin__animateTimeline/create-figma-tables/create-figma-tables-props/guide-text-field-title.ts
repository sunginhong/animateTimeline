("use strict");

import { getTableCurveColor } from "./guide-text-curves-color"

const boldCollection = figma.variables.createVariableCollection("new-boldCollection");
const boldModeId = boldCollection.modes[0].modeId;
const boldFontStyle = figma.variables.createVariable("fontFamily", boldCollection, "STRING");
boldFontStyle.setValueForMode(boldModeId, "Bold");

export const createTextFieldTitle = async ({parents, index, value, i, msg, delayBool}) => {
    const textFieldTitle = figma.createText();
    textFieldTitle.name = "TextFieldTitle" + index;
    textFieldTitle.setBoundVariable("fontStyle", boldFontStyle);
    await figma.loadFontAsync({family: "Inter", style: "Bold" });
    textFieldTitle.characters = "" + value + ":";
    textFieldTitle.textAlignHorizontal = "CENTER";
    textFieldTitle.textAlignVertical = "CENTER";
    textFieldTitle.layoutAlign = "CENTER";
    textFieldTitle.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    textFieldTitle.fontSize = 14;
    textFieldTitle.lineHeight = { value: 25.2, unit: "PIXELS" };
    textFieldTitle.fills = [
        { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
    ];
    parents.appendChild(textFieldTitle);

    try {
        await figma.loadFontAsync({
            family: 'Inter',
            style: 'Regular'
        });
    } catch(err) {
        console.error(`Error: ${err}`);
    }

    const textFieldProps = figma.createText();
    textFieldProps.fontName = {
        family: 'Inter',
        style: 'Regular'
    };
    textFieldProps.name = "TextFieldProps" + index;
    textFieldProps.textAlignHorizontal = "CENTER";
    textFieldProps.textAlignVertical = "CENTER";
    textFieldProps.layoutAlign = "CENTER";
    textFieldProps.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    textFieldProps.fontSize = 14;
    textFieldProps.lineHeight = { value: 25.2, unit: "PIXELS" };
    textFieldProps.fills = [
        { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
    ];
    parents.appendChild(textFieldProps);
    
    if (i === 0) {
        textFieldProps.characters = "가나다라가나다라가나다라가나다라가나다라가나다라";
    }
    if (i === 1) {
        const seconds = (msg[4] / 1000).toFixed(2);
        textFieldProps.characters = `${seconds}s (${msg[4]}ms)`;
    }
    if (!delayBool) {
        if (i === 2) {
            textFieldProps.setBoundVariable("fontStyle", boldFontStyle);
            await figma.loadFontAsync({family: "Inter", style: "Bold" });
            textFieldProps.characters = "" + msg[3] + "";
            textFieldProps.fills = [
                { type: "SOLID", color: { r: getTableCurveColor(msg[3]).r, g: getTableCurveColor(msg[3]).g, b: getTableCurveColor(msg[3]).b } },
            ];
        }
    } else {
        if (i === 2) {
            const seconds = (msg[5] / 1000).toFixed(2);
            textFieldProps.characters = `${seconds}s (${msg[5]}ms)`;
        }
        if (i === 3) {
            textFieldProps.setBoundVariable("fontStyle", boldFontStyle);
            await figma.loadFontAsync({family: "Inter", style: "Bold" });
            textFieldProps.characters = "" + msg[3] + "";
            textFieldProps.fills = [
                { type: "SOLID", color: { r: getTableCurveColor(msg[3]).r, g: getTableCurveColor(msg[3]).g, b: getTableCurveColor(msg[3]).b } },
            ];
        }
    }
}
