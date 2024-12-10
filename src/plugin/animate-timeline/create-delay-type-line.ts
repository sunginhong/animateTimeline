export const createDelayTypeLine = ({delayState,  parent, index, k, j, delays, itemWidth, zoomRate, blockHeight}) => {
    const rectDealayChild = figma.createFrame();
    let strokeWidth = 2;
    rectDealayChild.name = "rectDealayChild " + index + "_" + k + "_" + j;
    rectDealayChild.clipsContent = false;
    if(delayState === "Nor"){
        rectDealayChild.x = (j * itemWidth) / zoomRate;
        rectDealayChild.resize(itemWidth / zoomRate, strokeWidth);
    }
    if(delayState === "Ex1"){
        rectDealayChild.x = 0;
        rectDealayChild.resize((itemWidth * (delays / 100)) / zoomRate, strokeWidth);
    }
    if(delayState === "Ex2"){
        rectDealayChild.x = (itemWidth * parseInt(numberToString(delays)[0])) / zoomRate;
        rectDealayChild.resize((itemWidth * parseInt(numberToString(delays)[1])) / 10 / zoomRate, strokeWidth );
    }
    if(delayState === "Ex3_1"){
        rectDealayChild.x = (k * itemWidth) / zoomRate;
        rectDealayChild.resize(itemWidth / zoomRate, strokeWidth);
    }
    if(delayState === "Ex3_2"){
        rectDealayChild.x = (itemWidth * parseInt( numberToString(delays)[0] + numberToString(delays)[1])) / zoomRate;
        rectDealayChild.resize((itemWidth * parseInt(numberToString(delays)[1])) / 10 / zoomRate, strokeWidth );
    }
    if(delayState === "Ex3_3"){
        rectDealayChild.x = itemWidth * parseInt(numberToString(delays)[0] + numberToString(delays)[1]) /zoomRate;
        rectDealayChild.resize((itemWidth * parseInt(numberToString(delays)[2])) / 10 / zoomRate, strokeWidth);
    }
    
    rectDealayChild.y = blockHeight/2-1;
    rectDealayChild.cornerRadius = 0;
    rectDealayChild.fills = [{ type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },  visible: true,},];
    rectDealayChild.opacity = 1;
    parent.appendChild(rectDealayChild);

    const rectDelay_dot_start = figma.createRectangle();
    rectDelay_dot_start.name = "rectDelay_dot_start " + index;
    rectDelay_dot_start.x = -10/2;
    rectDelay_dot_start.y = -((10/2)-(strokeWidth/2));
    rectDelay_dot_start.resize(10, 10);
    rectDelay_dot_start.fills = [{ type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },  visible: true,},];
    rectDelay_dot_start.cornerRadius = 10;
    rectDealayChild.appendChild(rectDelay_dot_start);

    const rectDelay_dot_end = figma.createRectangle();
    rectDelay_dot_end.name = "rectDelay_dot_end " + index;
    if(delayState === "Nor"){
        rectDelay_dot_end.x = (itemWidth / zoomRate) - 10/2;
    }
    if(delayState === "Ex1"){
        rectDelay_dot_end.x = ((itemWidth * (delays / 100)) / zoomRate) - 10/2;
    }
    if(delayState === "Ex2"){
        rectDelay_dot_end.x = ((itemWidth * parseInt(numberToString(delays)[1])) / 10 / zoomRate) - 10/2;
    }
    if(delayState === "Ex3_1"){
        rectDelay_dot_end.x = (itemWidth / zoomRate) - 10/2;
    }
    if(delayState === "Ex3_2"){
        rectDelay_dot_end.x = ((itemWidth * parseInt(numberToString(delays)[1])) / 10 / zoomRate) - 10/2;
    }
    if(delayState === "Ex3_3"){
        rectDelay_dot_end.x = ((itemWidth * parseInt(numberToString(delays)[2])) / 10 / zoomRate) - 10/2;
    }
    
    rectDelay_dot_end.y = -((10/2)-(strokeWidth/2));
    rectDelay_dot_end.resize(10, 10);
    rectDelay_dot_end.fills = [{ type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },  visible: true,},];
    rectDelay_dot_end.cornerRadius = 10;
    rectDealayChild.appendChild(rectDelay_dot_end);
    
}

function numberToString(n) {
    return (n + "").split("");
}



