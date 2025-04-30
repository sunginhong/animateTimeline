import { getWidth } from '../plugin/utils/getWidth';
import { templatesCurveFrame } from './curve/templates-curve-frames';

export const createTemplatesCurve = (msg) => {
    let paddingLeftRight = 50;
    const curve = figma.createFrame();
    curve.name = "curve";
    curve.layoutPositioning = "AUTO";
    curve.clipsContent = false;
    curve.layoutMode = "VERTICAL"; 
    curve.primaryAxisAlignItems = "MIN";
    curve.primaryAxisSizingMode = "AUTO";
    curve.counterAxisAlignItems = "MIN"; 
    curve.counterAxisSizingMode = "AUTO";
    curve.paddingLeft = paddingLeftRight;
    curve.paddingRight = paddingLeftRight;
    curve.paddingTop = 100;
    curve.paddingBottom = 100;
    curve.itemSpacing = 20; 
    // curve.resize(1920, 1080);
    curve.fills = [
        {
            type: "SOLID",
            color: msg.isDarkMode ?  { r: 0 / 255, g: 0 / 255, b: 0 / 255 } : { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
            visible: true,
        },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(curve));

    templatesCurveFrame({ msg: msg, parent: curve, parentWidth: getWidth("templates") - paddingLeftRight * 2 });
}