("use strict");

const collectionBold = figma.variables.createVariableCollection("new-collectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

const collectionRegular  = figma.variables.createVariableCollection("new-collection2");
const modeIdRegular  = collectionRegular.modes[0].modeId;
const fontStyleRegular = figma.variables.createVariable("fontFamily", collectionRegular, "STRING");
fontStyleRegular.setValueForMode(modeIdRegular, "regular");


export const createFigmaTimeLines = ({parent, msg}) => {

    // const frame_timelines = figma.createFrame();
    // frame_timelines.name = "frame_timelines";
    // frame_timelines.x = 0;
    // frame_timelines.y = 0;
    // frame_timelines.clipsContent = false;
    // frame_timelines.layoutSizingVertical = 'HUG';
    // frame_timelines.primaryAxisAlignItems = 'CENTER';
    // frame_timelines.counterAxisAlignItems = 'CENTER';
    // frame_timelines.fills = [
    // {
    //     type: "SOLID",
    //     color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 },
    //     visible: false,
    // },
    // ];
    // parent.appendChild(frame_timelines)

    // const timelines_group = figma.createFrame();
    // timelines_group.name = "timelines_group";
    // timelines_group.x = 0;
    // timelines_group.y = 0;
    // timelines_group.clipsContent = false;
    // timelines_group.layoutSizingVertical = 'HUG';
    // timelines_group.primaryAxisAlignItems = 'CENTER';
    // timelines_group.counterAxisAlignItems = 'CENTER';
    // timelines_group.fills = [
    // {
    //     type: "SOLID",
    //     color: { r: 201 / 255, g: 201 / 255, b: 201 / 255 },
    //     visible: false,
    // },
    // ];
    // frame_timelines.appendChild(timelines_group);
}

function numberToString(n) {
    return (n + "").split("");
}