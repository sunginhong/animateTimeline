export default function CreateListItemDelay(parent: HTMLElement, index: number, listWidth: number, handleDelayClick: () => void): void {

    const parentElement = parent.parentElement;
    const delayElement = document.createElement('p');

    if (parentElement) {
        delayElement.setAttribute('data-index', parentElement.getAttribute('data-index'));
        delayElement.className = "ui-list-new-item-delay " + "input-elem-" + parentElement.getAttribute('data-index');
    }

    delayElement.style.display = "flex";
    delayElement.style.alignItems = "center";
    delayElement.style.justifyContent = "center";
    delayElement.style.width = listWidth + "px";
    delayElement.style.height = "100%";
    delayElement.style.overflow = "hidden";
    parent.appendChild(delayElement);

    const inputElement = document.createElement('input');
  
    if (parentElement) {
        inputElement.setAttribute('data-index', parentElement.getAttribute('data-index'));
        inputElement.className = "ui-list-new-item-delay-input " + "input-rect-" + parentElement.getAttribute('data-index');
    }

    inputElement.placeholder = "delay(ms)"
    inputElement.type = "number";
    inputElement.style.position = "relative";
    inputElement.style.width = (listWidth-6) + "px";
    inputElement.style.height = "calc(100% - 4px)";
    inputElement.style.textAlign = "center";
    inputElement.style.alignItems = "center";
    inputElement.style.justifyContent = "center";
    inputElement.style.border = "0";
    inputElement.style.backgroundColor = "transparent";
    inputElement.style.outline = "none";
    inputElement.style.userSelect = "none";
    inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    delayElement.appendChild(inputElement);

    inputElement.addEventListener('click', function(event: Event) {
        handleDelayClick();
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
        inputElement.value = inputElement.value === "" ? "delay(ms)" : inputElement.value;
        // inputElement.style.color = "rgba(66, 66, 66, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    });

    parent.addEventListener('click', function(event: Event) {
        if (event.target !== delayElement && event.target !== inputElement) {
            // inputElement.style.color = "rgba(66, 66, 66, 1)";
            inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
        }
    });

    inputElement.addEventListener('input', function(event: Event) {
        const listItem = document.querySelectorAll(`.ui-list-row-new-item.list-new-item-`+this.parentElement.getAttribute('data-index')) as NodeListOf<HTMLElement>;
        if (isNaN(Number(inputElement.value))) {
            // inputElement.value = null;
            listItem.forEach((item, i) => {
                // item.setAttribute('data-delay-props', null);
            }); 
        }
        listItem.forEach((item, i) => {
            item.setAttribute('data-delay-props', inputElement.value);
        }); 
    });
}

CreateListItemDelay.indexUpdate = function (): void {
    const delayElement = document.querySelectorAll('.ui-list-new-item-delay') as NodeListOf<HTMLElement>;
    const inputElement = document.querySelectorAll('.ui-list-new-item-delay-input') as NodeListOf<HTMLElement>;

    delayElement.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
            item.className = "ui-list-new-item-delay " + "input-elem-" + parentElement.getAttribute('data-index');
        }
    });

    inputElement.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
            item.className = "ui-list-new-item-delay-input " + "input-rect-" + parentElement.getAttribute('data-index');
        }
    });
};

