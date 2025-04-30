import { createWebAosEasingLabel } from "./frame-ease-web-aos";
import { createIosEasingLabel } from "./frame-ease-ios";

interface interfaceProps {
    parent: FrameNode;
    osType: string; 
    easingType: string; 
}

export function createEasingLabel({ parent, osType, easingType }: interfaceProps) {
    if (osType === "Web" || osType === "AOS") {
        createWebAosEasingLabel({ parent: parent, osType: osType, easingType: easingType });
    }
    if (osType === "iOS") {
        createIosEasingLabel({ parent: parent, osType: osType, easingType: easingType });
    }
}
