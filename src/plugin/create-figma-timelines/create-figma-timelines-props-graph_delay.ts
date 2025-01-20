"use strict";

import { getTimeLinesHeight } from "./create-figma-timelines-props/guide-timelinesHeight";
import { createGuideTimelineLineDuration } from "./create-figma-timelines-props/guide-timelines-style-type-line-duration"
import { createGuideTimelineLineDelay } from "./create-figma-timelines-props/guide-timelines-style-type-line-delay"

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineGraphDelay = ({ parent, msg, index, delayChecked, styleChecked }) => {
    let rectWidth = 0;
    const rectHeight = getTimeLinesHeight();
    const durationArray = [];
    const bgColor = {r: 240/255, g: 240/255, b: 240/255 };
    const strokeColor = {r: 184/255, g: 184/255, b: 184/255 };
    const bgColorArr = [];
    const strokeColorArr = [];

    msg.newChecked.forEach((values, i) => {
        durationArray.push(msg.newChecked[i][5]);
        bgColorArr.push(bgColor)
        strokeColorArr.push(bgColor)
    });

    rectWidth = msg.adWidth / 10;

    const rectDelay = figma.createFrame();
    rectDelay.name = "rectDelay " + index;
    rectDelay.cornerRadius = 100;
    rectDelay.layoutMode = "VERTICAL";
    rectDelay.primaryAxisSizingMode = "AUTO";
    rectDelay.counterAxisSizingMode = "AUTO";
    rectDelay.primaryAxisAlignItems = "CENTER";
    rectDelay.counterAxisAlignItems = "CENTER";
    rectDelay.x = 0;
    rectDelay.paddingTop = 6;
    rectDelay.paddingBottom = 6;
    rectDelay.clipsContent = false;
    parent.appendChild(rectDelay);

    if(parseInt(durationArray[index]) >= 0 && parseInt(durationArray[index]) < 10){
        rectDelay.resize(parseInt(numberToString(durationArray[index])[0])*rectWidth/10, rectHeight);
    } else if(parseInt(durationArray[index]) >= 10 && parseInt(durationArray[index]) < 100){
        rectDelay.resize(parseInt(numberToString(durationArray[index])[0])*rectWidth, rectHeight);
    }else if(parseInt(durationArray[index]) >= 100 && parseInt(durationArray[index]) < 1000){
        rectDelay.resize(parseInt(numberToString(durationArray[index])[0] + numberToString(durationArray[index])[1])*rectWidth, rectHeight);
    } else if(parseInt(durationArray[index]) >= 1000 && parseInt(durationArray[index]) < 10000){
        rectDelay.resize(parseInt(numberToString(durationArray[index])[0] + numberToString(durationArray[index])[1] + numberToString(durationArray[index])[2])*rectWidth, rectHeight);
    } 

    const fillVisible = delayChecked && !styleChecked;
    const strokeVisible = delayChecked && !styleChecked;

    rectDelay.fills = [
        {
            type: "SOLID",
            color: { r: bgColor.r, g: bgColor.g, b: bgColor.b },
            visible: fillVisible,
        }
    ];
    rectDelay.strokes = [
        {
            type: "SOLID",
            color: { r: strokeColor.r, g: strokeColor.g, b: strokeColor.b },
            visible: strokeVisible,
        }
    ];

    if (delayChecked && styleChecked) {
        createGuideTimelineLineDelay({ parents: rectDelay, index, strokeColor });
    }
}

function numberToString(n) {
    return (n + "").split("");
}