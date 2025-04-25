import { templatesCurveFrame } from './curve/templates-curve-frames';

export const createTemplatesCurve = (message) => {
    let paddingLeftRight = 50;
    const curveFrame = figma.createFrame();
    curveFrame.name = "curve";
    curveFrame.layoutPositioning = "AUTO";
    curveFrame.clipsContent = false;
    curveFrame.layoutMode = "VERTICAL"; 
    curveFrame.primaryAxisAlignItems = "MIN";
    curveFrame.primaryAxisSizingMode = "AUTO";
    curveFrame.counterAxisAlignItems = "MIN"; 
    curveFrame.counterAxisSizingMode = "AUTO";
    curveFrame.paddingLeft = paddingLeftRight;
    curveFrame.paddingRight = paddingLeftRight;
    curveFrame.paddingTop = 100;
    curveFrame.paddingBottom = 100;
    curveFrame.itemSpacing = 20; 
    // curveFrame.resize(1920, 1080);
    curveFrame.fills = [
        {
            type: "SOLID",
            color: { r: 0 / 255, g: 0 / 255, b: 0 / 255 },
            visible: true,
        },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(curveFrame));

    templatesCurveFrame({ parent: curveFrame, parentWidth: 1920 - paddingLeftRight * 2 });
}