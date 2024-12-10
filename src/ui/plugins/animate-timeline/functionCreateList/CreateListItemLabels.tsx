export default function CreateListItemLabels(parent: HTMLElement, index: number ,listWidth: number, handleLabelClick: () => void): void {

    const labelContainer = document.createElement('div');
    labelContainer.setAttribute('data-index', index.toString());
    labelContainer.className = "ui-list-new-item-label";
    labelContainer.style.display = "flex";
    labelContainer.style.alignItems = "center";
    labelContainer.style.justifyContent = "center";
    labelContainer.style.width = listWidth + "px";
    labelContainer.style.height = "100%";
    parent.appendChild(labelContainer);

    const inputElement = document.createElement('input');
    inputElement.setAttribute('data-index', index.toString());
    inputElement.className = "ui-list-new-item-label-input";
    inputElement.defaultValue = "Add label name";
    inputElement.style.position = "relative";
    inputElement.style.width = (listWidth-6) + "px";
    inputElement.style.height = "calc(100% - 4px)";
    inputElement.style.borderRadius = "4px 0px 0px 4px";
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
    labelContainer.appendChild(inputElement);

    inputElement.addEventListener('click', function(event: Event) {
        handleLabelClick();
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
        inputElement.value = inputElement.value === "" ? "Add label name" : inputElement.value;
        // inputElement.style.color = "rgba(66, 66, 66, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    });

    parent.addEventListener('click', function(event: Event) {
        if (event.target !== labelContainer && event.target !== inputElement) {
            // inputElement.style.color = "rgba(66, 66, 66, 1)";
            inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
        }
    });
}