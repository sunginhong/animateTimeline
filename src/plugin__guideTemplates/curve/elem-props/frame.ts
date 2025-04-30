import { curvePropsRows } from "./rows/rows";
import { createCurvePropsLine } from "./line";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    parentWidth: number; 
}

export function curvePropsFrame({ msg, parent, parentWidth }: interfaceProps) {
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
        { type: "SOLID", color: msg.isDarkMode
            ? { r: 32 / 255, g: 32 / 255, b: 32 / 255 }
            : { r: 247 / 255, g: 247 / 255, b: 247 / 255 }, visible: true },
    ];
    parent.appendChild(curvePropsFrame);

    curvePropsRows({ msg: msg, parent: curvePropsFrame, easingType: "Ease-Standard"});
    createCurvePropsLine({ msg: msg, parent: curvePropsFrame, parentWidth: parentWidthCalc });
    curvePropsRows({ msg: msg, parent: curvePropsFrame, easingType: "Ease-Out"});
    curvePropsRows({ msg: msg, parent: curvePropsFrame, easingType: "Ease-Out-Level1"});
    createCurvePropsLine({ msg: msg, parent: curvePropsFrame, parentWidth: parentWidthCalc });
    curvePropsRows({ msg: msg, parent: curvePropsFrame, easingType: "Ease-InOut"});
    createCurvePropsLine({ msg: msg, parent: curvePropsFrame, parentWidth: parentWidthCalc });
    curvePropsRows({ msg: msg, parent: curvePropsFrame, easingType: "Spring"});
    curvePropsRows({ msg: msg, parent: curvePropsFrame, easingType: "Spring-Level1"});
    curvePropsRows({ msg: msg, parent: curvePropsFrame, easingType: "Spring-Level2"});
}