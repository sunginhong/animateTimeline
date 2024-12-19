import { valOptEasing } from '../functionCreateMenuSub/Components/valOptEasing';

export default function CreateListItemEasing(parent: HTMLElement, index: number, listWidth: number, handleEasingClick: (itemId: number) => void): void {

    const parentElement = parent.parentElement;

    const easingElement = document.createElement('p');
    // easingElement.setAttribute('data-index', index.toString());
    // easingElement.className = "ui-list-new-item-easing " + "input-elem-" + index;

    if (parentElement) {
        easingElement.setAttribute('data-index', parentElement.getAttribute('data-index'));
        easingElement.className = "ui-list-new-item-easing " + "input-elem-" + parentElement.getAttribute('data-index');
    }

    easingElement.style.display = "flex";
    easingElement.style.alignItems = "center";
    easingElement.style.justifyContent = "center";
    easingElement.style.width = listWidth + "px";
    easingElement.style.height = "100%";
    easingElement.style.overflow = "hidden";
    parent.appendChild(easingElement);

    const inputElement = document.createElement('input');
    // inputElement.className = "ui-list-new-item-easing-input " + "input-rect-" + index;

    if (parentElement) {
        inputElement.setAttribute('data-index', parentElement.getAttribute('data-index'));
        inputElement.className = "ui-list-new-item-easing-input " + "input-rect-" + parentElement.getAttribute('data-index');
    }
    
    inputElement.defaultValue = "Select easing function";
    inputElement.type = "string";
    inputElement.readOnly = true;
    inputElement.style.position = "relative";
    inputElement.style.width = (listWidth-6) + "px";
    inputElement.style.height = "calc(100% - 4px)";
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
    easingElement.appendChild(inputElement);

    easingElement.addEventListener('click', function(event: Event) {
        handleEasingClick(-1)
        handleEasingClick(Number(this.getAttribute('data-index')));
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
        if (event.target !== easingElement && event.target !== inputElement) {
            inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
        }
    });    
}

