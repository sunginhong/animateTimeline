export function createGuideTimelineLineDelay({parents, index, strokeColor }) {
    const lineFrame = figma.createFrame();
    lineFrame.name = "line_frame_" + index;
    lineFrame.resize(parents.width, 1);
    lineFrame.x = 0;
    lineFrame.y = 0;
    lineFrame.clipsContent = false;
    parents.appendChild(lineFrame);

    const leftSquare = figma.createFrame();
    leftSquare.name = "left_square_" + index;
    leftSquare.resize(4, 4);
    leftSquare.x = -3;
    leftSquare.y = 0.5;
    leftSquare.rotation = 45;
    lineFrame.appendChild(leftSquare);

    const rightSquare = figma.createFrame();
    rightSquare.name = "right_square_" + index;
    rightSquare.resize(4, 4);
    rightSquare.x = parents.width - 3;
    rightSquare.y = 0.5;
    rightSquare.rotation = 45;
    lineFrame.appendChild(rightSquare);

    lineFrame.fills = [
        {
            type: "SOLID",
            color: { r: strokeColor.r, g: strokeColor.g, b: strokeColor.b },
            visible: true,
        }
    ];
    lineFrame.strokes = [
        {
            type: "SOLID",
            color: { r: strokeColor.r, g: strokeColor.g, b: strokeColor.b },
            visible: true,
        }
    ];
    leftSquare.fills = [
        {
            type: "SOLID",
            color: { r: strokeColor.r, g: strokeColor.g, b: strokeColor.b },
            visible: true,
        }
    ];
    leftSquare.strokes = [
        {
            type: "SOLID",
            color: { r: strokeColor.r, g: strokeColor.g, b: strokeColor.b },
            visible: true,
        }
    ];
    rightSquare.fills = [
        {
            type: "SOLID",
            color: { r: strokeColor.r, g: strokeColor.g, b: strokeColor.b },
            visible: true,
        }
    ];
    rightSquare.strokes = [
        {
            type: "SOLID",
            color: { r: strokeColor.r, g: strokeColor.g, b: strokeColor.b },
            visible: true,
        }
    ];
}