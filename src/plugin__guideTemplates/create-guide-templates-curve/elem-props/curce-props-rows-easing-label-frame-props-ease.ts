import { fontStyleBold } from "../../../plugin/utils/getFonts";
import { getEasing } from "../../../plugin/utils/getEasing";

interface easingPropsFrameEaseProps {
    parents: FrameNode;
    osType: string; 
    easingType: string; 
}

export function createEasingPropsFrame({ parents, osType, easingType }: easingPropsFrameEaseProps) {
    
    (async () => {
        if( osType === "Web" || osType === "AOS") {
            const easingProps = figma.createText();
            easingProps.name = "easingProps";
            easingProps.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
            easingProps.characters = 
                osType === "Web" ? "cubic-bezier(" + getEasing(easingType)[0] + ", " +  getEasing(easingType)[1] + ", " + getEasing(easingType)[2] + ", " + getEasing(easingType)[3] + ")" : 
                osType === "AOS" ? "PathInterpolator(" + getEasing(easingType)[0] + "f, " +  getEasing(easingType)[1] + "f, " + getEasing(easingType)[2] + "f, " + getEasing(easingType)[3] + "f)" : 
                "";
            easingProps.textAlignHorizontal = "CENTER";
            easingProps.textAlignVertical = "CENTER";
            easingProps.layoutAlign = "CENTER";
            easingProps.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            easingProps.fontSize = 24;
            easingProps.lineHeight = { unit: "AUTO" };
            easingProps.fills = [
                { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
            ];
            parents.appendChild(easingProps);
        } 
    })();

    if(osType === "iOS") {
        const easingPropsFrame = figma.createFrame();
        easingPropsFrame.layoutMode = "VERTICAL";
        easingPropsFrame.layoutAlign = "MIN";
        easingPropsFrame.primaryAxisAlignItems = 'MIN'
        easingPropsFrame.primaryAxisSizingMode = "AUTO";
        easingPropsFrame.counterAxisSizingMode = "AUTO";
        easingPropsFrame.counterAxisAlignItems = "MIN";
        easingPropsFrame.itemSpacing = 15;
        easingPropsFrame.name = "easingPropsFrame";
        easingPropsFrame.clipsContent = false;
        easingPropsFrame.fills = [
            { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
        
        ];
        parents.appendChild(easingPropsFrame);

        (async () => {
            if( osType === "iOS") {
                const easingPropsTop = figma.createText();
                easingPropsTop.name = "easingPropsTop";
                easingPropsTop.setBoundVariable("fontStyle", fontStyleBold);
                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                easingPropsTop.characters = 
                    osType === "iOS" ? "UIKit : timingCurve(" + getEasing(easingType)[0] + ", " +  getEasing(easingType)[1] + ", " + getEasing(easingType)[2] + ", " + getEasing(easingType)[3] + ")" :  
                    "";
                easingPropsTop.textAlignHorizontal = "CENTER";
                easingPropsTop.textAlignVertical = "CENTER";
                easingPropsTop.layoutAlign = "CENTER";
                easingPropsTop.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
                easingPropsTop.fontSize = 24;
                easingPropsTop.lineHeight = { unit: "AUTO" };
                easingPropsTop.fills = [
                    { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
                ];
                easingPropsFrame.appendChild(easingPropsTop);

                const easingPropsBtm = figma.createText();
                easingPropsBtm.name = "easingPropsBtm";
                easingPropsBtm.setBoundVariable("fontStyle", fontStyleBold);
                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                easingPropsBtm.characters = 
                    osType === "iOS" ? "SwiftUI : " + (
                    easingType === "Ease-Standard" ? ".smooth(duration: N)" : 
                    easingType === "Ease-Out" ? ".smooth(duration: N)" : 
                    easingType === "Ease-Out-Level1" ? ".smooth(duration: N, extraBounce: 0.1)" : 
                    easingType === "Ease-InOut" ? ".smooth(duration: N)" : 
                    easingType === "Spring" ? ".bouncy(duration: N, extraBounce: 0.1)" :
                    easingType === "Spring-Level1" ? ".bouncy(duration: N, extraBounce: 0.2)" : 
                    easingType === "Spring-Level2" ? ".bouncy(duration: N, extraBounce: 0.3)" : 
                    ""
                    ) : "";
                easingPropsBtm.textAlignHorizontal = "CENTER";
                easingPropsBtm.textAlignVertical = "CENTER";
                easingPropsBtm.layoutAlign = "CENTER";
                easingPropsBtm.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
                easingPropsBtm.fontSize = 24;
                easingPropsBtm.lineHeight = { unit: "AUTO" };
                easingPropsBtm.fills = [
                    { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
                ];
                easingPropsFrame.appendChild(easingPropsBtm);
            } 
        })();
    }
   
}
