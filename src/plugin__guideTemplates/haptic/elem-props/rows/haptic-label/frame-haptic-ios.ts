import { fontStyleBold } from "../../../../../plugin/utils/getFonts";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    osType: string; 
    hapticType: string; 
    data?: any;
}

export function createIosHapticLabel({ msg, parent, osType, hapticType, data }: interfaceProps) {
    console.log(data)
    data.forEach((item: any, index: number) => {
        if(item.osType === "iOS" ){
            const hapticLabelFrame = figma.createFrame();
            hapticLabelFrame.layoutMode = "VERTICAL";
            hapticLabelFrame.layoutAlign = "MIN";
            hapticLabelFrame.itemSpacing = 15;
            hapticLabelFrame.primaryAxisAlignItems = 'MIN';
            hapticLabelFrame.primaryAxisSizingMode = "AUTO";
            hapticLabelFrame.counterAxisSizingMode = "AUTO";
            hapticLabelFrame.counterAxisAlignItems = "MIN";
            hapticLabelFrame.clipsContent = false;
            hapticLabelFrame.fills = [
                { type: "SOLID", color: { r: 0 / 255, g: 255 / 255, b: 255 / 255 }, visible: false },
            ];
            parent.appendChild(hapticLabelFrame);
    
            (async () => {
                const hapticLabel = figma.createText();
                hapticLabel.name = "hapticLabel";
                hapticLabel.setBoundVariable("fontStyle", fontStyleBold);
                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                hapticLabel.characters = item.target;
                hapticLabel.textAlignHorizontal = "CENTER";
                hapticLabel.textAlignVertical = "CENTER";
                hapticLabel.layoutAlign = "CENTER";
                hapticLabel.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
                hapticLabel.fontSize = 30;
                hapticLabel.lineHeight = { unit: "AUTO" };
                hapticLabel.fills = [
                    { type: "SOLID", color: msg.isDarkMode ? { r: 255 / 255, g: 255 / 255, b: 255 / 255 } : { r: 0 / 255, g: 0 / 255, b: 0 / 255 } },
                ];
                hapticLabelFrame.appendChild(hapticLabel);
            })();
        }
    }); 
   
}