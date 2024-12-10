export const createDurationTypeLine = ({delayState, parent, index, durations, delays, itemWidth, zoomRate, blockHeight, bgColor}) => {
    const rectDuration = figma.createFrame();
    let strokeWidth = 2;
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
    rectDuration.y = blockHeight/2-1;
    rectDuration.cornerRadius = 0;
    rectDuration.resize((itemWidth * (durations / 100)) / zoomRate, strokeWidth);
    rectDuration.fills = [{ type: "SOLID", color: bgColor }];
    rectDuration.opacity = 1;
    rectDuration.clipsContent = false;
    parent.appendChild(rectDuration);

    const rectDuration_dot_start = figma.createRectangle();
    rectDuration_dot_start.name = "rectDuration_dot_start " + index;
    rectDuration_dot_start.x = -10/2;
    rectDuration_dot_start.y = -((10/2)-(strokeWidth/2));
    rectDuration_dot_start.resize(10, 10);
    rectDuration_dot_start.fills = [{ type: "SOLID", color: bgColor }];
    rectDuration_dot_start.cornerRadius = 10;
    rectDuration.appendChild(rectDuration_dot_start);

    const rectDuration_dot_end = figma.createRectangle();
    rectDuration_dot_end.name = "rectDuration_dot_end " + index;
    rectDuration_dot_end.x = (itemWidth * (durations/ 100)) / zoomRate - 10/2;
    rectDuration_dot_end.y = -((10/2)-(strokeWidth/2));
    rectDuration_dot_end.resize(10, 10);
    rectDuration_dot_end.fills = [{ type: "SOLID", color: bgColor }];
    rectDuration_dot_end.cornerRadius = 10;
    rectDuration.appendChild(rectDuration_dot_end);
    
}

function numberToString(n) {
    return (n + "").split("");
}


