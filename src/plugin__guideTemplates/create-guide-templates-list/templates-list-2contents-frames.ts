import { templatesListTitle } from "./elem/templates-list-title";

export function templatesListContentsFrame({ parents }) {
    const DescriptionFrame = figma.createFrame();
    DescriptionFrame.layoutMode = "VERTICAL";
    DescriptionFrame.layoutAlign = "MIN";
    DescriptionFrame.primaryAxisAlignItems = 'MIN'
    DescriptionFrame.primaryAxisSizingMode = "AUTO";
    DescriptionFrame.counterAxisSizingMode = "AUTO";
    DescriptionFrame.counterAxisAlignItems = "MIN";
    DescriptionFrame.itemSpacing = 15;
    DescriptionFrame.name = "list_contents_frame";
    DescriptionFrame.clipsContent = false;
    DescriptionFrame.fills = [
        { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
       
    ];
    parents.appendChild(DescriptionFrame);

    templatesListTitle({ parents: DescriptionFrame, label: "Curve 가이드", cases: "Description" });
    templatesListTitle({ parents: DescriptionFrame, label: "haptic 가이드", cases: "Description" });
    templatesListTitle({ parents: DescriptionFrame, label: "가이드", cases: "Description" });
}