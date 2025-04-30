import { hapticPropsRows } from "./rows/rows";
import { createhapticPropsLine } from "./line";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    parentWidth: number; 
}

export function hapticPropsFrame({ msg, parent, parentWidth }: interfaceProps) {
    const hapticPropsFrame = figma.createFrame();
    const paddingLeftRight = 50;
    const parentWidthCalc = parentWidth - (paddingLeftRight * 2);

    hapticPropsFrame.layoutMode = "VERTICAL";
    hapticPropsFrame.layoutAlign = "MIN";
    hapticPropsFrame.primaryAxisAlignItems = 'MIN'
    hapticPropsFrame.primaryAxisSizingMode = "AUTO";
    hapticPropsFrame.counterAxisSizingMode = "AUTO";
    hapticPropsFrame.counterAxisAlignItems = "MIN";
    hapticPropsFrame.itemSpacing = 70;
    hapticPropsFrame.name = "curve_props_frame";
    hapticPropsFrame.clipsContent = false;
    hapticPropsFrame.paddingBottom = 70;
    hapticPropsFrame.paddingLeft = paddingLeftRight;
    hapticPropsFrame.paddingRight = paddingLeftRight;
    hapticPropsFrame.paddingTop = 70;
    hapticPropsFrame.resize(parentWidth, hapticPropsFrame.height);
    hapticPropsFrame.fills = [
        { type: "SOLID", color: msg.isDarkMode
            ? { r: 32 / 255, g: 32 / 255, b: 32 / 255 }
            : { r: 247 / 255, g: 247 / 255, b: 247 / 255 }, visible: true },
    ];
    parent.appendChild(hapticPropsFrame);

    hapticPropsRows({ msg: msg, parent: hapticPropsFrame, hapticType: "Selection"  });
    createhapticPropsLine({ msg: msg, parent: hapticPropsFrame, parentWidth: parentWidthCalc });
    hapticPropsRows({ msg: msg, parent: hapticPropsFrame, hapticType: "Selection-0.5" });
    createhapticPropsLine({ msg: msg, parent: hapticPropsFrame, parentWidth: parentWidthCalc });
    hapticPropsRows({ msg: msg, parent: hapticPropsFrame, hapticType: "Error"  });
    createhapticPropsLine({ msg: msg, parent: hapticPropsFrame, parentWidth: parentWidthCalc });
    hapticPropsRows({ msg: msg, parent: hapticPropsFrame, hapticType: "Success" });
}