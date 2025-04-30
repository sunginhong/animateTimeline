import { hapticTitleFrame } from "./elem-title/frame";
import { lineFrame } from "./elem-line/line";
import { hapticPropsFrame } from "./elem-props/frame";

interface interfaceProps {
    parent: FrameNode;
    parentWidth: number; 
}

export function templatesHapticFrame({ parent, parentWidth }: interfaceProps) {
    const curveFrame = figma.createFrame();
    curveFrame.layoutMode = "VERTICAL";
    curveFrame.layoutAlign = "MIN";
    curveFrame.primaryAxisAlignItems = 'MIN'
    curveFrame.primaryAxisSizingMode = "AUTO";
    curveFrame.counterAxisSizingMode = "AUTO";
    curveFrame.counterAxisAlignItems = "MIN";
    curveFrame.itemSpacing = 50;
    curveFrame.name = "curve_frame";
    curveFrame.clipsContent = false;
    curveFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
       
    ];
    parent.appendChild(curveFrame);

    hapticTitleFrame({ parent: curveFrame });
    lineFrame({ parent: curveFrame, parentWidth: parentWidth });
    hapticPropsFrame({ parent: curveFrame, parentWidth: parentWidth });
    
}