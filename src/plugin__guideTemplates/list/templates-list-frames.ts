import { templatesListTitleFrame } from "./templates-list-1title-frames";
import { templatesListContentsFrame } from "./templates-list-2contents-frames";

interface interfaceProps {
    msg: any; 
    parent: FrameNode;
}

export function templatesListFrame({ msg, parent }: interfaceProps) {
    const listFrame = figma.createFrame();
    listFrame.layoutMode = "VERTICAL";
    listFrame.layoutAlign = "MIN";
    listFrame.primaryAxisAlignItems = 'MIN';
    listFrame.primaryAxisSizingMode = "AUTO";
    listFrame.counterAxisSizingMode = "AUTO";
    listFrame.counterAxisAlignItems = "MIN";
    listFrame.itemSpacing = 30;
    listFrame.name = "list_frame";
    listFrame.clipsContent = false;
    listFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
    ];
    parent.appendChild(listFrame);

    templatesListTitleFrame({ msg: msg, parent: listFrame });
    templatesListContentsFrame({ msg: msg, parent: listFrame });
}