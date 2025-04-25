import { templatesTitleFrame } from './title/templates-title-frames';

export const createTemplatesTitle = (msg) => {
    const title = figma.createFrame();
    title.name = "title";
    title.layoutPositioning="AUTO";
    title.clipsContent = false;
    title.layoutMode = "VERTICAL";
    title.primaryAxisAlignItems = "CENTER";
    title.paddingLeft = 80*2;
    title.resize(1920, 1080);
    title.fills = [
    {
        type: "SOLID",
        color: { r: 33 / 255, g: 33 / 255, b: 33 / 255 },
        visible: true,
    },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(title));

    templatesTitleFrame({parent: title});
}