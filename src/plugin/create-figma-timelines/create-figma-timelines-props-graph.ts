"use strict";

import { getGraphCurveColor } from "./create-figma-timelines-props/guide-graph-curves-color";

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineGraph = ({ parent, msg, index }) => {
    let durationFirst = 0;
    let durationSecond = 0;
    let durationThird = 0;
    let durationFourth = 0;
    let rectWidth = 0;
    const rectHeight = 24;
    let durationLength = 0;
    const selectedEasing = msg.newChecked[3];
    const durationFirstArr = [];
    const durationSecondArr = [];
    const durationThirdArr = [];
    const durationFourthArr = [];
    const fillColorArr = [];
    const strokeColorArr = [];

    const durationArray = [];

    msg.newChecked.forEach((values, i) => {
        durationArray.push(msg.newChecked[i][4]);
    });

    const maxDuration = Math.max(...durationArray);

    msg.newChecked.forEach((value, i) => {
        durationLength = value[4].length;
        fillColorArr.push(getGraphCurveColor(msg.newChecked[index][3]).bgColor);
        strokeColorArr.push(getGraphCurveColor(msg.newChecked[index][3]).lineColor);

        if (durationLength === 1) {
            durationFirst = value[4];
            durationFirstArr.push(durationFirst);
        } else if (durationLength === 2) {
            durationFirst = value[4].slice(0, -1);
            durationSecond = value[4].slice(-1);
            durationFirstArr.push(durationFirst);
            durationSecondArr.push(durationSecond);
        } else if (durationLength === 3) {
            durationFirst = value[4].slice(0, 1);
            durationSecond = value[4].slice(1, 2);
            durationThird = value[4].slice(2, 3);
            durationFirstArr.push(durationFirst);
            durationSecondArr.push(durationSecond);
            durationThirdArr.push(durationThird);
        } else if (durationLength === 4) {
            durationFirst = value[4].slice(0, 1);
            durationSecond = value[4].slice(1, 2);
            durationThird = value[4].slice(2, 3);
            durationFourth = value[4].slice(3, 4);
            durationFirstArr.push(durationFirst);
            durationSecondArr.push(durationSecond);
            durationThirdArr.push(durationThird);
            durationFourthArr.push(durationFourth);
        }
    });
    rectWidth = msg.adWidth / 10;

    // console.log(Math.abs(maxDuration / 100), durationArray)

    const rectDuration = figma.createFrame();
    rectDuration.name = "rectDuration " + index;
    rectDuration.cornerRadius = 100;
    rectDuration.layoutMode = "VERTICAL";
    rectDuration.primaryAxisSizingMode = "AUTO";
    rectDuration.counterAxisSizingMode = "AUTO";
    rectDuration.primaryAxisAlignItems = "MIN";
    rectDuration.counterAxisAlignItems = "MIN";
    rectDuration.x = 0;
    rectDuration.paddingTop = 6;
    rectDuration.paddingBottom = 6;
    parent.appendChild(rectDuration);

    if(parseInt(durationArray[index]) >= 0 && parseInt(durationArray[index]) < 100){
        rectDuration.resize(parseInt(numberToString(durationArray[index])[0])*rectWidth, rectHeight);
    } else if(parseInt(durationArray[index]) >= 100 && parseInt(durationArray[index]) < 1000){
        rectDuration.resize(parseInt(numberToString(durationArray[index])[0] + numberToString(durationArray[index])[1])*rectWidth, rectHeight);
    } else if(parseInt(durationArray[index]) >= 1000 && parseInt(durationArray[index]) < 10000){
        rectDuration.resize(parseInt(numberToString(durationArray[index])[0] + numberToString(durationArray[index])[1] + numberToString(durationArray[index])[2])*rectWidth, rectHeight);
    } 

    // const rectDuration = figma.createFrame();
    // rectDuration.name = "rectDuration " + index;
    // rectDuration.cornerRadius = 100;
    // rectDuration.layoutMode = "VERTICAL";
    // rectDuration.primaryAxisSizingMode = "AUTO";
    // rectDuration.counterAxisSizingMode = "AUTO";
    // rectDuration.primaryAxisAlignItems = "MIN";
    // rectDuration.counterAxisAlignItems = "MIN";
    // rectDuration.paddingTop = 6;
    // rectDuration.paddingBottom = 6;

    // if (durationLength === 1) {
    //     rectDuration.resize(durationFirstArr[index], rectHeight);
    // } else if (durationLength === 2) {
    //     rectDuration.resize(rectWidth * durationFirstArr[index], rectHeight);
    // } else if (durationLength === 3) {
    //     rectDuration.resize(rectWidth * (durationFirstArr[index] + durationSecondArr[index]), rectHeight);
    // } else if (durationLength === 4) {
    //     rectDuration.resize(rectWidth * (durationFirstArr[index] + durationSecondArr[index] + durationThirdArr[index]), rectHeight);
    // }
    createGraphLabels({ item: rectDuration, index: index, fillColorArr: fillColorArr, strokeColorArr: strokeColorArr });
    // parent.appendChild(rectDuration);
}

function createGraphLabels({ item, index, fillColorArr, strokeColorArr }) {
    item.fills = [
        {
            type: "SOLID",
            color: { r: fillColorArr[index].r, g: fillColorArr[index].g, b: fillColorArr[index].b },
            visible: true,
        }
    ];
    item.strokes = [
        {
            type: "SOLID",
            color: { r: strokeColorArr[index].r, g: strokeColorArr[index].g, b: strokeColorArr[index].b },
            visible: true,
        }
    ];
}

function numberToString(n) {
    return (n + "").split("");
}