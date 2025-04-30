interface interfaceProps {
    msg: any;
    parent: FrameNode;
    parentWidth: number;  
}

export function createCurvePropsLine({ msg, parent, parentWidth }: interfaceProps) {
    const curvePropsLine = figma.createFrame();
    curvePropsLine.layoutMode = "HORIZONTAL";
    curvePropsLine.layoutAlign = "MIN";
    curvePropsLine.primaryAxisAlignItems = 'MIN';
    curvePropsLine.primaryAxisSizingMode = "AUTO";
    curvePropsLine.counterAxisSizingMode = "AUTO";
    curvePropsLine.counterAxisAlignItems = "MIN";
    curvePropsLine.name = "curve_props_line";
    curvePropsLine.resize(parentWidth, 1);
    curvePropsLine.clipsContent = false;
    curvePropsLine.fills = [
        { type: "SOLID", color: msg.isDarkMode
            ? { r: 217 / 255, g: 217 / 255, b: 217 / 255 }
            : { r: 0 / 255, g: 0 / 255, b: 0 / 255 }, visible: true },
    ];
    parent.appendChild(curvePropsLine);
}
