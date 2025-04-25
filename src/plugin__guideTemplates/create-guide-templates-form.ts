export const createGuideTemplatesForm = (msg) => {
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
    guideForm.resize(1920, 1080);
    guideForm.fills = [
        {
            type: "SOLID",
            color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
            visible: true,
        },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(guideForm));
}