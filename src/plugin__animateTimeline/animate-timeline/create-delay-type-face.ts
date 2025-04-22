export const createDelayTypeFace = ({delayState,  parent, index, k, j, delays, itemWidth, zoomRate, blockHeight}) => {
    const rectDealayChild = figma.createFrame();
    rectDealayChild.name = "rectDealayChild " + index + "_" + k + "_" + j;
    rectDealayChild.clipsContent = false;
    if(delayState === "Nor"){
        rectDealayChild.x = (j * itemWidth) / zoomRate;
        rectDealayChild.resize(itemWidth / zoomRate, blockHeight);
    }
    if(delayState === "Ex1"){
        rectDealayChild.x = 0;
        rectDealayChild.resize((itemWidth * (delays / 100)) / zoomRate, blockHeight );
    }
    if(delayState === "Ex2"){
        rectDealayChild.x = (itemWidth * parseInt(numberToString(delays)[0])) / zoomRate;
        rectDealayChild.resize((itemWidth * parseInt(numberToString(delays)[1])) / 10 / zoomRate, blockHeight );
    }
    if(delayState === "Ex3_1"){
        rectDealayChild.x = (k * itemWidth) / zoomRate;
        rectDealayChild.resize(itemWidth / zoomRate, blockHeight);
    }
    if(delayState === "Ex3_2"){
        rectDealayChild.x = (itemWidth * parseInt(numberToString(delays)[0] + numberToString(delays)[1])) / zoomRate;
        rectDealayChild.resize((itemWidth * parseInt(numberToString(delays)[1])) / 10 / zoomRate, blockHeight);
    }
    if(delayState === "Ex3_3"){
        rectDealayChild.x = itemWidth * parseInt(numberToString(delays)[0] + numberToString(delays)[1]) / zoomRate;
        rectDealayChild.resize((itemWidth * parseInt(numberToString(delays)[2])) / 10 / zoomRate, blockHeight);
    }
    
    rectDealayChild.y = 0;
    rectDealayChild.cornerRadius = 100;
   
    rectDealayChild.fills = [{ type: "SOLID", color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },  visible: true,},];
    rectDealayChild.strokes = [{ type: "SOLID", color: { r: 184 / 255, g: 184 / 255, b: 184 / 255 } },];
    rectDealayChild.strokeWeight = 1;
    rectDealayChild.opacity = 0.5;
    parent.appendChild(rectDealayChild);
}

function numberToString(n) {
    return (n + "").split("");
}
