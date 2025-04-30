export const getHaptic = (haptic) => {
    switch (haptic) {
        case "Selection":
            return [
                {"osType": "AOS", "target": "API 30이상", "desc": "view.performHapticFeedback(HapticFeedbackConstants.CONTEXT_CLICK);"},
                {"osType": "AOS", "target": "API 26 ~ 29", "desc": "vibrator.vibrate(VibrationEffect.createOneShot(200, VibrationEffect.DEFAULT_AMPLITUDE))"},
                {"osType": "AOS", "target": "API 26", "desc": "햅틱 적용 X"},
                {"osType": "iOS", "target": "let generator = UISelectionFeedbackGenerator()"},
                {"osType": "iOS", "target": "generator.selectionChanged()"},
            ]
        case "Selection-0.5":
            return [
                {"osType": "AOS", "target": "API 30이상", "desc": "view.performHapticFeedback(HapticFeedbackConstants.CLOCK_TICK);"},
                {"osType": "AOS", "target": "API 26 ~ 29", "desc": "vibrator.vibrate(VibrationEffect.createOneShot(120, VibrationEffect.DEFAULT_AMPLITUDE))"},
                {"osType": "AOS", "target": "API 26", "desc": "햅틱 적용 X"},
                {"osType": "iOS", "target": "let generator = UIImpactFeedbackGenerator(style: .light)"},
                {"osType": "iOS", "target": "generator.impactOccurred(intensity: 0.5)"},
            ]
        case "Error":
            return [
                {"osType": "AOS", "target": "API 30이상", "desc": "view.performHapticFeedback(HapticFeedbackConstants.REJECT);"},
                {"osType": "AOS", "target": "API 26 ~ 29", "desc": "vibrator.vibrate(VibrationEffect.createOneShot(300, VibrationEffect.DEFAULT_AMPLITUDE))"},
                {"osType": "AOS", "target": "API 26", "desc": "햅틱 적용 X"},
                {"osType": "iOS", "target": "let generator = UINotificationFeedbackGenerator()"},
                {"osType": "iOS", "target": "generator.notificationOccurred(.error)"},
            ]
        case "Success":
            return [
                {"osType": "AOS", "target": "API 30이상", "desc": "view.performHapticFeedback(HapticFeedbackConstants.CONFIRM);"},
                {"osType": "AOS", "target": "API 26 ~ 29", "desc": "vibrator.vibrate(VibrationEffect.createOneShot(300, VibrationEffect.DEFAULT_AMPLITUDE))"},
                {"osType": "AOS", "target": "API 26", "desc": "햅틱 적용 X"},
                {"osType": "iOS", "target": "let generator = UINotificationFeedbackGenerator()"},
                {"osType": "iOS", "target": "generator.notificationOccurred(.success)"},
            ]
        default:
            console.log("error")
    }
}
