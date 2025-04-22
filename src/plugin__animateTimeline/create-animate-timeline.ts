("use strict");

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

const collectionRegular  = figma.variables.createVariableCollection("new-collection2");
const modeIdRegular  = collectionRegular.modes[0].modeId;
const fontStyleRegular = figma.variables.createVariable("fontFamily", collectionRegular, "STRING");
fontStyleRegular.setValueForMode(modeIdRegular, "regular");

import { createDurationTypeFace } from './animate-timeline/create-duration-type-face';
import { createDurationTypeLine } from './animate-timeline/create-duration-type-line';
import { createDelayTypeFace } from './animate-timeline/create-delay-type-face';
import { createDelayTypeLine } from './animate-timeline/create-delay-type-line';

export let tableCellArr_label = new Array;
export let tableCellArr_specs = new Array;
export let tableCellArr_props = new Array;
export let tableSpecsTitleArr = new Array;
export let tableSpecPropssArr = new Array;

export const animate_timeline = (msg) => {
    /// Timeline
    let frameSize = { width: 100, height: 100 };
    var itemWidth = 1;
    
    if (msg.tlWidth > 1) {
        itemWidth = msg.tlWidth;
    } else {
        itemWidth = 52;
    }
    var zoomRate = 1;
    if (msg.zoomBool) {
    zoomRate = 2;
    } else {
    zoomRate = 1;
    }
    var tlBottomMargin = 16;
    var paddingLeftRight = 36;
    var setCounts = 0;
    var arrCounts = [];
    var specWidths = [];
    var specWidthsRows = [];
    var tlMarginTop = 12;
    var blockHeight = 24;
    var blockMarginBottom = 12;
    var labelBlockWidth = 42;

    var specBlockMargin = 4;
    var blockMarginRight = 19;
    var nodesBlocks = [];
    var delayPosArr = [];
    var durationLength = msg.durations.length;
    var tlBlockPropsArr = new Array;
    let tbRound = 12;

    var maxArr = [];
    var maxSpecCnt = 1;
    var tlBlockProps = {
    bgColor: { r: 0 / 255, g: 0 / 255, b: 0 / 255 },
    lineColor: { r: 0 / 255, g: 0 / 255, b: 0 / 255 },
    };

    for (let i = 0; i < durationLength; i++) {
        arrCounts.push(msg.durations[i] + msg.delays[i]);
        maxArr.push(msg.specs[i].length);
        msg.specs[i].forEach((values, k) => {
            specWidths.push(msg.specs[i][k][1])
            specWidthsRows[k] = msg.specs[i][k][1]
            // console.log(specWidths)
        })
    }

    maxSpecCnt = Math.max.apply(null, maxArr);
    var max = Math.max.apply(null, arrCounts);

    if (!msg.fitBool) {
    setCounts = (Math.round(max / 100) + 2) / zoomRate;
    } else {
    setCounts = (Math.round(max / 100) + 1) / zoomRate;
    }

    var specBlockWidth = Math.max.apply(null, specWidths);

    const collection = figma.variables.createVariableCollection("new-collection");
    const modeId = collection.modes[0].modeId;
    const fontStyleBold = figma.variables.createVariable("fontFamily", collection, "STRING");
    fontStyleBold.setValueForMode(modeId, "Bold");

    getSpecWidth(msg);

    function tlColorCheck(eases) {
    let valOptEasing = [
        "Ease-Standard",
        "EaseOut",
        "EaseOut level 1",
        "EaseIn",
        "EaseInOut",
        "Spring",
        "Spring level 1",
        "Spring level 2",
        "Linear",
    ];
    switch (eases) {
        case valOptEasing[0]:
        tlBlockProps = {
            bgColor: { r: 179 / 255, g: 238 / 255, b: 205 / 255 },
            lineColor: { r: 96 / 255, g: 204 / 255, b: 158 / 255 },
        };
        break;
        case valOptEasing[1]:
        tlBlockProps = {
            bgColor: { r: 237 / 255, g: 193 / 255, b: 255 / 255 },
            lineColor: { r: 197 / 255, g: 111 / 255, b: 231 / 255 },
        };
        break;
        case valOptEasing[2]:
        tlBlockProps = {
            bgColor: { r: 237 / 255, g: 193 / 255, b: 255 / 255 },
            lineColor: { r: 197 / 255, g: 111 / 255, b: 231 / 255 },
        };
        break;
        case valOptEasing[3]:
        tlBlockProps = {
            bgColor: { r: 255 / 255, g: 212 / 255, b: 172 / 255 },
            lineColor: { r: 245 / 255, g: 156 / 255, b: 74 / 255 },
        };
        break;
        case valOptEasing[4]:
        tlBlockProps = {
            bgColor: { r: 255 / 255, g: 186 / 255, b: 191 / 255 },
            lineColor: { r: 230 / 255, g: 87 / 255, b: 98 / 255 },
        };
        break;
        case valOptEasing[5]:
        tlBlockProps = {
            bgColor: { r: 180 / 255, g: 215 / 255, b: 255 / 255 },
            lineColor: { r: 96 / 255, g: 162 / 255, b: 237 / 255 },
        };
        break;
        case valOptEasing[6]:
        tlBlockProps = {
            bgColor: { r: 180 / 255, g: 215 / 255, b: 255 / 255 },
            lineColor: { r: 96 / 255, g: 162 / 255, b: 237 / 255 },
        };
        break;
        case valOptEasing[7]:
        tlBlockProps = {
            bgColor: { r: 180 / 255, g: 215 / 255, b: 255 / 255 },
            lineColor: { r: 96 / 255, g: 162 / 255, b: 237 / 255 },
        };
        case valOptEasing[8]:
        tlBlockProps = {
            bgColor: { r: 185 / 255, g: 196 / 255, b: 220 / 255 },
            lineColor: { r: 116 / 255, g: 130 / 255, b: 170 / 255 },
        };
        break;
    }
    return;
    }

    var propsWidth = paddingLeftRight +
    labelBlockWidth +
    blockMarginRight + specWidthsRows.reduce((a,b) => (a+b)) + 
    labelBlockWidth +
    specBlockMargin;

    const frameHeight =
    durationLength * (blockHeight + blockMarginBottom) +
    tlMarginTop +
    tlBottomMargin +
    blockMarginBottom;

    const frame_parents = figma.createComponent();
    frame_parents.name = "frame_parents";
    frame_parents.x = 0;
    frame_parents.y = 0;
    frame_parents.clipsContent = false
    frame_parents.fills = [
    {
        type: "SOLID",
        color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
        visible: false,
    },
    ];
    frame_parents.clipsContent = false;
    
    const frame_tl = figma.createFrame();
    frame_tl.name = "frame_tl";
    frame_tl.x = 0;
    frame_tl.y = 0;
    frame_tl.fills = [
    {
        type: "SOLID",
        color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
        visible: false,
    },
    ];
    frame_tl.clipsContent = false;
    frame_parents.appendChild(frame_tl)
    if (!msg.fitBool) {
    frame_tl.resize(propsWidth + itemWidth * setCounts, frameHeight);
    } else {
    frame_tl.resize(propsWidth + itemWidth * setCounts - itemWidth, frameHeight);
    }

    /// labels
    const propsParents = figma.createFrame();
    propsParents.name = "propsParents";
    propsParents.x = 0;
    propsParents.y = 0;
    propsParents.resize(propsWidth, frameHeight);
    propsParents.fills = [
    {
        type: "SOLID",
        color: { r: 247 / 255, g: 247 / 255, b: 247 / 255 },
        visible: true,
    },
    ];
    propsParents.clipsContent = false;
    frame_tl.appendChild(propsParents);

    msg.labels.forEach((values, i) => {
    const labelsSpecsGroup = figma.createFrame();
    labelsSpecsGroup.name = "labelsSpecsGroup " + i;
    labelsSpecsGroup.x = 0;
    labelsSpecsGroup.y = i * (blockHeight + blockMarginBottom) + tlMarginTop;
    labelsSpecsGroup.resize(propsWidth, blockHeight);
    labelsSpecsGroup.fills = [
        {
        type: "SOLID",
        color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
        visible: false,
        },
    ];
    labelsSpecsGroup.clipsContent = false;
    propsParents.appendChild(labelsSpecsGroup);

    const labelBlock = figma.createFrame();
    labelBlock.name = "labelBlock " + i;
    labelBlock.x = 0;
    labelBlock.y = 2;
    // labelBlock.resize(labelBlockWidth, 20);
    labelBlock.layoutAlign = "CENTER";
    labelBlock.fills = [
        { type: "SOLID", color: { r: 217 / 255, g: 247 / 255, b: 230 / 255 } },
    ];
    labelBlock.cornerRadius = 100;
    labelBlock.clipsContent = false;
    labelBlock.layoutMode = 'HORIZONTAL';
    
    if(numberToString(msg.labels[i]).length > 3){
        labelBlock.layoutSizingVertical = 'HUG';
        labelBlock.primaryAxisAlignItems = 'CENTER';
        labelBlock.counterAxisAlignItems = 'CENTER';
        labelBlock.paddingLeft = 8.5;
        labelBlock.paddingRight = 8.5;
        labelBlock.paddingTop = 5;
        labelBlock.paddingBottom = 5;
    } else {
        labelBlock.resize(labelBlockWidth, 20);
    }
    labelsSpecsGroup.appendChild(labelBlock);

    (async () => {
        const labelText = figma.createText();
        labelText.name = "labelText " + i;
        labelText.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({family: "Inter", style: "Bold" });
        if (i < setCounts) {
        labelText.characters = "" + msg.labels[i] + "";
        } else {
        labelText.characters = "" + msg.labels[i] + "";
        }
        // labelText.resize(labelBlockWidth, 20);
        if(numberToString(msg.labels[i]).length > 3){
        } else {
        labelText.resize(labelBlockWidth, 20);
        }
        labelText.textAlignHorizontal = "CENTER";
        labelText.textAlignVertical = "CENTER";
        labelText.fontSize = 10;
        labelText.fills = [
        { type: "SOLID", color: { r: 3 / 255, g: 169 / 255, b: 77 / 255 } },
        ];
        labelBlock.appendChild(labelText);
    })();

    const specBlock = figma.createFrame();
    specBlock.name = "specBlock " + i;
    specBlock.x = labelBlockWidth + paddingLeftRight + blockMarginRight;
    specBlock.y = 0;
    var blockWidthN = 1;
    if (
        msg.specs[i].length * (specBlockWidth + specBlockMargin) -
        specBlockMargin >
        10
    ) {
        blockWidthN =
        msg.specs[i].length * (specBlockWidth + specBlockMargin) -
        specBlockMargin;
    } else {
        blockWidthN = 10 * (specBlockWidth + specBlockMargin) - specBlockMargin;
    }
    if (blockWidthN > 0) {
        specBlock.resize(blockWidthN, blockHeight);
    } else {
        specBlock.resize(52, blockHeight);
    }
    // console.log(blockWidthN, msg.specs[i].length)
    specBlock.fills = [
        {
        type: "SOLID",
        color: { r: 217 / 255, g: 247 / 255, b: 0 / 255 },
        visible: false,
        },
    ];
    specBlock.clipsContent = false;
    labelsSpecsGroup.appendChild(specBlock);
    let itemPosX = 0;
    var specRectWidth = 0;

    msg.specs[i].forEach((values, k) => {
        const specRect = figma.createFrame();

        specRectWidth = msg.specs[i][k][1];
        if (specRectWidth > 1) {
        specRectWidth = msg.specs[i][k][1];
        } else {
        specRectWidth = 52;
        }

        specRect.name = "specRect " + i + "_" + k;
        specRect.x = itemPosX;
        specRect.y = 0;
        if (msg.specs[i][k][1] > 10) {
            specRect.resize(msg.specs[i][k][1], blockHeight);
        } else {
            specRect.resize(52, blockHeight);
        }
        specRect.fills = [
        {
            type: "SOLID",
            color: { r: 217 / 255, g: 247 / 255, b: 230 / 255 },
        },
        ];
        specRect.cornerRadius = 100;
        specRect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        specRect.layoutAlign = "CENTER";
        specBlock.appendChild(specRect);
        itemPosX += specRectWidth + specBlockMargin;

        (async () => {
        const specText = figma.createText();
        specText.name = "specText " + i + "_" + k;
        specText.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({family: "Inter", style: "Bold" });
        if (k < setCounts) {
            specText.characters = "" + msg.specs[i][k][0] + "";
            
        } else {
            specText.characters = "" + msg.specs[i][k][0] + "";
        }
        specText.resize(msg.specs[i][k][1], blockHeight);
        specText.textAlignHorizontal = "CENTER";
        specText.textAlignVertical = "CENTER";
        specText.textAutoResize = "WIDTH_AND_HEIGHT";
        specText.fontSize = 10;
        specText.layoutAlign = "CENTER";
        specText.fills = [
            { type: "SOLID", color: { r: 3 / 255, g: 169 / 255, b: 77 / 255 } },
        ];
        specText.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        specRect.appendChild(specText);
        })();
    });
    });
    /// TimeLines
    const tlParents = figma.createFrame();
    tlParents.name = "tlParents";
    tlParents.x = propsWidth;
    tlParents.y = 0;
    tlParents.resize(itemWidth * setCounts, frameHeight);
    tlParents.fills = [
    {
        type: "SOLID",
        color: { r: 247 / 255, g: 247 / 255, b: 247 / 255 },
        visible: true,
    },
    ];
    tlParents.clipsContent = false;
    frame_tl.appendChild(tlParents);

    const tlRectGroup = figma.createFrame();
    tlRectGroup.name = "tlRectGroup";
    tlRectGroup.x = 0;
    tlRectGroup.y = 0;
    tlRectGroup.resize(frameSize.width, frameHeight);
    tlRectGroup.clipsContent = false;
    tlRectGroup.fills = [
    {
        type: "SOLID",
        color: { r: 201 / 255, g: 201 / 255, b: 201 / 255 },
        visible: false,
    },
    ];
    tlParents.appendChild(tlRectGroup);

    const nodesTimeline = [];
    for (let i = 0; i < setCounts; i++) {
    const tlRect = figma.createRectangle();
    tlRect.name = "tlRect " + i;
    tlRect.x = i * itemWidth;
    tlRect.y = 0;
    tlRect.resize(
        1,
        durationLength * (blockHeight + blockMarginBottom) +
        tlMarginTop +
        blockMarginBottom
    );
    tlRect.fills = [
        { type: "SOLID", color: { r: 201 / 255, g: 201 / 255, b: 201 / 255 } },
    ];
    tlRectGroup.appendChild(tlRect);
    nodesTimeline.push(tlRect);

    const timeTextParent = figma.createFrame();
    timeTextParent.name = "timeTextParent " + i;
    timeTextParent.x = i * itemWidth - itemWidth / 2;
    timeTextParent.y =
        durationLength * (blockHeight + blockMarginBottom) +
        tlMarginTop +
        blockMarginBottom;
    timeTextParent.resize(itemWidth, tlBottomMargin);
    timeTextParent.fills = [
        {
        type: "SOLID",
        color: { r: 255 / 255, g: 0 / 255, b: 201 / 255 },
        visible: false,
        },
    ];
    tlRectGroup.appendChild(timeTextParent);
    nodesTimeline.push(timeTextParent);

    (async () => {
        const timeText = figma.createText();
        timeTextParent.name = "timeTextParent " + i;
        timeText.setBoundVariable("fontStyle", fontStyleRegular);
        await figma.loadFontAsync({family: "Inter", style: "Regular" });
        if (!msg.zoomBool) {
        if (i < 10) {
            timeText.characters = "0." + i + "s";
        } else {
            timeText.characters =
            "" + numberToString(i)[0] + "." + numberToString(i)[1] + "s";
        }
        } else {
        if (i < 5) {
            timeText.characters = "0." + i * 2 + "s";
        }
        if (i >= 5) {
            timeText.characters =
            numberToString(i * 2)[0] + "." + numberToString(i * 2)[1] + "s";
        }
        }

        timeText.resize(itemWidth, tlBottomMargin);
        timeText.fontSize = 10;
        timeText.lineHeight = {value: 16, unit: "PIXELS"};
        timeText.textAlignHorizontal = "CENTER";
        timeText.textAlignVertical = "CENTER";
        timeText.fills = [
        {
            type: "SOLID",
            color: { r: 163 / 255, g: 163 / 255, b: 163 / 255 },
        },
        ];
        timeTextParent.appendChild(timeText);
    })();
    }

    for (let i = 0; i < durationLength; i++) {
        tlColorCheck(msg.eases[i]);
        tlBlockPropsArr.push(tlBlockProps.lineColor)

        const rectBlock = figma.createFrame();
        rectBlock.name = "rectBlock " + i;
        rectBlock.x = 0;
        rectBlock.y = i * (blockHeight + blockMarginBottom) + tlMarginTop;

        if (
            (itemWidth / zoomRate) * (msg.durations[i] / 100) +
            (itemWidth / zoomRate) * (msg.delays[i] / 100) >=
            0.01
        ) {
            rectBlock.resize(
            (itemWidth / zoomRate) * (msg.durations[i] / 100) +
                (itemWidth / zoomRate) * (msg.delays[i] / 100),
            blockHeight
            );
        }

        rectBlock.fills = [
            {
            type: "SOLID",
            color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
            visible: false,
            },
        ];
        if(msg.designType === "Face"){
            rectBlock.clipsContent = true;
        }
        if(msg.designType === "Line"){
            rectBlock.clipsContent = false;
        }
        tlParents.appendChild(rectBlock);
        nodesBlocks.push(rectBlock);

        if (msg.delayVis[i]) {
            if (msg.delays[i] >= 0.01) {
            rowHeight = 115+100;
            const rectDealay = figma.createFrame();
            rectDealay.clipsContent = false;
            rectDealay.name = "rectDealay " + i;
            if (numberToString(msg.delays[i]).length <= 3) {
            
                rectDealay.x = 0;
                rectDealay.y = 0;
                rectDealay.resize(
                (itemWidth * (msg.delays[i] / 100)) / zoomRate,
                blockHeight
                );
                rectDealay.fills = [{ type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },  visible: false,},];
                rectBlock.appendChild(rectDealay);

                if (parseInt(msg.delays[i]) >= 100) {
                    for (let k = 0; k < numberToString(delayPosArr[i]).length; k++) {
                        if (k == 0) {
                            for (let j = 0; j < parseInt(numberToString(msg.delays[i])[k]); j++) {
                                if(msg.designType === "Face"){
                                    const delayRect_Face =  new createDelayTypeFace({delayState: "Nor", parent: rectDealay, index: i, k: k, j: j, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});   
                                }
                                if(msg.designType === "Line"){
                                    const delayRect_Line =  new createDelayTypeLine({delayState: "Nor", parent: rectDealay, index: i, k: k, j: j, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});
                                }
                            
                            }
                        }
                    }
                } else {
                    if(msg.designType === "Face"){
                        const delayRect_Face =  new createDelayTypeFace({delayState: "Ex1", parent: rectDealay, index: i, k: 0, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});   
                    }
                    if(msg.designType === "Line"){
                        const delayRect_Line =  new createDelayTypeLine({delayState: "Ex1", parent: rectDealay, index: i, k: 0, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});
                    }
                }
                if ((itemWidth * parseInt(numberToString(msg.delays[i])[1])) / 10 / zoomRate >=0.01) {
                    if(msg.designType === "Face"){
                        const delayRect_Face =  new createDelayTypeFace({delayState: "Ex2", parent: rectDealay, index: i, k: 0, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});   
                    }
                    if(msg.designType === "Line"){
                        const delayRect_Line =  new createDelayTypeLine({delayState: "Ex2", parent: rectDealay, index: i, k: 0, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});
                    }
                }
            }

            if (numberToString(msg.delays[i]).length == 4) {
                if (
                parseInt(
                    numberToString(msg.delays[i])[0] +
                    numberToString(msg.delays[i])[1]
                ) >= 10
                ) {
                rectDealay.x = 0;
                rectDealay.y = 0;
                rectDealay.cornerRadius = 100;
                rectDealay.resize(
                    (itemWidth *
                    parseInt(
                        numberToString(msg.delays[i])[0] +
                        numberToString(msg.delays[i])[1]
                    ) +
                    (itemWidth * parseInt(numberToString(msg.delays[i])[2])) / 10) /
                    zoomRate,
                    blockHeight
                );
                rectDealay.fills = [{ type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },  visible: false,},];
                rectBlock.appendChild(rectDealay);

                for (
                    let k = 0;
                    k <
                    parseInt(
                    numberToString(msg.delays[i])[0] +
                        numberToString(msg.delays[i])[1]
                    );
                    k++
                ) {
                    if(msg.designType === "Face"){
                        const delayRect_Face =  new createDelayTypeFace({delayState: "Ex3_1", parent: rectDealay, index: i, k: k, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});   
                    }
                    if(msg.designType === "Line"){
                        const delayRect_Line =  new createDelayTypeLine({delayState: "Ex3_1", parent: rectDealay, index: i, k: k, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});
                    }
                }
                }
                if (
                (itemWidth * parseInt(numberToString(msg.delays[i])[1])) / 10 / zoomRate >=
                0.01
                ) {
                    // if(msg.designType === "Face"){
                    //     const delayRect_Face =  new createDelayTypeFace({delayState: "Ex3_2", parent: rectDealay, index: i, k: 0, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});   
                    // }
                    // if(msg.designType === "Line"){
                    //     const delayRect_Line =  new createDelayTypeLine({delayState: "Ex3_2", parent: rectDealay, index: i, k: 0, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});
                    // }
                }
                if (
                (itemWidth * parseInt(numberToString(msg.delays[i])[2])) / 10 / zoomRate >=
                0.01
                ) {
                    if(msg.designType === "Face"){
                        const delayRect_Face =  new createDelayTypeFace({delayState: "Ex3_3", parent: rectDealay, index: i, k: 0, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});   
                    }
                    if(msg.designType === "Line"){
                        const delayRect_Line =  new createDelayTypeLine({delayState: "Ex3_3", parent: rectDealay, index: i, k: 0, j: 0, delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight});
                    }
                }
            }
            }
        }

        if (numberToString(msg.delays[i]).length <= 3) {
            if (msg.durations[i] >= 0.01) {
                delayPosArr.push((itemWidth * (msg.delays[i] / 100)) / zoomRate);
                if(msg.designType === "Face"){
                    const durationRect_Face =  new createDurationTypeFace({delayState: "Nor", parent: rectBlock, index: i, durations: msg.durations[i], delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight, bgColor: tlBlockProps.bgColor, lineColor: tlBlockProps.lineColor});
                }
                if(msg.designType === "Line"){
                    const durationRect_Line =  new createDurationTypeLine({delayState: "Nor", parent: rectBlock, index: i, durations: msg.durations[i], delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight, bgColor: tlBlockProps.bgColor});
                }
            }
        }
        if (numberToString(msg.delays[i]).length == 4) {
            if (msg.durations[i] >= 0.01) {
                delayPosArr.push((itemWidth * (msg.delays[i] / 100)) / zoomRate);
                if(msg.designType === "Face"){
                    const durationRect_Face =  new createDurationTypeFace({delayState: "Ex4", parent: rectBlock, index: i, durations: msg.durations[i], delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight, bgColor: tlBlockProps.bgColor, lineColor: tlBlockProps.lineColor});
                }
            
                if(msg.designType === "Line"){
                    const durationRect_Line =  new createDurationTypeLine({delayState: "Ex4", parent: rectBlock, index: i, durations: msg.durations[i], delays: msg.delays[i], itemWidth: itemWidth, zoomRate: zoomRate, blockHeight: blockHeight, bgColor: tlBlockProps.bgColor});
                }
            }
        }
    }

    /// Table
    /// TAB CONTENTS
    let tbWidth = 120;
    let tableWidthArr = [{title: "Label", width: tbWidth}, {width: 1}, {title: "Action", width: tbWidth}, {width: 1}, {title: "Props", width: 350}]
    let tableWidth = 0;
    let tableTitleHeight = 42;
    let tableRowWidth = 120+1+120+1+350;
    var rowHeight = 115;
    let itemSpacing = 4;
    let rowHeightArr = new Array;
    let tableRowArr = new Array;

    const frame_table = figma.createFrame();
    frame_table.name = "frame_table";
    frame_table.x = 0;
    frame_table.y = frameHeight + 50;
    // frame_table.resize(tableRowWidth, tableTitleHeight + (rowHeight * msg.labels.length + 0 * msg.labels.length));
    // frame_table.cornerRadius = 12;
    // frame_table.constraints = { horizontal: "STRETCH", vertical: "MIN" };
    frame_table.layoutMode = 'VERTICAL';
    frame_table.counterAxisSizingMode = 'AUTO'

    frame_table.fills = [
    { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false, },
    ];
    frame_table.clipsContent = true;
    frame_parents.appendChild(frame_table);

    const tableRow_Label = figma.createFrame();
    tableRow_Label.name = "tableRow_Label";
    tableRow_Label.x = 0;
    tableRow_Label.resize(tableRowWidth, tableTitleHeight);
    tableRow_Label.clipsContent = false;
    tableRow_Label.constraints = { horizontal: "STRETCH", vertical: "MIN" };


    tableRow_Label.fills = [
    { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false, }, ];
    frame_table.appendChild(tableRow_Label);

    let itemPosX = 0;

    tableWidthArr.forEach((values, i) => {
    const tableFrame = figma.createFrame();
    tableFrame.x = itemPosX;
    tableFrame.y = 0;
    tableFrame.resize(tableWidthArr[i].width, tableTitleHeight);
    // tableFrame.clipsContent = false;
    tableFrame.layoutAlign = "CENTER";
    tableFrame.counterAxisSizingMode = 'AUTO'
    // tableFrame.constraints = { horizontal: "MIN", vertical: "STRETCH" };

    tableFrame.layoutPositioning = 'AUTO';
    tableFrame.clipsContent = false;
    tableFrame.layoutAlign = "CENTER";
    tableFrame.primaryAxisSizingMode ='AUTO'
    tableFrame.constraints = { horizontal: "MIN", vertical: "STRETCH" };

    if(i == tableWidthArr.length-1){
        tableFrame.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    }

    if( i > 0 && i < 4 ){
        tableFrame.strokes = [{ type: 'SOLID', color: { r: 201/255, g: 201/255, b: 201/255 } }]
        tableFrame.strokeLeftWeight = 0;
        tableFrame.strokeRightWeight = 0;
        tableFrame.strokeTopWeight = 1;
        tableFrame.strokeBottomWeight = 0;
    }
    if(i %2==0){
        tableFrame.name = "tableFrame-label";
        tableFrame.fills = [
        { type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 }, visible: true,}, ];
        if( i == 0){
        tableFrame.topLeftRadius = tbRound;
        tableFrame.strokes = [{ type: 'SOLID', color: { r: 201/255, g: 201/255, b: 201/255 } }]
        tableFrame.strokeLeftWeight = 1;
        tableFrame.strokeRightWeight = 0;
        tableFrame.strokeTopWeight = 1;
        tableFrame.strokeBottomWeight = 0;
        }
        if( i == 4){
        tableFrame.topRightRadius = tbRound;
        tableFrame.strokes = [{ type: 'SOLID', color: { r: 201/255, g: 201/255, b: 201/255 } }]
        tableFrame.strokeLeftWeight = 0;
        tableFrame.strokeRightWeight = 1;
        tableFrame.strokeTopWeight = 1;
        tableFrame.strokeBottomWeight = 0;
        }
    } else {
        tableFrame.name = "tableLabel-line";
        tableFrame.fills = [{ type: "SOLID", color: { r: 217 / 255, g: 217 / 255, b: 217 / 255 }, visible: true, }, ];
    }
    
    tableRow_Label.appendChild(tableFrame);
    itemPosX += tableWidthArr[i].width;

    (async () => {
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const tableLabel = figma.createText();
        // await figma.loadFontAsync(tableLabel.fontName);
        if(i %2==0){
        tableLabel.name = "tableLabel-" + tableWidthArr[i].title ;
        tableLabel.characters = "" + tableWidthArr[i].title + "";
        } else {
        tableLabel.remove();
        }
        tableLabel.setBoundVariable("fontStyle", fontStyleBold)
        tableLabel.resize(tableWidthArr[i].width, tableTitleHeight);
        tableLabel.textAlignHorizontal = "CENTER";
        tableLabel.textAlignVertical = "CENTER";
        tableLabel.textAutoResize = "WIDTH_AND_HEIGHT";
        tableLabel.fontSize = 10;
        tableLabel.lineHeight = {value: 130, unit: "PERCENT"};
        tableLabel.layoutAlign = "CENTER";
        tableLabel.fills = [ { type: "SOLID", color: { r: 0 / 255, g: 0 / 255, b: 0 / 255 } }, ];
        tableLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        tableFrame.appendChild(tableLabel);
    })();
    });
    /// GUIDE CONTENTS
    let tableCellArr_label = new Array;
    let tableCellArr_specs = new Array;
    let tableCellArr_props = new Array;
    let tableSpecsTitleArr = new Array;
    let tableSpecPropssArr = new Array;

    msg.specs.forEach((width, k) => {
    if(msg.delays[k] > 0){
        rowHeight = 115 + 25;
    } else {
        rowHeight = 115;
    }
    if( msg.specs[k].length < 2){
        rowHeightArr.splice(k, 0, rowHeight);
    } else {
        rowHeightArr.splice(k, 0, (rowHeight+50+blockHeight*msg.specs[k].length-1));
    }
    });
    msg.labels.forEach((width, k) => {
    const tableRow = figma.createFrame();
    tableRow.name = 'tableRow';
    tableRow.resize(tableRowWidth, rowHeightArr[k]);
    tableRow.layoutPositioning = 'AUTO';
    tableRow.clipsContent = false;
    tableRow.layoutAlign = "CENTER";
    tableRow.counterAxisSizingMode = 'AUTO'
    tableRow.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    tableRow.fills = [ { type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 }, visible: false, }, ];
    frame_table.appendChild(tableRow);
    let itemPosX = 0;

    if ( k < msg.specs.length-1){
        tableRow.strokes = [{ type: 'SOLID', color: { r: 201/255, g: 201/255, b: 201/255 } }]
        tableRow.strokeLeftWeight = 1;
        tableRow.strokeRightWeight = 1;
        tableRow.strokeTopWeight = 0;
        tableRow.strokeBottomWeight = 0;
    }

    tableWidthArr.forEach((width, i) => {
        const tableCell = figma.createFrame();
        tableCell.x = itemPosX;
        tableCell.y = 0;
        tableCell.resize(tableWidthArr[i].width, rowHeightArr[k]);
        tableCell.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        tableCell.strokes = [{ type: 'SOLID', color: { r: 240/255, g: 240/255, b: 240/255 } }]
        tableCell.strokeLeftWeight = 0;
        tableCell.strokeRightWeight = 0;
        tableCell.strokeTopWeight = 0;
        tableCell.strokeBottomWeight = 1;
        tableCell.layoutPositioning = 'AUTO';
        tableCell.clipsContent = false;
        tableCell.layoutAlign = "CENTER";
        tableCell.primaryAxisSizingMode ='AUTO'

        tableCell.constraints = { horizontal: "MIN", vertical: "STRETCH" };
        if(i == tableWidthArr.length-1){
        tableCell.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        }
        if( i == 0 ){
        tableCell.resize(tableWidthArr[i].width-1, rowHeightArr[k]);
        tableCell.x = 1;
        tableCellArr_label.push(tableCell);
        }
        if( i == 2 ){
        tableCellArr_specs.push(tableCell);
        }
        if( i == 4 ){
        tableCell.resize(tableWidthArr[i].width-1, rowHeightArr[k]);
        tableCellArr_props.push(tableCell);
        }
        
        if(k == msg.labels.length-1){
        tableCell.resize(tableWidthArr[i].width, rowHeightArr[k]);
        tableCell.x = itemPosX;
        if( i > 0 && i < 4 ){
            tableCell.strokes = [{ type: 'SOLID', color: { r: 201/255, g: 201/255, b: 201/255 } }]
            tableCell.strokeLeftWeight = 0;
            tableCell.strokeRightWeight = 0;
            tableCell.strokeTopWeight = 0;
            tableCell.strokeBottomWeight = 1;
        }
        } 
        if(i %2==0){
        // {console.log(rowHeightArr)}
        tableCell.name = "cell";
        tableCell.fills = [ { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: true, }, ];
        } else {
        tableCell.name = "line";
        tableCell.fills = [
            { type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 }, visible: true, },
        ];
        }
        if(msg.labels.length-1 == k){
        if( i == 0){
            tableCell.bottomLeftRadius = tbRound;
            tableCell.strokes = [{ type: 'SOLID', color: { r: 201/255, g: 201/255, b: 201/255 } }]
            tableCell.strokeLeftWeight = 1;
            tableCell.strokeRightWeight = 0;
            tableCell.strokeTopWeight = 0;
            tableCell.strokeBottomWeight = 1;
        }
        if( i == 4){
            tableCell.bottomRightRadius = tbRound;
            tableCell.strokes = [{ type: 'SOLID', color: { r: 201/255, g: 201/255, b: 201/255 } }]
            tableCell.strokeLeftWeight = 0;
            tableCell.strokeRightWeight = 1;
            tableCell.strokeTopWeight = 0;
            tableCell.strokeBottomWeight = 1;
        }
        }
        tableRow.appendChild(tableCell);
        itemPosX += tableWidthArr[i].width;
    });
    });

    tableCellArr_label.forEach((width, i) => {
    const labelBlockParents = figma.createFrame();
    labelBlockParents.name = "labelBlockParents";
    labelBlockParents.resize(tbWidth, rowHeightArr[i]);
    labelBlockParents.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    labelBlockParents.strokeLeftWeight = 0;
    labelBlockParents.strokeRightWeight = 0;
    labelBlockParents.strokeTopWeight = 0;
    labelBlockParents.strokeBottomWeight = 1;
    labelBlockParents.layoutPositioning = 'AUTO';
    labelBlockParents.clipsContent = false;
    labelBlockParents.layoutAlign = "CENTER";
    labelBlockParents.layoutMode = 'VERTICAL';
    labelBlockParents.primaryAxisAlignItems = 'CENTER';
    labelBlockParents.counterAxisAlignItems = 'CENTER';
    labelBlockParents.layoutSizingHorizontal = 'HUG';
    labelBlockParents.layoutSizingVertical = 'HUG';
    labelBlockParents.fills = [
        {
        type: "SOLID",
        color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
        visible: false,
        },
    ];
    tableCellArr_label[i].appendChild(labelBlockParents);

    const labelBlock = figma.createFrame();
    labelBlock.name = "labelBlock " + i;
    // labelBlock.resize(labelBlockWidth, 20);
    labelBlock.fills = [
        { type: "SOLID", color: { r: 217 / 255, g: 247 / 255, b: 230 / 255 } },
    ];
    labelBlock.cornerRadius = 100;
    labelBlock.clipsContent = false;
    labelBlock.layoutAlign = 'CENTER';
    // labelBlock.resize(labelBlockWidth, 20);
    labelBlock.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    labelBlock.strokeLeftWeight = 0;
    labelBlock.strokeRightWeight = 0;
    labelBlock.strokeTopWeight = 0;
    labelBlock.strokeBottomWeight = 1;
    labelBlock.clipsContent = false;
    labelBlock.layoutMode = 'HORIZONTAL';
    
    if(numberToString(msg.labels[i]).length > 3){
        labelBlock.layoutSizingVertical = 'HUG';
        labelBlock.primaryAxisAlignItems = 'CENTER';
        labelBlock.counterAxisAlignItems = 'CENTER';
        labelBlock.paddingLeft = 8.5;
        labelBlock.paddingRight = 8.5;
        labelBlock.paddingTop = 5;
        labelBlock.paddingBottom = 5;
    } else {
        labelBlock.resize(labelBlockWidth, 20);
    }
    labelBlockParents.appendChild(labelBlock);


    (async () => {
        const labelText = figma.createText();
        labelText.name = "labelText " + i;
        await figma.loadFontAsync({family: "Inter", style: "Bold" });
        labelText.characters = "" + msg.labels[i] + "";
        labelText.setBoundVariable("fontStyle", fontStyleBold);
        if(numberToString(msg.labels[i]).length > 3){
        } else {
        labelText.resize(labelBlockWidth, 20);
        }
        labelText.textAlignHorizontal = "CENTER";
        labelText.textAlignVertical = "CENTER";
        labelText.fontSize = 10;
        labelText.lineHeight = {value: 10, unit: "PIXELS"};
        labelText.fills = [
        { type: "SOLID", color: { r: 3 / 255, g: 169 / 255, b: 77 / 255 } },
        ];
        labelBlock.appendChild(labelText);
    })();
    /////
    const specBlockParents = figma.createFrame();
    specBlockParents.name = "specBlockParents";
    specBlockParents.resize(tbWidth, rowHeightArr[i]);
    specBlockParents.y = 0;
    specBlockParents.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    specBlockParents.strokeLeftWeight = 0;
    specBlockParents.strokeRightWeight = 0;
    specBlockParents.strokeTopWeight = 0;
    specBlockParents.strokeBottomWeight = 1;
    specBlockParents.clipsContent = false;
    specBlockParents.layoutMode = 'VERTICAL';
    specBlockParents.layoutSizingVertical = 'HUG';
    specBlockParents.primaryAxisAlignItems = 'CENTER';
    specBlockParents.counterAxisAlignItems = 'CENTER';
    specBlockParents.fills = [
        {
        type: "SOLID",
        color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
        visible: false,
        },
    ];
    tableCellArr_specs[i].appendChild(specBlockParents);

    const specBlock = figma.createFrame();
    
    specBlock.name = "specBlock " + i;
    specBlock.fills = [
        {
        type: "SOLID",
        color: { r: 217 / 255, g: 247 / 255, b: 0 / 255 },
        visible: false,
        },
    ];
    specBlock.clipsContent = false;
    specBlock.layoutMode = 'VERTICAL';
    specBlock.primaryAxisAlignItems = 'CENTER';
    specBlock.counterAxisAlignItems = 'CENTER';
    specBlock.layoutSizingHorizontal = 'HUG';
    specBlock.itemSpacing = itemSpacing;
    specBlockParents.appendChild(specBlock);
    
    var specRectWidth = 0;

    msg.specs[i].forEach((values, k) => {
        const specRect = figma.createFrame();

        specRectWidth = msg.specs[i][k][1];
        if (specRectWidth > 1) {
        specRectWidth = msg.specs[i][k][1];
        } else {
        specRectWidth = 52;
        }

        specRect.name = "specRect " + i + "_" + k;

        if (msg.specs[i][k][1] > 10) {
        specRect.resize(msg.specs[i][k][1], blockHeight);
        } else {
        specRect.resize(52, blockHeight);
        }
        specRect.fills = [
        {
            type: "SOLID",
            color: { r: 217 / 255, g: 247 / 255, b: 230 / 255 },
        },
        ];
        specRect.cornerRadius = 100;
        specRect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        specRect.layoutAlign = "CENTER";
        specBlock.appendChild(specRect);

        (async () => {
        const specText = figma.createText();
        specText.name = "specText " + i + "_" + k;
        await figma.loadFontAsync({family: "Inter", style: "Bold" });
        if (k < setCounts) {
            specText.characters = "" + msg.specs[i][k][0] + "";
        } else {
            specText.characters = "" + msg.specs[i][k][0] + "";
        }
        specText.setBoundVariable("fontStyle", fontStyleBold);
        specText.resize(msg.specs[i][k][1], blockHeight);
        specText.textAlignHorizontal = "CENTER";
        specText.textAlignVertical = "CENTER";
        specText.textAutoResize = "WIDTH_AND_HEIGHT";
        specText.fontSize = 10;
        specText.lineHeight = {value: 16, unit: "PIXELS"};
        specText.layoutAlign = "CENTER";
        specText.fills = [
            { type: "SOLID", color: { r: 3 / 255, g: 169 / 255, b: 77 / 255 } },
        ];
        specText.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        specRect.appendChild(specText);
        })();
    });
    /////
    const propsBlockParents = figma.createFrame();
    propsBlockParents.name = "propsBlockParents";
    propsBlockParents.resize(tableWidthArr[4].width , rowHeightArr[i]);
    propsBlockParents.y = 0;
    propsBlockParents.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    propsBlockParents.strokeLeftWeight = 0;
    propsBlockParents.strokeRightWeight = 0;
    propsBlockParents.strokeTopWeight = 0;
    propsBlockParents.strokeBottomWeight = 1;
    propsBlockParents.clipsContent = false;
    propsBlockParents.layoutMode = 'VERTICAL';
    propsBlockParents.layoutSizingVertical = 'HUG';
    // propsBlockParents.layoutSizingHorizontal = 'HUG';
    propsBlockParents.primaryAxisAlignItems = 'MIN';
    propsBlockParents.counterAxisAlignItems = 'MIN';
    propsBlockParents.paddingBottom = 20;
    propsBlockParents.paddingLeft = 20;
    propsBlockParents.paddingRight = 20;
    propsBlockParents.paddingTop = 20;
    propsBlockParents.fills = [
        {
        type: "SOLID",
        color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
        visible: false,
        },
    ];
    tableCellArr_props[i].appendChild(propsBlockParents);
    /////
    msg.specs[i].forEach((values, k) => {
        tableSpecsTitleArr = getPropsTitle(msg.specs[i][k][0])[0]; 
        tableSpecPropssArr = getPropsTitle(msg.specs[i][k][0])[1]; 

        for (let j = 0; j < tableSpecsTitleArr.length; j++) {
        const props_textRect = figma.createFrame();
        props_textRect.name = "props_textRect";
        props_textRect.resize(tableWidthArr[4].width - 40 , 25);
        props_textRect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        props_textRect.clipsContent = false;
        props_textRect.layoutMode = 'HORIZONTAL';
        props_textRect.itemSpacing = itemSpacing;
        props_textRect.primaryAxisAlignItems = 'CENTER';
        props_textRect.counterAxisAlignItems = 'CENTER';
        props_textRect.layoutSizingHorizontal = 'HUG';
        props_textRect.layoutSizingVertical = 'HUG';
        props_textRect.fills = [
            {
            type: "SOLID",
            color: { r: 1 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
            },
        ]
        propsBlockParents.appendChild(props_textRect);

        (async () => {
            const props_specText = figma.createText();
            props_specText.setBoundVariable("fontStyle", fontStyleBold);
            props_specText.name = "specText " + i + "_" + k;
            await figma.loadFontAsync({family: "Inter", style: "Bold" });
            // 여기
            props_specText.characters = "" + getPropsTitle(msg.specs[i][k][0])[0][j] + " :";
            props_specText.resize(msg.specs[i][k][1], blockHeight);
            props_specText.textAlignHorizontal = "CENTER";
            props_specText.textAlignVertical = "CENTER";
            props_specText.textAutoResize = "WIDTH_AND_HEIGHT";
            props_specText.fontSize = 14;
            props_specText.lineHeight = {value: 180, unit: "PERCENT"};
            props_specText.layoutAlign = "CENTER";
            props_specText.fills = [
            { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
            ];
            props_specText.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            props_textRect.appendChild(props_specText);

            const props_specText_contents = figma.createText();
            props_specText_contents.name = "specText " + i + "_" + k;
            props_specText_contents.setBoundVariable("fontStyle", fontStyleRegular);
            await figma.loadFontAsync({family: "Inter", style: "Regular" });
            // 여기
            props_specText_contents.characters = getPropsTitle(msg.specs[i][k][0])[1][j];
            props_specText_contents.resize(msg.specs[i][k][1], blockHeight);
            props_specText_contents.textAlignHorizontal = "CENTER";
            props_specText_contents.textAlignVertical = "CENTER";
            props_specText_contents.textAutoResize = "WIDTH_AND_HEIGHT";
            props_specText_contents.fontSize = 14;
            props_specText_contents.lineHeight = {value: 180, unit: "PERCENT"};
            props_specText_contents.layoutAlign = "CENTER";
            props_specText_contents.fills = [
            { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
            ];
            props_specText_contents.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            props_textRect.appendChild(props_specText_contents);
        })();
        }
    });

    const props_textRect_duration = figma.createFrame();
        props_textRect_duration.name = "props_textRect_duration";
        props_textRect_duration.clipsContent = false;
        props_textRect_duration.layoutMode = 'HORIZONTAL';
        props_textRect_duration.itemSpacing = itemSpacing;
        props_textRect_duration.layoutPositioning = 'AUTO';
        props_textRect_duration.primaryAxisAlignItems = 'CENTER';
        props_textRect_duration.counterAxisAlignItems = 'CENTER';
        props_textRect_duration.layoutSizingHorizontal = 'HUG';
        props_textRect_duration.layoutSizingVertical = 'HUG';
        props_textRect_duration.layoutAlign = "CENTER";
        props_textRect_duration.fills = [
        {
            type: "SOLID",
            color: { r: 1 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false
        },
        ]
        propsBlockParents.appendChild(props_textRect_duration);

    (async () => {
        const props_text_duration = figma.createText();
        props_text_duration.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({family: "Inter", style: "Bold" });
        props_text_duration.name = "props Duration";
        props_text_duration.characters = "Duration :"
        props_text_duration.textAlignHorizontal = "CENTER";
        props_text_duration.textAlignVertical = "CENTER";
        props_text_duration.textAutoResize = "WIDTH_AND_HEIGHT";
        props_text_duration.fontSize = 14;
        props_text_duration.lineHeight = {value: 180, unit: "PERCENT"};
        props_text_duration.layoutAlign = "CENTER";
        props_text_duration.fills = [
        { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
        ];
        props_text_duration.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        props_textRect_duration.appendChild(props_text_duration);

        const props_text_duration_set = figma.createText();
        props_text_duration_set.setBoundVariable("fontStyle", fontStyleRegular);
        await figma.loadFontAsync({family: "Inter", style: "Regular" });
        // {console.log(msg.durations)}
        props_text_duration_set.name = "props Duration";
        if(numberToString(msg.durations[i]).length == 1){
        props_text_duration_set.characters = "0.00" + numberToString(msg.durations[i])[0] + "s (" + msg.durations[i] + "ms)";
        }
        if(numberToString(msg.durations[i]).length == 2){
        props_text_duration_set.characters = "0.0" + numberToString(msg.durations[i])[0] + "s (" + msg.durations[i] + "ms)";
        }
        if(numberToString(msg.durations[i]).length == 3){
        props_text_duration_set.characters = "0." + numberToString(msg.durations[i])[0] + numberToString(msg.durations[i])[1] + "s (" + msg.durations[i] + "ms)";
        }
        if(numberToString(msg.durations[i]).length == 4){
        props_text_duration_set.characters = numberToString(msg.durations[i])[0] + '.' + numberToString(msg.durations[i])[1] + numberToString(msg.durations[i])[2] + "s (" + msg.durations[i] + "ms)";
        }
        props_text_duration_set.textAlignHorizontal = "CENTER";
        props_text_duration_set.textAlignVertical = "CENTER";
        props_text_duration_set.textAutoResize = "WIDTH_AND_HEIGHT";
        props_text_duration_set.fontSize = 14;
        props_text_duration_set.lineHeight = {value: 180, unit: "PERCENT"};
        props_text_duration_set.layoutAlign = "CENTER";
        props_text_duration_set.fills = [
        { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
        ];
        props_text_duration_set.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        props_textRect_duration.appendChild(props_text_duration_set);
    })();


    if(msg.delays[i] > 0){
        const props_textRect_delay = figma.createFrame();
        props_textRect_delay.name = "props_textRect_delay";
        props_textRect_delay.clipsContent = false;
        props_textRect_delay.layoutMode = 'HORIZONTAL';
        props_textRect_delay.itemSpacing = itemSpacing;
        props_textRect_delay.layoutPositioning = 'AUTO';
        props_textRect_delay.primaryAxisAlignItems = 'CENTER';
        props_textRect_delay.counterAxisAlignItems = 'CENTER';
        props_textRect_delay.layoutSizingHorizontal = 'HUG';
        props_textRect_delay.layoutSizingVertical = 'HUG';
        props_textRect_delay.layoutAlign = "CENTER";
        props_textRect_delay.fills = [
        {
            type: "SOLID",
            color: { r: 1 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false
        },
        ]
        propsBlockParents.appendChild(props_textRect_delay);

    (async () => {
        const props_text_delay = figma.createText();
        props_text_delay.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({family: "Inter", style: "Bold" });
        props_text_delay.name = "props Delay";
        props_text_delay.characters = "Delay :"
        props_text_delay.textAlignHorizontal = "CENTER";
        props_text_delay.textAlignVertical = "CENTER";
        props_text_delay.textAutoResize = "WIDTH_AND_HEIGHT";
        props_text_delay.fontSize = 14;
        props_text_delay.lineHeight = {value: 180, unit: "PERCENT"};
        props_text_delay.layoutAlign = "CENTER";
        props_text_delay.fills = [
        { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
        ];
        props_text_delay.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        props_textRect_delay.appendChild(props_text_delay);

        const props_text_delay_set = figma.createText();
        props_text_delay_set.setBoundVariable("fontStyle", fontStyleRegular);
        await figma.loadFontAsync({family: "Inter", style: "Regular" });
    
        props_text_delay_set.name = "props Delay";
        if(numberToString(msg.delays[i]).length == 1){
        props_text_delay_set.characters = "0.00" + numberToString(msg.delays[i])[0] + "s (" + msg.delays[i] + "ms)";
        }
        if(numberToString(msg.delays[i]).length == 2){
        props_text_delay_set.characters = "0.0" + numberToString(msg.delays[i])[0] + "s (" + msg.delays[i] + "ms)";
        }
        if(numberToString(msg.delays[i]).length == 3){
        props_text_delay_set.characters = "0." + numberToString(msg.delays[i])[0] + numberToString(msg.delays[i])[1] + "s (" + msg.delays[i] + "ms)";
        }
        if(numberToString(msg.delays[i]).length == 4){
        props_text_delay_set.characters = numberToString(msg.delays[i])[0] + '.' + numberToString(msg.delays[i])[1] + numberToString(msg.delays[i])[2] + "s (" + msg.delays[i] + "ms)";
        }
        props_text_delay_set.textAlignHorizontal = "CENTER";
        props_text_delay_set.textAlignVertical = "CENTER";
        props_text_delay_set.textAutoResize = "WIDTH_AND_HEIGHT";
        props_text_delay_set.fontSize = 14;
        props_text_delay_set.lineHeight = {value: 180, unit: "PERCENT"};
        props_text_delay_set.layoutAlign = "CENTER";
        props_text_delay_set.fills = [
        { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
        ];
        props_text_delay_set.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        props_textRect_delay.appendChild(props_text_delay_set);
    })();
    }

    ///
    const props_textRect_curve = figma.createFrame();
        props_textRect_curve.name = "props_textRect_curve";
        props_textRect_curve.clipsContent = false;
        props_textRect_curve.layoutMode = 'HORIZONTAL';
        props_textRect_curve.itemSpacing = itemSpacing;
        props_textRect_curve.layoutPositioning = 'AUTO';
        props_textRect_curve.primaryAxisAlignItems = 'CENTER';
        props_textRect_curve.counterAxisAlignItems = 'CENTER';
        props_textRect_curve.layoutSizingHorizontal = 'HUG';
        props_textRect_curve.layoutSizingVertical = 'HUG';
        props_textRect_curve.layoutAlign = "CENTER";
        props_textRect_curve.fills = [
        {
            type: "SOLID",
            color: { r: 1 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false
        },
        ]
        propsBlockParents.appendChild(props_textRect_curve);
    
    (async () => {
        const props_text_curve = figma.createText();
        props_text_curve.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({family: "Inter", style: "Bold" });
        props_text_curve.name = "props Curve";
        props_text_curve.characters = "Curves :"
        props_text_curve.textAlignHorizontal = "CENTER";
        props_text_curve.textAlignVertical = "CENTER";
        props_text_curve.textAutoResize = "WIDTH_AND_HEIGHT";
        props_text_curve.fontSize = 14;
        props_text_curve.lineHeight = {value: 180, unit: "PERCENT"};
        props_text_curve.layoutAlign = "CENTER";
        props_text_curve.fills = [
        { type: "SOLID", color: { r: 66 / 255, g: 66 / 255, b: 66 / 255 } },
        ];
        props_text_curve.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        props_textRect_curve.appendChild(props_text_curve);

        const props_text_curve_set = figma.createText();
        props_text_curve_set.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({family: "Inter", style: "Regular" });
        props_text_curve_set.name = "props Curve";
        props_text_curve_set.characters = msg.eases[i];
        props_text_curve_set.textAlignHorizontal = "CENTER";
        props_text_curve_set.textAlignVertical = "CENTER";
        props_text_curve_set.textAutoResize = "WIDTH_AND_HEIGHT";
        props_text_curve_set.fontSize = 14;
        props_text_curve_set.lineHeight = {value: 180, unit: "PERCENT"};
        props_text_curve_set.layoutAlign = "CENTER";
        props_text_curve_set.fills = [ { type: "SOLID", color: tlBlockPropsArr[i] }, ];
        props_text_curve_set.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        props_textRect_curve.appendChild(props_text_curve_set);
    })();
    });
};

function numberToString(n) {
    return (n + "").split("");
  }
  
  function getSpecWidth(msg) {
    var itemPosXArr = [[]];
    var itemPosX = 0;
  
    for (let i = 0; i < msg.labels.length; i++) {
      for (let k = 0; k < msg.specs[i].length; k++) {
        itemPosXArr[i] = itemPosX += msg.specs[i][k][1] + 4;
      }
      itemPosX = 0;
    }
    itemPosX = 0;
  }
  
  function getPropsTitle(msg) {
    let title;
    let subTitle;
    if(msg == "Scale Up"){
      title = ["Scale"];
      subTitle = ["0.96 → 1.0"];
    }
    if(msg == "Scale Down"){
      title = ["Scale"];
      subTitle = ["0.7 → 1.0"];
    }
    if(msg == "Height-Grow"){
      title = ["Height"];
      subTitle = ["Fold 높이 → Open 높이"];
    }
    if(msg == "Height-Shrink"){
      title = ["Height"];
      subTitle = ["Open 높이 → Fold 높이"];
    }
    if(msg == "Width-Grow"){
        title = ["Width"];
        subTitle = ["Fold 높이 → Open 높이"];
      }
    if(msg == "Width-Shrink"){
        title = ["Width"];
        subTitle = ["Open 높이 → Fold 높이"];
    }
    if(msg == "Fade In"){
      title = ["Opacity"];
      subTitle = ["0.0 → 1.0"];
    }
    if(msg == "Fade Out"){
      title = ["Opacity"];
      subTitle = ["1.0 → 0.0"];
    }
    if(msg == "Fade In & Out"){
      title = ["Opacity"];
      subTitle = ["0.3 ↔️ 1.0"];
    }
    if(msg == "Slide"){
        title = ["PositonX", "PositionY"];
        subTitle = ["0 → 로딩바 너비만큼 이동", " - 컴포넌트 높이 / 2 → 컴포넌트 위치"];
      }
    if(msg == "Slide In"){
      title = ["PositonX", "PositionY"];
      subTitle = ["0 → 로딩바 너비만큼 이동", " - 컴포넌트 높이 / 2 → 컴포넌트 위치"];
    }
    if(msg == "Slide Out"){
      title = ["PositonX", "PositionY"];
      subTitle = ["컴포넌트 위치 → + 컴포넌트 높이", "+ 컴포넌트 높이 → 컴포넌트 위치"];
    }
    if(msg == "Rotate"){
      title = ["Rotate"];
      subTitle = ["Fold 각도 → Open 각도"];
    }
    return [title, subTitle];
}
  