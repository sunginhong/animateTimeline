import { FunctionMultiMenuOut } from './FunctionMultiMenuOut';

export default function CreateListItemLabels(parent: HTMLElement, index: number ,listWidth: number, handleLabelClick: () => void): void {

    const parentElement = parent.parentElement;

    const labelContainer = document.createElement('div');
    // labelContainer.setAttribute('data-index', index.toString());
    // labelContainer.className = "ui-list-new-item-label";
    if (parentElement) {
        labelContainer.setAttribute('data-index', parentElement.getAttribute('data-index'));
        labelContainer.className = "ui-list-new-item-label";
    }

    labelContainer.style.display = "flex";
    labelContainer.style.alignItems = "center";
    labelContainer.style.justifyContent = "center";
    labelContainer.style.width = listWidth + "px";
    labelContainer.style.height = "100%";
    labelContainer.style.overflow = "hidden";
    parent.appendChild(labelContainer);

    const inputElement = document.createElement('input');

    if (parentElement) {
        inputElement.setAttribute('data-index', parentElement.getAttribute('data-index'));
        inputElement.className = "ui-list-new-item-label-input";
    }
    
    inputElement.placeholder = "Add label name";
    inputElement.type = "string";
    inputElement.style.position = "relative";
    inputElement.style.width = (listWidth-6) + "px";
    inputElement.style.height = "calc(100% - 4px)";
    inputElement.style.borderRadius = "4px 0px 0px 4px";
    inputElement.style.alignItems = "center";
    inputElement.style.justifyContent = "center";
    inputElement.style.border = "0";
    inputElement.style.backgroundColor = "transparent";
    inputElement.style.outline = "none";
    inputElement.style.userSelect = "none";
    inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    labelContainer.appendChild(inputElement);

    inputElement.addEventListener('click', function(event: Event) {
        handleLabelClick();
    });

    inputElement.addEventListener('focus', () => {
        // inputElement.value = "";
        // inputElement.style.color = "rgba(3, 199, 90, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 1)";
    });

    inputElement.addEventListener('active', () => {
        // inputElement.style.color = "rgba(3, 199, 90, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 1)";
    });

    inputElement.addEventListener('blur', () => {
        // inputElement.value = inputElement.value === "" ? "Add label name" : inputElement.value;
        // inputElement.style.color = "rgba(66, 66, 66, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    });

    parent.addEventListener('click', function(event: Event) {
        if (event.target !== labelContainer && event.target !== inputElement) {
            // inputElement.style.color = "rgba(66, 66, 66, 1)";
            inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
        }
        FunctionMultiMenuOut();
    });

    inputElement.addEventListener('input', function(event: Event) {
        const listItem = document.querySelectorAll(`.ui-list-row-new-item.list-new-item-`+this.parentElement.getAttribute('data-index')) as NodeListOf<HTMLElement>;
        if (isNaN(Number(inputElement.value))) {
            // inputElement.value = null;
        }
        listItem.forEach((item, i) => {
            item.setAttribute('data-label-props', inputElement.value);
        }); 
    });
}

CreateListItemLabels.indexUpdate = function (): void {
    const labelContainer = document.querySelectorAll('.ui-list-new-item-label') as NodeListOf<HTMLElement>;
    const inputElement = document.querySelectorAll('.ui-list-new-item-label-input') as NodeListOf<HTMLElement>;

    labelContainer.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
        }
    });

    inputElement.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
        }
    });
};

