import { templatesListTitle } from "./elem/templates-list-title";

interface interfaceProps {
    msg: any; 
    parent: FrameNode;
}

export function templatesListTitleFrame({ msg, parent }: interfaceProps) {
    const TitleFrame = figma.createFrame();
    TitleFrame.layoutMode = "VERTICAL";
    TitleFrame.layoutAlign = "MIN";
    TitleFrame.primaryAxisAlignItems = 'MIN';
    TitleFrame.primaryAxisSizingMode = "AUTO";
    TitleFrame.counterAxisSizingMode = "AUTO";
    TitleFrame.counterAxisAlignItems = "MIN";
    TitleFrame.itemSpacing = 1;
    TitleFrame.name = "list_title_frame";
    TitleFrame.clipsContent = false;
    TitleFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
    ];
    parent.appendChild(TitleFrame);

    templatesListTitle({ msg: msg, parent: TitleFrame, label: "Contents", cases: "Title" });
}