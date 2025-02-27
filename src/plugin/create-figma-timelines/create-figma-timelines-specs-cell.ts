import { createTimelineLeftSpecsProps } from "./create-figma-timelines-left-specs-props";

export const createTimelineSpecsCell = ({ parent, msg }) => {
    const specsCell = figma.createFrame();
    specsCell.name = "specsCell";
    specsCell.layoutAlign = "STRETCH";
    specsCell.layoutMode = "VERTICAL";
    specsCell.primaryAxisSizingMode = "AUTO";
    specsCell.counterAxisSizingMode = "AUTO";
    specsCell.primaryAxisAlignItems = "MIN";
    specsCell.counterAxisAlignItems = "MIN";
    specsCell.layoutSizingHorizontal = "HUG";
    specsCell.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    specsCell.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(specsCell);

    msg.newChecked.forEach((values, i) => {
        const specsParent = figma.createFrame();
        specsParent.name = "specsParent";
        specsParent.layoutAlign = "STRETCH";
        specsParent.layoutMode = "HORIZONTAL";
        specsParent.primaryAxisSizingMode = "AUTO";
        specsParent.counterAxisSizingMode = "AUTO";
        specsParent.primaryAxisAlignItems = "MIN";
        specsParent.counterAxisAlignItems = "MIN";
        specsParent.layoutSizingHorizontal = "HUG";
        specsParent.paddingTop = 10;
        specsParent.paddingBottom = 10;
        specsParent.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        specsParent.layoutGrow = 0;
        specsParent.fills = [
            {
                type: "SOLID",
                color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
                visible: false,
            },
        ];
        specsCell.appendChild(specsParent);

        const data = values;
        createTimelineLeftSpecsProps({ parent: specsParent, msg: data, index: i, delayBool: false });
    });
}