var curveColors = {
    r: 0 / 255, g: 0 / 255, b: 0 / 255 
};

export const getTableCurveColor = (curve) => {
    return curveColorsCheck(curve)
}

function curveColorsCheck(eases) {
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
    console.log(eases)
    switch (eases) {
        case valOptEasing[0]:
            curveColors = {
                r: 32 / 255, g: 187 / 255, b: 153 / 255
            };
            break;
        case valOptEasing[1]:
            curveColors = {
                r: 192 / 255, g: 102 / 255, b: 227 / 255
            };
            break;
        case valOptEasing[2]:
            curveColors = {
                r: 192 / 255, g: 102 / 255, b: 227 / 255
            };
            break;
        case valOptEasing[3]:
            curveColors = {
                r: 237 / 255, g: 164 / 255, b: 69 / 255 
            };
            break;
        case valOptEasing[4]:
            curveColors = {
                r: 227 / 255, g: 77 / 255, b: 90 / 255
            };
            break;
        case valOptEasing[5]:
            curveColors = {
                r: 74 / 255, g: 150 / 255, b: 237 / 255
            };
            break;
        case valOptEasing[6]:
            curveColors = {
                r: 74 / 255, g: 150 / 255, b: 237 / 255
            };
            break;
        case valOptEasing[7]:
            curveColors = {
                r: 74 / 255, g: 150 / 255, b: 237 / 255
            };
            break;
        case valOptEasing[8]:
            curveColors = {
                r: 109 / 255, g: 129 / 255, b: 153 / 255
            };
            break;
        }
    return curveColors;
}