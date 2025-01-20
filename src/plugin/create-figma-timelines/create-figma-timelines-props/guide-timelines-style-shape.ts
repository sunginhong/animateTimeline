export function guideTimelinesStyleColors_Shape({item, visBool, index, fillColorArr, strokeColorArr }) {
    if(visBool){
        item.fills = [
            {
                type: "SOLID",
                color: { r: strokeColorArr[index].r, g: strokeColorArr[index].g, b: strokeColorArr[index].b },
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
    } 
}