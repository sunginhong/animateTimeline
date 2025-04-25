
interface curvePropsLineProps {
    parents: FrameNode;
    parentsWidth: number;  
}

export function curvePropsLine({ parents, parentsWidth }: curvePropsLineProps) {
    const curvePropsLine = figma.createFrame();
    curvePropsLine.layoutMode = "HORIZONTAL";
    curvePropsLine.layoutAlign = "MIN";
    curvePropsLine.primaryAxisAlignItems = 'MIN'
    curvePropsLine.primaryAxisSizingMode = "AUTO";
    curvePropsLine.counterAxisSizingMode = "AUTO";
    curvePropsLine.counterAxisAlignItems = "MIN";
    curvePropsLine.name = "curve_props_line";
    curvePropsLine.resize(parentsWidth, 1);
    curvePropsLine.clipsContent = false;
    curvePropsLine.fills = [
        { type: "SOLID", color: { r: 217 / 255, g: 217 / 255, b: 217 / 255 }, visible: true },
       
    ];
    parents.appendChild(curvePropsLine);
}