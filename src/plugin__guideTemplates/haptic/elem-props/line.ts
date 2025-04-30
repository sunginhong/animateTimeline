interface interfaceProps {
    parent: FrameNode;
    parentWidth: number;  
}

export function createhapticPropsLine({ parent, parentWidth }: interfaceProps) {
    const hapticPropsLine = figma.createFrame();
    hapticPropsLine.layoutMode = "HORIZONTAL";
    hapticPropsLine.layoutAlign = "MIN";
    hapticPropsLine.primaryAxisAlignItems = 'MIN';
    hapticPropsLine.primaryAxisSizingMode = "AUTO";
    hapticPropsLine.counterAxisSizingMode = "AUTO";
    hapticPropsLine.counterAxisAlignItems = "MIN";
    hapticPropsLine.name = "curve_props_line";
    hapticPropsLine.resize(parentWidth, 1);
    hapticPropsLine.clipsContent = false;
    hapticPropsLine.fills = [
        { type: "SOLID", color: { r: 217 / 255, g: 217 / 255, b: 217 / 255 }, visible: true },
    ];
    parent.appendChild(hapticPropsLine);
}
