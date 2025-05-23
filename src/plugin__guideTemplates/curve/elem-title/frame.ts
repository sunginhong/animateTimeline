import { curveTitle } from "./frame-curve-title";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
}

export function curveTitleFrame({ msg, parent }: interfaceProps) {
    const titleFrame = figma.createFrame();
    titleFrame.layoutMode = "VERTICAL";
    titleFrame.layoutAlign = "MIN";
    titleFrame.primaryAxisAlignItems = 'MIN';
    titleFrame.primaryAxisSizingMode = "AUTO";
    titleFrame.counterAxisSizingMode = "AUTO";
    titleFrame.counterAxisAlignItems = "MIN";
    titleFrame.itemSpacing = 15;
    titleFrame.name = "curve_title_frame";
    titleFrame.clipsContent = false;
    titleFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
    ];
    parent.appendChild(titleFrame);

    curveTitle({ msg: msg, parent: titleFrame, label: "Interactive Studio", cases: "description" });
    curveTitle({ msg: msg, parent: titleFrame, label: "Curve Guide", cases: "Title" });
}