CreateListItemEasing.easingUpdate = function (index: number, easing: string): void {
    let elemSize = {width: 0, height: 0};

    // document.querySelector(`.ui-list-new-item-easing-input.input-rect-`+index)?.remove();

    const easingElements = document.querySelectorAll(`.ui-list-new-item-easing.input-elem-`+index);
    easingElements.forEach((element: Element) => {
        if (element instanceof HTMLElement) {
            elemSize.width = element.offsetWidth;
            elemSize.height = element.offsetHeight;
        }
    });
    const inputElements = document.querySelectorAll(`.ui-list-new-item-easing-input.input-rect-`+index);
    inputElements.forEach((element: Element) => {
        if (element instanceof HTMLInputElement && element.classList.contains(`input-rect-${index}`)) {
            element.defaultValue = "";
        }
    });

    if (easing !== "None") {
        const existingResultElement = document.querySelector(`.ui-list-new-item-easing-input.input-rect-${index}`);

        const easingElement = document.querySelectorAll(`.ui-list-new-item-easing-input.input-rect-`+index);
        easingElement.forEach((element: Element) => {
            element.remove();
        });
        
        const easingElementResult = document.createElement('div');
        easingElementResult.className = "ui-list-new-item-easing-input " + "input-rect-" + index;
        easingElementResult.setAttribute('data-index', index.toString());
        easingElementResult.style.position = "absolute";
        easingElementResult.style.width = elemSize.width + "px";
        easingElementResult.style.height = elemSize.height + "px";
        easingElementResult.style.backgroundColor = "transparent";
        // easingElementResult.style.pointerEvents = 'none';
        easingElementResult.style.cursor = "Pointer";
        easingElementResult.style.display = 'flex';
        easingElementResult.style.justifyContent = 'center';
        easingElementResult.style.alignItems = 'center';
        easingElements.forEach((element: Element) => {
            element.appendChild(easingElementResult);
        });

        const optionElement = document.createElement('div');
        optionElement.setAttribute('data-easing', easing);
        optionElement.style.display = 'flex';
        optionElement.style.justifyContent = 'center';
        optionElement.style.alignItems = 'center';
        optionElement.style.alignItems = 'center';
        optionElement.style.pointerEvents = 'none';
        optionElement.style.cursor = "grab";
        optionElement.style.borderRadius = '4px';
        const easingSelResult = document.querySelector(`.easing-selector-label#opt-${index}-${valOptEasing.findIndex(item => item.label === easing)}`)
        if (easingSelResult instanceof HTMLElement) {
            optionElement.style.width = easingSelResult.offsetWidth + "px";
            optionElement.style.height = easingSelResult.offsetHeight + "px";
            optionElement.style.backgroundColor = easingSelResult.style.backgroundColor;
        }
        easingElementResult.appendChild(optionElement);
        
        const optionLabelElement = document.createElement('p');
        optionLabelElement.style.alignItems = 'center';
        optionLabelElement.style.fontFamily = "Pretendard Variable";
        optionLabelElement.style.fontSize = '8px';
        optionLabelElement.style.margin = '0';
        optionLabelElement.style.fontStyle = 'normal';
        optionLabelElement.style.fontWeight = '600';
        optionLabelElement.style.color = 'rgb(66, 66, 66)';
        optionLabelElement.style.lineHeight = '16px';
        optionLabelElement.style.pointerEvents = 'none';
        optionLabelElement.textContent = easing;
        optionElement.appendChild(optionLabelElement);

        const listItem = document.querySelectorAll(`.ui-list-row-new-item.list-new-item-`+index) as NodeListOf<HTMLElement>;

        listItem.forEach((item, i) => {
            item.setAttribute('data-easing-props', easing);
        }); 
      
    } else {
        const existingResultElement = document.querySelector(`.ui-list-new-item-easing-input.input-rect-${index}`);
        if (existingResultElement) {
            existingResultElement.remove();
        }
        inputElements.forEach((element: Element) => {
            if (element instanceof HTMLInputElement && element.classList.contains(`input-rect-${index}`)) {
                element.defaultValue = "Select easing function";
            }
        });

        const listItem = document.querySelectorAll(`.ui-list-row-new-item.list-new-item-`+index) as NodeListOf<HTMLElement>;
        listItem.forEach((item, i) => {
            item.setAttribute('data-easing-props', null);
        }); 
    }
};

CreateListItemEasing.indexUpdate = function (): void {
    const easingElement = document.querySelectorAll('.ui-list-new-item-easing') as NodeListOf<HTMLElement>;
    const inputElement = document.querySelectorAll('.ui-list-new-item-easing-input') as NodeListOf<HTMLElement>;

    easingElement.forEach((item, i) => {
        item.setAttribute('data-index', i.toString());
        item.className = "ui-list-new-item-easing " + "input-elem-" + i.toString();
    });

    inputElement.forEach((item, i) => {
        item.setAttribute('data-index', i.toString());
        item.className = "ui-list-new-item-easing-input " + "input-rect-" + i.toString();
    });
    
     /// index update...
    const easingElements = document.querySelectorAll('.ui-list-new-item-easing') as NodeListOf<HTMLElement>;
    const inputElements = document.querySelectorAll(`.ui-list-new-item-easing-input`) as NodeListOf<HTMLElement>;
    const easingElementResult = document.querySelectorAll(`.ui-list-new-item-easing-input-result`) as NodeListOf<HTMLElement>;

    easingElements.forEach((item, i) => {
        item.setAttribute('data-index', i.toString());
        item.className = "ui-list-new-item-easing " + "input-elem-" + i.toString();
    });

    inputElements.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
            item.className = "ui-list-new-item-easing-input " + "input-rect-" + parentElement.getAttribute('data-index');
        }
    });

    easingElementResult.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
            item.className = "ui-list-new-item-easing-input " + "input-rect-" + parentElement.getAttribute('data-index');
        }
    });
    
};