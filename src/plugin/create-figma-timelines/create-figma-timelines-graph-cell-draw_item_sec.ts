import { getElemHeight } from "./create-figma-timelines-props/guide-elemHeight";

("use strict");

const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
const modeIdBold = collectionBold.modes[0].modeId;
const fontStyleBold = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
fontStyleBold.setValueForMode(modeIdBold, "Bold");

export const createTimelineGraphsCellDrawItemSec = ({ parent, msg, maxDuration, durationArray, textLineHeight }) => {
    for (let i = 0; i < Math.abs(maxDuration / 100) + 2; i++) {
        const timelineRect = figma.createFrame();
        timelineRect.name = "timelineRect " + i;
        timelineRect.x = i * msg.adWidth;
        timelineRect.y = 0;
        timelineRect.clipsContent = false;
        timelineRect.resize(
            1,
            getElemHeight() * durationArray.length
        );
        timelineRect.fills = [
            { type: "SOLID", color: { r: 201 / 255, g: 201 / 255, b: 201 / 255 } },
        ];
        parent.appendChild(timelineRect);

        const timeTextContainer = figma.createFrame();
        timeTextContainer.name = "timeTextContainer " + i;
        timeTextContainer.x = -msg.adWidth / 2;
        timeTextContainer.y = getElemHeight() * durationArray.length;
        timeTextContainer.resize(msg.adWidth, textLineHeight);
        timeTextContainer.primaryAxisAlignItems = "CENTER";
        timeTextContainer.counterAxisAlignItems = "CENTER";
        timeTextContainer.fills = [
            {
                type: "SOLID",
                color: { r: 255 / 255, g: 0 / 255, b: 201 / 255 },
                visible: false,
            },
        ];
        timelineRect.appendChild(timeTextContainer);

        (async () => {
            const timeText = figma.createText();
            timeText.name = `timeText ${i}`;
            timeText.setBoundVariable("fontStyle", fontStyleBold);
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
            if (i < 10) {
                timeText.characters = "0." + i + "s";
            } else {
                timeText.characters =
                    "" + numberToString(i)[0] + "." + numberToString(i)[1] + "s";
            }

            timeText.resize(msg.adWidth, textLineHeight);
            timeText.fontSize = 10;
            timeText.lineHeight = { value: textLineHeight, unit: "PIXELS" };
            timeText.textAlignHorizontal = "CENTER";
            timeText.textAlignVertical = "CENTER";
            timeText.fills = [
                {
                    type: "SOLID",
                    color: { r: 163 / 255, g: 163 / 255, b: 163 / 255 },
                },
            ];
            timeTextContainer.appendChild(timeText);
        })();
    }

}

function numberToString(n) {
    return (n + "").split("");
}
