import { curvePropsRows } from "./curce-props-rows";
import { curvePropsLine } from "./curve-props-line";

interface curvePropsFrameProps {
    parents: FrameNode;
    parentsWidth: number; 
}

export function curvePropsFrame({ parents, parentsWidth }: curvePropsFrameProps) {
    const curvePropsFrame = figma.createFrame();
    const paddingLeftRight = 50;
    const parentsWidthCalc = parentsWidth - (paddingLeftRight * 2);

    curvePropsFrame.layoutMode = "VERTICAL";
    curvePropsFrame.layoutAlign = "MIN";
    curvePropsFrame.primaryAxisAlignItems = 'MIN'
    curvePropsFrame.primaryAxisSizingMode = "AUTO";
    curvePropsFrame.counterAxisSizingMode = "AUTO";
    curvePropsFrame.counterAxisAlignItems = "MIN";
    curvePropsFrame.itemSpacing = 70;
    curvePropsFrame.name = "curve_props_frame";
    curvePropsFrame.clipsContent = false;
    curvePropsFrame.paddingBottom = 70;
    curvePropsFrame.paddingLeft = paddingLeftRight;
    curvePropsFrame.paddingRight = paddingLeftRight;
    curvePropsFrame.paddingTop = 70;
    curvePropsFrame.resize(parentsWidth, curvePropsFrame.height);
    curvePropsFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: true },
       
    ];
    parents.appendChild(curvePropsFrame);

    curvePropsRows({ parents: curvePropsFrame, easingType: "Ease-Standard"});
    curvePropsLine({ parents: curvePropsFrame, parentsWidth: parentsWidthCalc });
    curvePropsRows({ parents: curvePropsFrame, easingType: "Ease-Out"});
    curvePropsRows({ parents: curvePropsFrame, easingType: "Ease-Out-Level1"});
    curvePropsLine({ parents: curvePropsFrame, parentsWidth: parentsWidthCalc });
    curvePropsRows({ parents: curvePropsFrame, easingType: "Ease-InOut"});
    curvePropsLine({ parents: curvePropsFrame, parentsWidth: parentsWidthCalc });
    curvePropsRows({ parents: curvePropsFrame, easingType: "Spring"});
    curvePropsRows({ parents: curvePropsFrame, easingType: "Spring-Level1"});
    curvePropsRows({ parents: curvePropsFrame, easingType: "Spring-Level2"});
}