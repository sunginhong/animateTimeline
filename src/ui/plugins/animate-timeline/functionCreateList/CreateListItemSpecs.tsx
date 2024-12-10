import { valOptSpecs } from '../functionCreateMenuSub/Components/valOptSpecs';

export default function CreateListItemSpecs(parent: HTMLElement, parentChild: HTMLElement, index: number, listWidth: number, handleSpecClick: (itemId: number) => void): void {
    const stateValue = parent.getAttribute('data-state-value-specmenu') || '';
    const specElement = document.createElement('p');
    // specElement.setAttribute('data-state-value-specmenu', stateSpecMenu);
    specElement.className = "ui-list-new-item-specs " + "input-elem" + index;
    specElement.style.display = "flex";
    specElement.style.alignItems = "center";
    specElement.style.justifyContent = "center";
    specElement.style.width = listWidth + "px";
    specElement.style.height = "100%";
    specElement.style.overflow = "hidden";
    parent.appendChild(specElement);

    const inputElement = document.createElement('input');
    // inputElement.setAttribute('data-state-value-specmenu', stateSpecMenu);
    inputElement.className = "ui-list-new-item-specs-input " + "input-rect" + index;
    inputElement.type = "string";
    inputElement.readOnly = true;
    inputElement.defaultValue = "Select animation specs";
    inputElement.style.position = "relative";
    inputElement.style.width = (listWidth-6) + "px";
    inputElement.style.height = "calc(100% - 4px)";
    // inputElement.style.color = "rgba(66, 66, 66, 1)";
    inputElement.style.color = "#B3B3B3";
    inputElement.style.textAlign = "center";
    inputElement.style.alignItems = "center";
    inputElement.style.justifyContent = "center";
    inputElement.style.fontSize = "8px";
    inputElement.style.fontWeight = "600";
    inputElement.style.lineHeight = "16px";
    inputElement.style.border = "0";
    inputElement.style.backgroundColor = "transparent";
    inputElement.style.outline = "none";
    inputElement.style.userSelect = "none";
    inputElement.style.caretColor = "transparent";
    inputElement.style.cursor = "pointer";
    inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    specElement.appendChild(inputElement);

    const menuSubSpecElement = document.querySelector(`.ui-menu-spec-sub[data-index="${index}"]`);
    const menuSubSpecRect = menuSubSpecElement.getBoundingClientRect();

    specElement.addEventListener('click', function(event: Event) {
        handleSpecClick(index);
    });

    inputElement.addEventListener('focus', () => {
        inputElement.style.border = "1px solid rgba(3, 199, 90, 1)";
    });

    inputElement.addEventListener('active', () => {
        inputElement.style.border = "1px solid rgba(3, 199, 90, 1)";
    });

    inputElement.addEventListener('blur', () => {
        inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    });

    parent.addEventListener('click', function(event: Event) {
        if (event.target !== specElement && event.target !== inputElement) {
            inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
        }
    });
}

