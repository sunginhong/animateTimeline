interface FrameProps {
    parent: FrameNode;
    parentWidth: number; 
}

export function lineFrame({ parent, parentWidth }: FrameProps) {
    const lineFrame = figma.createFrame();
    lineFrame.resize(parentWidth, 1);
    lineFrame.layoutMode = "VERTICAL";
    lineFrame.layoutAlign = "MIN";
    lineFrame.primaryAxisAlignItems = 'MIN'
    lineFrame.primaryAxisSizingMode = "AUTO";
    lineFrame.counterAxisSizingMode = "AUTO";
    lineFrame.counterAxisAlignItems = "MIN";
    lineFrame.itemSpacing = 1;
    lineFrame.name = "curve_frame_line";
    lineFrame.clipsContent = false;
    lineFrame.fills = [
        { type: "SOLID", color: { r: 217 / 255, g: 217 / 255, b: 217 / 255 }, visible: true },
       
    ];
    parent.appendChild(lineFrame);
}