import { curvePropsRows } from "./rows/rows";
import { createCurvePropsLine } from "./line";

interface curvePropsFrameProps {
    parent: FrameNode;
    parentWidth: number; 
}

export function curvePropsFrame({ parent, parentWidth }: curvePropsFrameProps) {
    const curvePropsFrame = figma.createFrame();
    const paddingLeftRight = 50;
    const parentWidthCalc = parentWidth - (paddingLeftRight * 2);

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
    curvePropsFrame.resize(parentWidth, curvePropsFrame.height);
    curvePropsFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: true },
       
    ];
    parent.appendChild(curvePropsFrame);

    curvePropsRows({ parent: curvePropsFrame, easingType: "Ease-Standard"});
    createCurvePropsLine({ parent: curvePropsFrame, parentWidth: parentWidthCalc });
    curvePropsRows({ parent: curvePropsFrame, easingType: "Ease-Out"});
    curvePropsRows({ parent: curvePropsFrame, easingType: "Ease-Out-Level1"});
    createCurvePropsLine({ parent: curvePropsFrame, parentWidth: parentWidthCalc });
    curvePropsRows({ parent: curvePropsFrame, easingType: "Ease-InOut"});
    createCurvePropsLine({ parent: curvePropsFrame, parentWidth: parentWidthCalc });
    curvePropsRows({ parent: curvePropsFrame, easingType: "Spring"});
    curvePropsRows({ parent: curvePropsFrame, easingType: "Spring-Level1"});
    curvePropsRows({ parent: curvePropsFrame, easingType: "Spring-Level2"});
}