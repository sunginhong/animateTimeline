export const createTemplatesHaptic = (message) => {
    let paddingLeftRight = 50;
    const hapticFrame = figma.createFrame();
    hapticFrame.name = "haptic";
    hapticFrame.layoutPositioning = "AUTO";
    hapticFrame.clipsContent = false;
    hapticFrame.layoutMode = "VERTICAL"; 
    hapticFrame.primaryAxisAlignItems = "MIN";
    hapticFrame.primaryAxisSizingMode = "AUTO";
    hapticFrame.counterAxisAlignItems = "MIN"; 
    hapticFrame.counterAxisSizingMode = "AUTO";
    hapticFrame.paddingLeft = paddingLeftRight;
    hapticFrame.paddingRight = paddingLeftRight;
    hapticFrame.paddingTop = 100;
    hapticFrame.paddingBottom = 100;
    hapticFrame.itemSpacing = 20; 
    // hapticFrame.resize(1920, 1080);
    hapticFrame.fills = [
        {
            type: "SOLID",
            color: { r: 0 / 255, g: 0 / 255, b: 0 / 255 },
            visible: true,
        },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(hapticFrame));

}