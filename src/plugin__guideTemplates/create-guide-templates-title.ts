import { templatesTitleFrame } from './create-guide-templates-title/templates-title-frames';

export const createGuideTemplatesTitle = (msg) => {
    const title = figma.createComponent();
    title.name = "title";
    title.clipsContent = false;
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

    templatesTitleFrame({parents: title});
}