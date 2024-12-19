export default function CreateListItemDuration(parent: HTMLElement, index: number, listWidth: number, handleDurationClick: () => void): void {

    const parentElement = parent.parentElement;

    const durationElement = document.createElement('p');
    // durationElement.setAttribute('data-index', index.toString());
    // durationElement.className = "ui-list-new-item-duration";

    if (parentElement) {
        durationElement.setAttribute('data-index', parentElement.getAttribute('data-index'));
        durationElement.className = "ui-list-new-item-duration " + "input-elem-" + parentElement.getAttribute('data-index');
    }

    durationElement.style.display = "flex";
    durationElement.style.alignItems = "center";
    durationElement.style.justifyContent = "center";
    durationElement.style.width = listWidth + "px";
    durationElement.style.height = "100%";
    durationElement.style.overflow = "hidden";
    parent.appendChild(durationElement);

    const inputElement = document.createElement('input');
    // inputElement.className = "ui-list-new-item-duration-input";
    // inputElement.type = "number";
    // inputElement.defaultValue = (Math.floor(Math.random() * 6) + 3) + "00"; // Random duration
    if (parentElement) {
        inputElement.setAttribute('data-index', parentElement.getAttribute('data-index'));
        inputElement.className = "ui-list-new-item-duration-input " + "input-rect-" + parentElement.getAttribute('data-index');
    }

    inputElement.defaultValue = "duration(ms)"
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
    inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    durationElement.appendChild(inputElement);

    inputElement.addEventListener('click', function(event: Event) {
        handleDurationClick();
    });
    
    inputElement.addEventListener('focus', () => {
        inputElement.value = "";
        // inputElement.style.color = "rgba(3, 199, 90, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 1)";
    });

    inputElement.addEventListener('active', () => {
        // inputElement.style.color = "rgba(3, 199, 90, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 1)";
    });

    inputElement.addEventListener('blur', () => {
        inputElement.value = inputElement.value === "" ? "duration(ms)" : inputElement.value;
        // inputElement.style.color = "rgba(66, 66, 66, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    });

    parent.addEventListener('click', function(event: Event) {
        if (event.target !== durationElement && event.target !== inputElement) {
            // inputElement.style.color = "rgba(66, 66, 66, 1)";
            inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
        }
    });

    inputElement.addEventListener('input', function(event: Event) {
        const listItem = document.querySelectorAll(`.ui-list-row-new-item.list-new-item-`+this.parentElement.getAttribute('data-index')) as NodeListOf<HTMLElement>;
        if (isNaN(Number(inputElement.value))) {
            // inputElement.value = "";
        }
        listItem.forEach((item, i) => {
            item.setAttribute('data-duration-props', inputElement.value);
        }); 
    });
}

CreateListItemDuration.indexUpdate = function (): void {
    const durationElement = document.querySelectorAll('.ui-list-new-item-duration') as NodeListOf<HTMLElement>;
    const inputElement = document.querySelectorAll('.ui-list-new-item-duration-input') as NodeListOf<HTMLElement>;

    durationElement.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
            item.className = "ui-list-new-item-duration " + "input-elem-" + parentElement.getAttribute('data-index');
        }
    });

    inputElement.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
            item.className = "ui-list-new-item-duration-input " + "input-rect-" + parentElement.getAttribute('data-index');
        }
    });
};