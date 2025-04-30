import { fontStyleBold } from "../../../../../plugin/utils/getFonts";
import { getEasing } from "../../../../../plugin/utils/getEasing";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    osType: string; 
    easingType: string; 
}

export function createWebAosEasingLabel({ msg, parent, osType, easingType }: interfaceProps) {
    
    (async () => {
        const easingLabel = figma.createText();
        easingLabel.name = "easingLabel";
        easingLabel.setBoundVariable("fontStyle", fontStyleBold);
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        easingLabel.characters = 
            osType === "Web" ? "cubic-bezier(" + getEasing(easingType)[0] + ", " +  getEasing(easingType)[1] + ", " + getEasing(easingType)[2] + ", " + getEasing(easingType)[3] + ")" : 
            osType === "AOS" ? "PathInterpolator(" + getEasing(easingType)[0] + "f, " +  getEasing(easingType)[1] + "f, " + getEasing(easingType)[2] + "f, " + getEasing(easingType)[3] + "f)" : 
            "";
        easingLabel.textAlignHorizontal = "CENTER";
        easingLabel.textAlignVertical = "CENTER";
        easingLabel.layoutAlign = "CENTER";
        easingLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        easingLabel.fontSize = 24;
        easingLabel.lineHeight = { unit: "AUTO" };
        easingLabel.fills = [
            { type: "SOLID", color: msg.isDarkMode ? { r: 255 / 255, g: 255 / 255, b: 255 / 255 } : { r: 0 / 255, g: 0 / 255, b: 0 / 255 } },
        ];
        parent.appendChild(easingLabel);
    })();
   
}
