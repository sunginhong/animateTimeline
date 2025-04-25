import { templatesListFrame } from './list/templates-list-frames';

export const createTemplatesList = (msg) => {
    const list = figma.createFrame();
    list.name = "list";
    list.layoutPositioning="AUTO";
    list.clipsContent = false;
    list.layoutMode = "VERTICAL";
    list.primaryAxisAlignItems = "CENTER";
    list.paddingLeft = 80*2;
    list.resize(1920, 1080);
    list.fills = [
    {
        type: "SOLID",
        color: { r: 33 / 255, g: 33 / 255, b: 33 / 255 },
        visible: true,
    },
    ];
    figma.currentPage.selection
        .filter(node => 'appendChild' in node)
        .forEach(node => (node as FrameNode | GroupNode).appendChild(list));

    templatesListFrame({parent: list});
}