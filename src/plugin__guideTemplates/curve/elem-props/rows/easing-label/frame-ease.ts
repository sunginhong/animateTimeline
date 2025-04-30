import { createWebAosEasingLabel } from "./frame-ease-web-aos";
import { createIosEasingLabel } from "./frame-ease-ios";

interface interfaceProps {
    msg: any;
    parent: FrameNode;
    osType: string; 
    easingType: string; 
}

export function createEasingLabel({ msg, parent, osType, easingType }: interfaceProps) {
    if (osType === "Web" || osType === "AOS") {
        createWebAosEasingLabel({ msg: msg, parent: parent, osType: osType, easingType: easingType });
    }
    if (osType === "iOS") {
        createIosEasingLabel({ msg: msg, parent: parent, osType: osType, easingType: easingType });
    }
}
