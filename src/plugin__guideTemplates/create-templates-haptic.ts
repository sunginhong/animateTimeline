import { getWidth } from '../plugin/utils/getWidth';
import { templatesHapticFrame } from './haptic/templates-haptic-frames';

export const createTemplatesHaptic = (msg) => {
    let paddingLeftRight = 50;
    const haptic = figma.createFrame();
    haptic.name = "haptic";
    haptic.layoutPositioning = "AUTO";
    haptic.clipsContent = false;
    haptic.layoutMode = "VERTICAL"; 
    haptic.primaryAxisAlignItems = "MIN";
    haptic.primaryAxisSizingMode = "AUTO";
    haptic.counterAxisAlignItems = "MIN"; 
    haptic.counterAxisSizingMode = "AUTO";
    haptic.paddingLeft = paddingLeftRight;
    haptic.paddingRight = paddingLeftRight;
    haptic.paddingTop = 100;
    haptic.paddingBottom = 100;
    haptic.itemSpacing = 20; 
    // haptic.resize(1920, 1080);
    haptic.fills = [
        {
            type: "SOLID",
            color: msg.isDarkMode ?  { r: 0 / 255, g: 0 / 255, b: 0 / 255 } : { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
            visible: true,
        },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(haptic));

    templatesHapticFrame({ msg: msg, parent: haptic, parentWidth: getWidth("templates") - paddingLeftRight * 2});
}