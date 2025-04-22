var curveColors = {
    r: 0 / 255, g: 0 / 255, b: 0 / 255 
};

var graphColors = {
    bgColor: { r: 0 / 255, g: 0 / 255, b: 0 / 255 },
    lineColor: { r: 0 / 255, g: 0 / 255, b: 0 / 255 },
};

export const getGraphCurveColor = (curve) => {
    return graphColorsCheck(curve)
}

function graphColorsCheck(eases) {
    let valOptEasing = [
        "Ease-Standard",
        "EaseOut",
        "EaseOut level 1",
        "EaseIn",
        "EaseInOut",
        "Spring",
        "Spring level 1",
        "Spring level 2",
        "Linear",
    ];
    switch (eases) {
        case valOptEasing[0]:
        graphColors = {
            bgColor: { r: 179 / 255, g: 238 / 255, b: 205 / 255 },
            lineColor: { r: 96 / 255, g: 204 / 255, b: 158 / 255 },
        };
        break;
        case valOptEasing[1]:
        graphColors = {
            bgColor: { r: 237 / 255, g: 193 / 255, b: 255 / 255 },
            lineColor: { r: 197 / 255, g: 111 / 255, b: 231 / 255 },
        };
        break;
        case valOptEasing[2]:
        graphColors = {
            bgColor: { r: 237 / 255, g: 193 / 255, b: 255 / 255 },
            lineColor: { r: 197 / 255, g: 111 / 255, b: 231 / 255 },
        };
        break;
        case valOptEasing[3]:
        graphColors = {
            bgColor: { r: 255 / 255, g: 212 / 255, b: 172 / 255 },
            lineColor: { r: 245 / 255, g: 156 / 255, b: 74 / 255 },
        };
        break;
        case valOptEasing[4]:
        graphColors = {
            bgColor: { r: 255 / 255, g: 186 / 255, b: 191 / 255 },
            lineColor: { r: 230 / 255, g: 87 / 255, b: 98 / 255 },
        };
        break;
        case valOptEasing[5]:
        graphColors = {
            bgColor: { r: 180 / 255, g: 215 / 255, b: 255 / 255 },
            lineColor: { r: 96 / 255, g: 162 / 255, b: 237 / 255 },
        };
        break;
        case valOptEasing[6]:
        graphColors = {
            bgColor: { r: 180 / 255, g: 215 / 255, b: 255 / 255 },
            lineColor: { r: 96 / 255, g: 162 / 255, b: 237 / 255 },
        };
        break;
        case valOptEasing[7]:
        graphColors = {
            bgColor: { r: 180 / 255, g: 215 / 255, b: 255 / 255 },
            lineColor: { r: 96 / 255, g: 162 / 255, b: 237 / 255 },
        };
        case valOptEasing[8]:
        graphColors = {
            bgColor: { r: 185 / 255, g: 196 / 255, b: 220 / 255 },
            lineColor: { r: 116 / 255, g: 130 / 255, b: 170 / 255 },
        };
        break;
    }
    return graphColors;
}