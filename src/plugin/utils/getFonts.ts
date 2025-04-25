export const fontStyleHeavy = (() => {
    const collectionHeavy = figma.variables.createVariableCollection("newcollectionHeavy");
    const modeIdHeavy = collectionHeavy.modes[0].modeId;
    const variable = figma.variables.createVariable("fontFamily", collectionHeavy, "STRING");
    variable.setValueForMode(modeIdHeavy, "Heavy");
    return variable;
})();

export const fontStyleBold = (() => {
    const collectionBold = figma.variables.createVariableCollection("newCollectionBold");
    const modeIdBold = collectionBold.modes[0].modeId;
    const variable = figma.variables.createVariable("fontFamily", collectionBold, "STRING");
    variable.setValueForMode(modeIdBold, "Bold");
    return variable;
})();

export const fontStyleRegular = (() => {
    const collectionRegular = figma.variables.createVariableCollection("newCollectionRegular");
    const modeIdRegular = collectionRegular.modes[0].modeId;
    const variable = figma.variables.createVariable("fontFamily", collectionRegular, "STRING");
    variable.setValueForMode(modeIdRegular, "Regular");
    return variable;
})();

export const fontStyleLight = (() => {
    const collectionLight = figma.variables.createVariableCollection("newCollectionLight");
    const modeIdLight = collectionLight.modes[0].modeId;    
    const variable = figma.variables.createVariable("fontFamily", collectionLight, "STRING");
    variable.setValueForMode(modeIdLight, "Light");
    return variable;
})();

export const fontStyleThin = (() => {
    const collectionThin = figma.variables.createVariableCollection("newCollectionThin");
    const modeIdThin = collectionThin.modes[0].modeId;  
    const variable = figma.variables.createVariable("fontFamily", collectionThin, "STRING");
    variable.setValueForMode(modeIdThin, "Thin");
    return variable;
})();