CreateListItemSpecs.specsUpdate = function (index: number, specs: Array<string>): void {
    // console.log('specsUpdate', index, specs);
    let elemSize = {width: 0, height: 0};

    const specsElement = document.querySelectorAll(`.ui-list-new-item-specs.input-elem`+index);
    specsElement.forEach((element: Element) => {
        if (element instanceof HTMLElement) {
            elemSize.width = element.offsetWidth;
            elemSize.height = element.offsetHeight;
        }
    });
    
    const inputElements = document.querySelectorAll(`.ui-list-new-item-specs-input.input-rect`+index);
    inputElements.forEach((element: Element) => {
        if (element instanceof HTMLInputElement && element.classList.contains(`input-rect${index}`)) {
            element.defaultValue = "";
        }
    });
    
    if (specs !== null && specs.length > 0) {
        const existingResultElement = document.querySelector(`.ui-list-new-item-specs-input-result.input-result${index}`);

        const easingElement = document.querySelectorAll(`.ui-list-new-item-specs-input-result.input-result`+index);
        easingElement.forEach((element: Element) => {
            element.remove();
        });

        const specsElementResult = document.createElement('div');
        specsElementResult.className = "ui-list-new-item-specs-input-result " + "input-result" + index;
        specsElementResult.style.position = "absolute";
        specsElementResult.style.width = (elemSize.width-2) + "px";
        specsElementResult.style.height = (elemSize.height-2) + "px";
        specsElementResult.style.backgroundColor = "transparent";
        specsElementResult.style.pointerEvents = 'none';
        specsElementResult.style.cursor = "pointer";
        specsElementResult.style.display = 'flex';
        specsElementResult.style.justifyContent = 'center';
        specsElementResult.style.alignItems = 'center';
        specsElementResult.style.overflow = "hidden";
        specsElementResult.style.overflowX = "scroll";

        const specsElementResultChilds = document.createElement('div');
        specsElementResultChilds.className = "ui-list-new-item-specs-input-result-child " + "input-result-child" + index;
     
        specsElementResultChilds.style.position = "absolute";
        specsElementResultChilds.style.width = "auto";
        specsElementResultChilds.style.height = elemSize.height + "px";
        specsElementResultChilds.style.backgroundColor = "transparent";
        specsElementResultChilds.style.pointerEvents = 'none';
        specsElementResultChilds.style.display = 'flex';
        specsElementResultChilds.style.justifyContent = 'center';
        specsElementResultChilds.style.alignItems = 'center';
        specsElementResultChilds.style.overflowX = "scroll";
        specsElementResultChilds.style.overflow = "-moz-scrollbars-none";
        // specsElementResultChilds.style.left = "0";
        specsElementResultChilds.style.right = specs.length > 2 ? "0" : "center";
        specsElementResultChilds.style.marginLeft = "12px";
        specsElementResultChilds.style.paddingRight = "12px";
        specsElementResult.appendChild(specsElementResultChilds);

        if(specs.length > 2){
            const specsElementResultFade = document.createElement('div');
            specsElementResultFade.style.position = "absolute";
            specsElementResultFade.style.width = "20px";
            specsElementResultFade.style.height = elemSize.height + "px";
            specsElementResultFade.style.backgroundImage = "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
            specsElementResultFade.style.left = "0";
            specsElementResultFade.style.zIndex = "1";
            specsElementResult.appendChild(specsElementResultFade);
        } else {
            null
        }

        specsElement.forEach((element: Element) => {
            element.appendChild(specsElementResult);
        });
        specs.forEach((specs: string, specIndex: number) => {
            const optionElement = document.createElement('div');
            optionElement.setAttribute('data-specs', specs);
            optionElement.style.position = "relative";
            optionElement.style.display = 'flex';
            optionElement.style.justifyContent = 'center';
            optionElement.style.alignItems = 'center';
            optionElement.style.flexShrink = '0';
            optionElement.style.pointerEvents = 'none';
            optionElement.style.borderRadius = '35px';
            optionElement.style.marginRight = '2px';
            
            const specsSelResult = document.querySelector(`.specs-selector-option#opt-${index}-${valOptSpecs.findIndex(item => item.label === specs)}`)
            if (specsSelResult instanceof HTMLElement) {
                optionElement.style.width = specsSelResult.offsetWidth + "px";
                optionElement.style.height = specsSelResult.offsetHeight + "px";
                optionElement.style.backgroundColor = specsSelResult.style.backgroundColor;
              
            }
            specsElementResultChilds.appendChild(optionElement);
            
            const optionLabelElement = document.createElement('p');
            optionLabelElement.style.alignItems = 'center';
            optionLabelElement.style.fontFamily = "Pretendard Variable";
            optionLabelElement.style.fontSize = '8px';
            optionLabelElement.style.margin = '0';
            optionLabelElement.style.fontStyle = 'normal';
            optionLabelElement.style.fontWeight = '600';
            optionLabelElement.style.color = 'rgb(3, 169, 77)';
            optionLabelElement.style.lineHeight = '16px';
            optionLabelElement.style.pointerEvents = 'none';
            optionLabelElement.textContent = specs;
            optionElement.appendChild(optionLabelElement);
        })
      
    } else {
        const existingResultElement = document.querySelector(`.ui-list-new-item-specs-input-result.input-result${index}`);
        if (existingResultElement) {
            existingResultElement.remove();
        }
        inputElements.forEach((element: Element) => {
            if (element instanceof HTMLInputElement && element.classList.contains(`input-rect${index}`)) {
                element.defaultValue = "Select animation specs";
            }
        });
    }
};