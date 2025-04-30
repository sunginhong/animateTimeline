import { templatesBadge } from "./templates-badge";
import { templatesTitle } from "./templates-title";

interface interfaceProps {
    msg: string;
    parent: FrameNode;
}

export function templatesTitleFrame({ msg, parent }: interfaceProps) {
    const titleFrame = figma.createFrame();
    titleFrame.layoutMode = "VERTICAL";
    titleFrame.layoutAlign = "MIN";
    titleFrame.primaryAxisAlignItems = 'MIN';
    titleFrame.primaryAxisSizingMode = "AUTO";
    titleFrame.counterAxisSizingMode = "AUTO";
    titleFrame.counterAxisAlignItems = "MIN";
    titleFrame.itemSpacing = 32;
    titleFrame.name = "title_frame";
    titleFrame.clipsContent = false;
    titleFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
    ];
    parent.appendChild(titleFrame);

    templatesBadge({ msg: msg, parent: titleFrame, label: "INTERACTION" });
    templatesTitle({ msg: msg, parent: titleFrame, label: "가이드 타이틀" });
}