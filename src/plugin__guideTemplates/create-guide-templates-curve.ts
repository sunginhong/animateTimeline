import { templatesCurveFrame } from './create-guide-templates-curve/templates-curve-frames';

export const createGuidetemplatesCurve = (msg) => {
    let paddingLr = 50;
    const curve = figma.createFrame();
    curve.name = "curve";
    curve.layoutPositioning = "AUTO";
    curve.clipsContent = false;
    curve.layoutMode = "VERTICAL"; 
    curve.primaryAxisAlignItems = "MIN";
    curve.primaryAxisSizingMode = "AUTO";
    curve.counterAxisAlignItems = "MIN"; 
    curve.counterAxisSizingMode = "AUTO";
    curve.paddingLeft = paddingLr;
    curve.paddingRight = paddingLr;
    curve.paddingTop = 100;
    curve.paddingBottom = 100;
    curve.itemSpacing = 20; 
    // curve.resize(1920, 1080);
    curve.fills = [
        {
            type: "SOLID",
            color: { r: 0 / 255, g: 0 / 255, b: 0 / 255 },
            visible: true,
        },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(curve));

    templatesCurveFrame({ parents: curve, parentsWidth: 1920 - paddingLr * 2 });
}