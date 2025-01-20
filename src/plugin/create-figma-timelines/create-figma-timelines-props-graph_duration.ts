"use strict";

import { getTimeLinesHeight } from "./create-figma-timelines-props/guide-timelinesHeight";
import { getGraphCurveColor } from "./create-figma-timelines-props/guide-graph-curves-color";
import { guideTimelinesStyleColors_Line } from "./create-figma-timelines-props/guide-timelines-style-line";
import { createGuideTimelineLineDuration } from "./create-figma-timelines-props/guide-timelines-style-type-line-duration"

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineGraphDuration = ({ parent, msg, index, styleChecked }) => {
    let rectWidth = 0;
    const rectHeight = getTimeLinesHeight();
    const fillColorArr = [];
    const strokeColorArr = [];
    const durationArray = [];

    msg.newChecked.forEach((values, i) => {
        durationArray.push(msg.newChecked[i][4]);
    });

    msg.newChecked.forEach((value, i) => {
        fillColorArr.push(getGraphCurveColor(msg.newChecked[index][3]).bgColor);
        strokeColorArr.push(getGraphCurveColor(msg.newChecked[index][3]).lineColor);
    });
    rectWidth = msg.adWidth / 10;

    const rectDuration = figma.createFrame();
    rectDuration.name = "rectDuration " + index;
    rectDuration.cornerRadius = 100;
    rectDuration.layoutMode = "VERTICAL";
    rectDuration.primaryAxisSizingMode = "AUTO";
    rectDuration.counterAxisSizingMode = "AUTO";
    rectDuration.primaryAxisAlignItems = "CENTER";
    rectDuration.counterAxisAlignItems = "CENTER";
    rectDuration.x = 0;
    rectDuration.paddingTop = 6;
    rectDuration.paddingBottom = 6;
    rectDuration.clipsContent = false;
    parent.appendChild(rectDuration);

    if(parseInt(durationArray[index]) >= 0 && parseInt(durationArray[index]) < 10){
        rectDuration.resize(parseInt(numberToString(durationArray[index])[0])*rectWidth/10, rectHeight);
    } else if(parseInt(durationArray[index]) >= 10 && parseInt(durationArray[index]) < 100){
        rectDuration.resize(parseInt(numberToString(durationArray[index])[0])*rectWidth, rectHeight);
    } else if(parseInt(durationArray[index]) >= 100 && parseInt(durationArray[index]) < 1000){
        rectDuration.resize(parseInt(numberToString(durationArray[index])[0] + numberToString(durationArray[index])[1])*rectWidth, rectHeight);
    } else if(parseInt(durationArray[index]) >= 1000 && parseInt(durationArray[index]) < 10000){
        rectDuration.resize(parseInt(numberToString(durationArray[index])[0] + numberToString(durationArray[index])[1] + numberToString(durationArray[index])[2])*rectWidth, rectHeight);
    } 

    if ( !styleChecked ){
        guideTimelinesStyleColors_Line({ item: rectDuration, visBool: true, index: index, fillColorArr: fillColorArr, strokeColorArr: strokeColorArr });
    } else {
        guideTimelinesStyleColors_Line({ item: rectDuration, visBool: false, index: index, fillColorArr: fillColorArr, strokeColorArr: strokeColorArr });
        createGuideTimelineLineDuration({parents: rectDuration, index, fillColorArr, strokeColorArr});
    }
}

function numberToString(n) {
    return (n + "").split("");
}