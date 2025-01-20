import { guideTimelinesStyleColors_Line } from "./guide-timelines-style-line";
import { guideTimelinesStyleColors_Shape } from "./guide-timelines-style-shape";

export function createGuideTimelineLineDuration({ parents, index, fillColorArr, strokeColorArr }) {
    const lineFrame = figma.createFrame();
    lineFrame.name = "lineFrame " + index;
    lineFrame.resize(parents.width, 1);
    lineFrame.x = 0;
    lineFrame.y = 0;
    lineFrame.clipsContent = false;
    parents.appendChild(lineFrame);
    guideTimelinesStyleColors_Line({ item: lineFrame, visBool: true, index: index, fillColorArr: fillColorArr, strokeColorArr: strokeColorArr });

    const leftSquare = figma.createFrame();
    leftSquare.name = "leftSquare " + index;
    leftSquare.resize(4, 4);
    leftSquare.x = -3;
    leftSquare.y = 0.5;
    leftSquare.rotation = 45;
    lineFrame.appendChild(leftSquare);
    guideTimelinesStyleColors_Shape({ item: leftSquare, visBool: true, index: index, fillColorArr: fillColorArr, strokeColorArr: strokeColorArr });

    const rightSquare = figma.createFrame();
    rightSquare.name = "rightSquare " + index;
    rightSquare.resize(4, 4);
    rightSquare.x = parents.width - 3;
    rightSquare.y = 0.5;
    rightSquare.rotation = 45;
    lineFrame.appendChild(rightSquare);
    guideTimelinesStyleColors_Shape({ item: rightSquare, visBool: true, index: index, fillColorArr: fillColorArr, strokeColorArr: strokeColorArr });
}