export const getEasing = (ease) => {
    const easings = [
        {
            standard: [0.15, 0, 0.15, 1],
            easeOut: [0.33, 1, 0.68, 1],
            easeOutLevel1: [0.25, 1, 0.5, 1],
            easeIn: [0.55, 0.055, 0.675, 0.19],
            easeInOut: [0.65, 0, 0.35, 1],
            spring: [0.34, 1.5, 0.54, 1],
            springLevel1: [0.45, 1.8, 0.57, 0.92],
            springLevel2: [0.45, 2.4, 0.68, 0.86],
        },
    ]

    switch (ease) {
        case "Ease-Standard":
            return easings[0].standard
        case "Ease-Out":
            return easings[0].easeOut
        case "Ease-Out-Level1":
            return easings[0].easeOutLevel1
        case "Ease-InOut":
            return easings[0].easeInOut
        case "Spring":
            return easings[0].spring
        case "Spring-Level1":
            return easings[0].springLevel1
        case "Spring-Level2":
            return easings[0].springLevel2
        default:
            console.log("error")
    }
}
