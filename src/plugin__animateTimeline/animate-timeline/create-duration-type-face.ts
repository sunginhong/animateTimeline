export const createDurationTypeFace = ({delayState,  parent, index, durations, delays, itemWidth, zoomRate, blockHeight, bgColor, lineColor}) => {
    const rectDuration = figma.createFrame();
    rectDuration.name = "rectDuration " + index;
    if(delayState === "Nor"){
        rectDuration.x = (itemWidth * (delays / 100)) / zoomRate;
    }
    if(delayState === "Ex4"){
        rectDuration.x =
        (itemWidth *
        parseInt(
            numberToString(delays)[0] +
            numberToString(delays)[1]
        ) +
        (itemWidth * parseInt(numberToString(delays)[2])) / 10) /
        zoomRate;
    }
    
    rectDuration.clipsContent = false;
    rectDuration.y = 0;
    rectDuration.cornerRadius = 100;
    rectDuration.resize(
        (itemWidth * (durations / 100)) / zoomRate,
        blockHeight
    );
    rectDuration.fills = [{ type: "SOLID", color: bgColor }];
    rectDuration.strokes = [
        { type: "SOLID", color: lineColor },
    ];
    rectDuration.strokeWeight = 1;
    rectDuration.opacity = 0.5;
    parent.appendChild(rectDuration);
}

function numberToString(n) {
    return (n + "").split("");
}

