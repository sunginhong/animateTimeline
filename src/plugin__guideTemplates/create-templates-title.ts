import { getWidth } from '../plugin/utils/getWidth';
import { templatesTitleFrame } from './title/templates-title-frames';

export const createTemplatesTitle = (msg) => {
    const title = figma.createFrame();
    title.name = "title";
    title.layoutPositioning="AUTO";
    title.clipsContent = false;
    title.layoutMode = "VERTICAL";
    title.primaryAxisAlignItems = "CENTER";
    title.paddingLeft = 80*2;
    title.resize(getWidth("templates"), 1080);
    title.fills = [
    {
        type: "SOLID",
        color: msg.isDarkMode ?  { r: 33 / 255, g: 33 / 255, b: 33 / 255 } : { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
        visible: true,
    },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(title));

    templatesTitleFrame({msg: msg, parent: title});
}