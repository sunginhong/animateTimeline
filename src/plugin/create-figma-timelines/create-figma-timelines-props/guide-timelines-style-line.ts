export function guideTimelinesStyleColors_Line({item, visBool, index, fillColorArr, strokeColorArr }) {
    if(visBool){
        item.fills = [
            {
                type: "SOLID",
                color: { r: fillColorArr[index].r, g: fillColorArr[index].g, b: fillColorArr[index].b },
                visible: true,
            }
        ];
        item.strokes = [
            {
                type: "SOLID",
                color: { r: strokeColorArr[index].r, g: strokeColorArr[index].g, b: strokeColorArr[index].b },
                visible: true,
            }
        ];
    } else {
        item.fills = [
            {
                type: "SOLID",
                color: { r: fillColorArr[index].r, g: fillColorArr[index].g, b: fillColorArr[index].b },
                visible: false,
            }
        ];
        item.strokes = [
            {
                type: "SOLID",
                color: { r: strokeColorArr[index].r, g: strokeColorArr[index].g, b: strokeColorArr[index].b },
                visible: false,
            }
        ];
    }
}