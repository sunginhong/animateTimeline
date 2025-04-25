import { createEasingLabelWebAos } from "./frame-props-ease-web-aos";
import { createEasingLabelIos } from "./frame-props-ease-ios";

interface easingPropsFrameEaseProps {
    parent: FrameNode;
    osType: string; 
    easingType: string; 
}

export function createEasingPropsFrame({ parent, osType, easingType }: easingPropsFrameEaseProps) {
    
    if( osType === "Web" || osType === "AOS") {
        createEasingLabelWebAos({ parent, osType, easingType });
    }
    if(osType === "iOS") {
        createEasingLabelIos({ parent, osType, easingType });
    }
   
}
