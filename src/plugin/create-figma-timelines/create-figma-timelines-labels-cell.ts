import { createTimelineLeftLabelsProps } from "./create-figma-timelines-left-labels-props";

export const createTimelineLabelsCell = ({ parent, msg }) => {
    const labelsCell = figma.createFrame();
    labelsCell.name = "labelsCell";
    labelsCell.layoutAlign = "STRETCH";
    labelsCell.layoutMode = "VERTICAL";
    labelsCell.primaryAxisSizingMode = "AUTO";
    labelsCell.counterAxisSizingMode = "AUTO";
    labelsCell.primaryAxisAlignItems = "MIN";
    labelsCell.counterAxisAlignItems = "MIN";
    labelsCell.layoutSizingHorizontal = "HUG";
    labelsCell.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    labelsCell.fills = [
        {
            type: "SOLID",
            color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
            visible: false,
        },
    ];
    parent.appendChild(labelsCell);

    msg.newChecked.forEach((values, i) => {
        const labelsParent = figma.createFrame();
        labelsParent.name = "labelsParent";
        labelsParent.layoutAlign = "STRETCH";
        labelsParent.layoutMode = "HORIZONTAL";
        labelsParent.primaryAxisSizingMode = "AUTO";
        labelsParent.counterAxisSizingMode = "AUTO";
        labelsParent.primaryAxisAlignItems = "MIN";
        labelsParent.counterAxisAlignItems = "MIN";
        labelsParent.layoutSizingHorizontal = "HUG";
        labelsParent.paddingTop = 10;
        labelsParent.paddingBottom = 10;
        labelsParent.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        labelsParent.layoutGrow = 0;
        labelsParent.fills = [
            {
                type: "SOLID",
                color: { r: 240 / 255, g: 240 / 255, b: 240 / 255 },
                visible: false,
            },
        ];
        labelsCell.appendChild(labelsParent);

        const data = values;
        createTimelineLeftLabelsProps({ parent: labelsParent, msg: data, index: i, delayBool: false });
    });
}