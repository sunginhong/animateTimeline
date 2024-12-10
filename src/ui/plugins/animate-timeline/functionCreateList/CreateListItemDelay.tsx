export default function CreateListItemDelay(parent: HTMLElement, index: number, listWidth: number, handleDelayClick: () => void): void {

    const delayElement = document.createElement('p');
    delayElement.setAttribute('data-index', index.toString());
    delayElement.className = "ui-list-new-item-delay";
    delayElement.style.display = "flex";
    delayElement.style.alignItems = "center";
    delayElement.style.justifyContent = "center";
    delayElement.style.width = listWidth + "px";
    delayElement.style.height = "100%";
    delayElement.style.overflow = "hidden";
    parent.appendChild(delayElement);

    const inputElement = document.createElement('input');
    inputElement.setAttribute('data-index', index.toString());
    inputElement.className = "ui-list-new-item-delay-input";
    // inputElement.type = "number";
    // inputElement.defaultValue = (Math.floor(Math.random() * 6) + 3) + "00"; // Random duration
    inputElement.defaultValue = "delay(ms)"
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
    inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    delayElement.appendChild(inputElement);

    inputElement.addEventListener('click', function(event: Event) {
        handleDelayClick();
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
    
}