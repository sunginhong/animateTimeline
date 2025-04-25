import { templatesListTitle } from "./elem/templates-list-title";

export function templatesListTitleFrame({ parents }) {
    const TitleFrame = figma.createFrame();
    TitleFrame.layoutMode = "VERTICAL";
    TitleFrame.layoutAlign = "MIN";
    TitleFrame.primaryAxisAlignItems = 'MIN'
    TitleFrame.primaryAxisSizingMode = "AUTO";
    TitleFrame.counterAxisSizingMode = "AUTO";
    TitleFrame.counterAxisAlignItems = "MIN";
    TitleFrame.itemSpacing = 1;
    TitleFrame.name = "list_title_frame";
    TitleFrame.clipsContent = false;
    TitleFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
       
    ];
    parents.appendChild(TitleFrame);

    templatesListTitle({ parents: TitleFrame, label: "Contents", cases: "Title" });
}