import { fontStyleBold } from "../../../../../plugin/utils/getFonts";
import { getEasing } from "../../../../../plugin/utils/getEasing";

interface interfaceProps {
    parent: FrameNode;
    osType: string; 
    easingType: string; 
}

export function createIosEasingLabel({ parent, osType, easingType }: interfaceProps) {
    
    const easingFrame = figma.createFrame();
    easingFrame.layoutMode = "VERTICAL";
    easingFrame.layoutAlign = "MIN";
    easingFrame.primaryAxisAlignItems = 'MIN';
    easingFrame.primaryAxisSizingMode = "AUTO";
    easingFrame.counterAxisSizingMode = "AUTO";
    easingFrame.counterAxisAlignItems = "MIN";
    easingFrame.itemSpacing = 15;
    easingFrame.name = "easingFrame";
    easingFrame.clipsContent = false;
    easingFrame.fills = [
        { type: "SOLID", color: { r: 32 / 255, g: 32 / 255, b: 32 / 255 }, visible: false },
    ];
    parent.appendChild(easingFrame);

    (async () => {
        if (osType === "iOS") {
            const easingLabelTop = figma.createText();
            easingLabelTop.name = "easingLabelTop";
            easingLabelTop.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
            easingLabelTop.characters = 
                osType === "iOS" ? "UIKit : timingCurve(" + getEasing(easingType)[0] + ", " +  getEasing(easingType)[1] + ", " + getEasing(easingType)[2] + ", " + getEasing(easingType)[3] + ")" :  
                "";
            easingLabelTop.textAlignHorizontal = "CENTER";
            easingLabelTop.textAlignVertical = "CENTER";
            easingLabelTop.layoutAlign = "CENTER";
            easingLabelTop.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            easingLabelTop.fontSize = 24;
            easingLabelTop.lineHeight = { unit: "AUTO" };
            easingLabelTop.fills = [
                { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
            ];
            easingFrame.appendChild(easingLabelTop);

            const easingLabelBottom = figma.createText();
            easingLabelBottom.name = "easingLabelBottom";
            easingLabelBottom.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
            easingLabelBottom.characters = 
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
            easingLabelBottom.textAlignHorizontal = "CENTER";
            easingLabelBottom.textAlignVertical = "CENTER";
            easingLabelBottom.layoutAlign = "CENTER";
            easingLabelBottom.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            easingLabelBottom.fontSize = 24;
            easingLabelBottom.lineHeight = { unit: "AUTO" };
            easingLabelBottom.fills = [
                { type: "SOLID", color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } },
            ];
            easingFrame.appendChild(easingLabelBottom);
        } 
    })();
}
