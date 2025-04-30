import { getWidth } from '../plugin/utils/getWidth';

export const createTemplatesForm = (msg) => {
    const guideForm = figma.createFrame();
    guideForm.name = "guideForm";
    guideForm.layoutPositioning = "AUTO";
    guideForm.clipsContent = false;
    guideForm.layoutMode = "VERTICAL"; 
    guideForm.primaryAxisAlignItems = "MIN";
    guideForm.primaryAxisSizingMode = "AUTO";
    guideForm.counterAxisAlignItems = "MIN"; 
    guideForm.counterAxisSizingMode = "AUTO";
    guideForm.itemSpacing = 1; 
    guideForm.resize(getWidth("templates"), 1080);
    guideForm.fills = [
        {
            type: "SOLID",
            color: { r: 0 / 255, g: 0 / 255, b: 0 / 255 },
            visible: true,
        },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(guideForm));
}